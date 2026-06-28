const currencies = [
  { code: "RUB", flag: "🇷🇺", names: { ru: "Российский рубль", en: "Russian ruble" } },
  { code: "USD", flag: "🇺🇸", names: { ru: "Доллар США", en: "US dollar" } },
  { code: "EUR", flag: "🇪🇺", names: { ru: "Евро", en: "Euro" } },
  { code: "KZT", flag: "🇰🇿", names: { ru: "Казахстанский тенге", en: "Kazakhstani tenge" } },
  { code: "CNY", flag: "🇨🇳", names: { ru: "Китайский юань", en: "Chinese yuan" } },
  { code: "GBP", flag: "🇬🇧", names: { ru: "Британский фунт", en: "British pound" } },
  { code: "TRY", flag: "🇹🇷", names: { ru: "Турецкая лира", en: "Turkish lira" } },
  { code: "JPY", flag: "🇯🇵", names: { ru: "Японская иена", en: "Japanese yen" } },
  { code: "AED", flag: "🇦🇪", names: { ru: "Дирхам ОАЭ", en: "UAE dirham" } },
  { code: "GEL", flag: "🇬🇪", names: { ru: "Грузинский лари", en: "Georgian lari" } },
];

const fallbackRates = {
  USD: 1,
  EUR: 0.925,
  RUB: 88.5,
  KZT: 520.2,
  CNY: 7.25,
  GBP: 0.79,
  TRY: 32.9,
  JPY: 157.3,
  AED: 3.6725,
  GEL: 2.78,
};

const i18n = {
  ru: {
    appName: "Converter Neo",
    offline: "Офлайн",
    chooseCurrency: "Выберите валюту",
    settings: "Настройки",
    theme: "Тема",
    language: "Язык",
    rates: "Курсы",
    updated: "обновлено",
    cached: "кэш",
    live: "онлайн",
    noRates: "Курсы пока недоступны",
    dark: "Темная",
    light: "Светлая",
    ocean: "Океан",
    forest: "Лес",
    rose: "Роза",
    english: "English",
    russian: "Русский",
  },
  en: {
    appName: "Converter Neo",
    offline: "Offline",
    chooseCurrency: "Choose currency",
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    rates: "Rates",
    updated: "updated",
    cached: "cached",
    live: "live",
    noRates: "Rates are not available yet",
    dark: "Dark",
    light: "Light",
    ocean: "Ocean",
    forest: "Forest",
    rose: "Rose",
    english: "English",
    russian: "Русский",
  },
};

const themes = ["dark", "light", "ocean", "forest", "rose"];
const languages = ["ru", "en"];
const cacheKey = "converterNeoRates";
const prefsKey = "converterNeoPrefs";

const state = {
  rows: ["RUB", "USD", "EUR", "KZT", "CNY"],
  activeIndex: 0,
  sourceIndex: 0,
  rates: fallbackRates,
  ratesDate: null,
  offline: false,
  currentInput: "0",
  expression: null,
  pendingOperator: null,
  prefs: loadPrefs(),
};

const currencyList = document.querySelector("#currencyList");
const currencyDialog = document.querySelector("#currencyDialog");
const currencyOptions = document.querySelector("#currencyOptions");
const settingsDialog = document.querySelector("#settingsDialog");
const ratesDialog = document.querySelector("#ratesDialog");
const themeChoices = document.querySelector("#themeChoices");
const languageChoices = document.querySelector("#languageChoices");
const ratesPanel = document.querySelector("#ratesPanel");
const lastUpdated = document.querySelector("#lastUpdated");
const offlineBadge = document.querySelector("#offlineBadge");

init();

function init() {
  document.documentElement.dataset.theme = state.prefs.theme;
  renderStaticChoices();
  renderRows();
  bindEvents();
  applyLanguage();
  loadCachedRates();
  refreshRates();
}

function bindEvents() {
  document.querySelector("#refreshButton").addEventListener("click", refreshRates);
  document.querySelector("#settingsButton").addEventListener("click", () => settingsDialog.showModal());
  document.querySelector("#ratesButton").addEventListener("click", () => {
    renderRates();
    ratesDialog.showModal();
  });
  document.querySelector(".keypad").addEventListener("click", (event) => {
    const key = event.target.closest("[data-key]")?.dataset.key;
    if (key) handleKey(key);
  });
  window.addEventListener("online", refreshRates);
  window.addEventListener("offline", () => setOffline(true));
}

async function refreshRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" });
    if (!response.ok) throw new Error("Rates request failed");
    const data = await response.json();
    if (data.result !== "success" || !data.rates) throw new Error("Rates payload is invalid");

    const nextRates = { ...fallbackRates };
    currencies.forEach(({ code }) => {
      if (typeof data.rates[code] === "number") nextRates[code] = data.rates[code];
    });

    state.rates = nextRates;
    state.ratesDate = new Date().toISOString();
    localStorage.setItem(cacheKey, JSON.stringify({ rates: nextRates, ratesDate: state.ratesDate }));
    setOffline(false);
    recalculate();
  } catch {
    loadCachedRates();
    setOffline(true);
    recalculate();
  }
}

function loadCachedRates() {
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey));
    if (cached?.rates) {
      state.rates = { ...fallbackRates, ...cached.rates };
      state.ratesDate = cached.ratesDate || null;
    }
  } catch {
    state.rates = fallbackRates;
  }
}

function loadPrefs() {
  const defaults = { theme: "dark", language: "ru" };
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(prefsKey)) };
  } catch {
    return defaults;
  }
}

function savePrefs() {
  localStorage.setItem(prefsKey, JSON.stringify(state.prefs));
}

function renderRows() {
  currencyList.innerHTML = "";
  state.rows.forEach((code, index) => {
    const row = document.createElement("article");
    row.className = "currency-row";
    row.innerHTML = `
      <button class="currency-select ${index === state.activeIndex ? "active" : ""}" type="button" data-select="${index}">
        <span class="flag">${getCurrency(code).flag}</span>
        <span class="code">${code}</span>
      </button>
      <input class="amount-field ${index === state.activeIndex ? "active" : ""}" inputmode="decimal" data-amount="${index}" value="0" aria-label="${code} amount" />
    `;
    currencyList.appendChild(row);
  });

  currencyList.querySelectorAll("[data-select]").forEach((button) => {
    button.addEventListener("click", () => openCurrencyPicker(Number(button.dataset.select)));
  });
  currencyList.querySelectorAll("[data-amount]").forEach((input) => {
    input.addEventListener("focus", () => activateRow(Number(input.dataset.amount)));
    input.addEventListener("click", () => activateRow(Number(input.dataset.amount)));
    input.addEventListener("input", () => setInputFromField(input));
  });
  recalculate();
}

function openCurrencyPicker(index) {
  activateRow(index);
  currencyOptions.innerHTML = "";
  currencies.forEach((currency) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `currency-option ${currency.code === state.rows[index] ? "is-selected" : ""}`;
    button.innerHTML = `
      <span><span class="flag">${currency.flag}</span><strong>${currency.code}</strong></span>
      <span>${currency.names[state.prefs.language]}</span>
    `;
    button.addEventListener("click", () => {
      state.rows[index] = currency.code;
      currencyDialog.close();
      renderRows();
    });
    currencyOptions.appendChild(button);
  });
  currencyDialog.showModal();
}

function activateRow(index) {
  state.activeIndex = index;
  state.sourceIndex = index;
  const field = currencyList.querySelector(`[data-amount="${index}"]`);
  state.currentInput = normalizeInput(field?.value || "0");
  state.expression = null;
  state.pendingOperator = null;
  updateActiveStyles();
  requestAnimationFrame(() => {
    const active = currencyList.querySelector(`[data-amount="${index}"]`);
    active?.focus({ preventScroll: true });
    active?.select();
  });
}

function setInputFromField(input) {
  const index = Number(input.dataset.amount);
  state.activeIndex = index;
  state.sourceIndex = index;
  state.currentInput = normalizeInput(input.value);
  state.expression = null;
  state.pendingOperator = null;
  recalculate();
}

function handleKey(key) {
  if (key.startsWith("op:")) {
    queueOperation(key.slice(3));
    return;
  }

  if (key === "equals") {
    finishOperation();
    return;
  }

  if (key === "clear") {
    state.currentInput = "0";
    state.expression = null;
    state.pendingOperator = null;
  } else if (key === "backspace") {
    state.currentInput = state.currentInput.length > 1 ? state.currentInput.slice(0, -1) : "0";
  } else if (key === "decimal") {
    if (!state.currentInput.includes(".")) state.currentInput += ".";
  } else if (key === "percent") {
    state.currentInput = trimNumber(parseAmount(state.currentInput) / 100);
  } else if (/^\d$/.test(key)) {
    state.currentInput = state.currentInput === "0" ? key : state.currentInput + key;
  }

  state.sourceIndex = state.activeIndex;
  recalculate();
}

function queueOperation(operator) {
  const value = parseAmount(state.currentInput);
  if (state.expression && state.pendingOperator) {
    state.expression.value = calculate(state.expression.value, value, state.pendingOperator);
    state.currentInput = trimNumber(state.expression.value);
  } else {
    state.expression = { value };
  }
  state.pendingOperator = operator;
  state.currentInput = "0";
  recalculate();
}

function finishOperation() {
  if (!state.expression || !state.pendingOperator) return;
  const result = calculate(state.expression.value, parseAmount(state.currentInput), state.pendingOperator);
  state.currentInput = trimNumber(result);
  state.expression = null;
  state.pendingOperator = null;
  recalculate();
}

function calculate(left, right, operator) {
  if (operator === "add") return left + right;
  if (operator === "subtract") return left - right;
  if (operator === "multiply") return left * right;
  if (operator === "divide") return right === 0 ? 0 : left / right;
  return right;
}

function recalculate() {
  const sourceCode = state.rows[state.sourceIndex];
  const sourceValue = parseAmount(state.currentInput);
  const usdValue = sourceValue / state.rates[sourceCode];

  currencyList.querySelectorAll("[data-amount]").forEach((field) => {
    const index = Number(field.dataset.amount);
    const code = state.rows[index];
    const value = index === state.sourceIndex ? sourceValue : usdValue * state.rates[code];
    field.value = index === state.sourceIndex ? displayInput(state.currentInput) : formatAmount(value);
    field.classList.toggle("active", index === state.activeIndex);
  });

  currencyList.querySelectorAll("[data-select]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.select) === state.activeIndex);
  });

  renderStatus();
}

function updateActiveStyles() {
  currencyList.querySelectorAll("[data-amount]").forEach((field) => {
    field.classList.toggle("active", Number(field.dataset.amount) === state.activeIndex);
  });
  currencyList.querySelectorAll("[data-select]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.select) === state.activeIndex);
  });
}

function renderStaticChoices() {
  themeChoices.innerHTML = "";
  themes.forEach((theme) => {
    const button = document.createElement("button");
    button.className = `choice-button ${theme === state.prefs.theme ? "is-selected" : ""}`;
    button.type = "button";
    button.dataset.themeChoice = theme;
    button.textContent = i18n[state.prefs.language][theme];
    button.addEventListener("click", () => {
      state.prefs.theme = theme;
      document.documentElement.dataset.theme = theme;
      savePrefs();
      renderStaticChoices();
    });
    themeChoices.appendChild(button);
  });

  languageChoices.innerHTML = "";
  languages.forEach((language) => {
    const button = document.createElement("button");
    button.className = `choice-button ${language === state.prefs.language ? "is-selected" : ""}`;
    button.type = "button";
    button.textContent = language === "ru" ? i18n[state.prefs.language].russian : i18n[state.prefs.language].english;
    button.addEventListener("click", () => {
      state.prefs.language = language;
      savePrefs();
      applyLanguage();
      renderStaticChoices();
      renderRows();
    });
    languageChoices.appendChild(button);
  });
}

function applyLanguage() {
  document.documentElement.lang = state.prefs.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = i18n[state.prefs.language][node.dataset.i18n];
  });
  renderStatus();
}

function renderRates() {
  ratesPanel.innerHTML = "";
  const base = state.rows[state.activeIndex];
  const baseRate = state.rates[base];
  if (!baseRate) {
    ratesPanel.textContent = i18n[state.prefs.language].noRates;
    return;
  }
  state.rows.forEach((code) => {
    const currency = getCurrency(code);
    const rate = state.rates[code] / baseRate;
    const line = document.createElement("div");
    line.className = "rate-line";
    line.innerHTML = `<span><span class="flag">${currency.flag}</span><strong>${code}</strong></span><span>${formatAmount(rate)}</span>`;
    ratesPanel.appendChild(line);
  });
}

function renderStatus() {
  const text = i18n[state.prefs.language];
  if (state.ratesDate) {
    lastUpdated.textContent = `${formatDate(state.ratesDate)}, ${state.offline ? text.cached : text.live}`;
  } else {
    lastUpdated.textContent = state.offline ? text.cached : text.live;
  }
}

function setOffline(value) {
  state.offline = value || !navigator.onLine;
  offlineBadge.hidden = !state.offline;
  renderStatus();
}

function getCurrency(code) {
  return currencies.find((currency) => currency.code === code) || currencies[0];
}

function parseAmount(value) {
  const number = Number(String(value).replace(",", ".").replace(/[^\d.-]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function normalizeInput(value) {
  const normalized = String(value).replace(",", ".").replace(/[^\d.]/g, "");
  return normalized || "0";
}

function displayInput(value) {
  return String(value).replace(".", ",");
}

function trimNumber(value) {
  return Number(value.toFixed(10)).toString();
}

function formatAmount(value) {
  if (!Number.isFinite(value)) return "0";
  const maximumFractionDigits = Math.abs(value) >= 100 ? 2 : 4;
  return new Intl.NumberFormat(state.prefs.language === "ru" ? "ru-RU" : "en-US", {
    maximumFractionDigits,
  }).format(value);
}

function formatDate(iso) {
  return new Intl.DateTimeFormat(state.prefs.language === "ru" ? "ru-RU" : "en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}
