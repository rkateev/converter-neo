const currencySeed = `
USD|🇺🇸|Доллар США|US dollar|1
EUR|🇪🇺|Евро|Euro|0.925
RUB|🇷🇺|Российский рубль|Russian ruble|88.5
KZT|🇰🇿|Казахстанский тенге|Kazakhstani tenge|520.2
CNY|🇨🇳|Китайский юань|Chinese yuan|7.25
GBP|🇬🇧|Британский фунт|British pound|0.79
TRY|🇹🇷|Турецкая лира|Turkish lira|32.9
JPY|🇯🇵|Японская иена|Japanese yen|157.3
AED|🇦🇪|Дирхам ОАЭ|UAE dirham|3.6725
GEL|🇬🇪|Грузинский лари|Georgian lari|2.78
CHF|🇨🇭|Швейцарский франк|Swiss franc|0.9
CAD|🇨🇦|Канадский доллар|Canadian dollar|1.37
AUD|🇦🇺|Австралийский доллар|Australian dollar|1.51
NZD|🇳🇿|Новозеландский доллар|New Zealand dollar|1.65
SEK|🇸🇪|Шведская крона|Swedish krona|10.45
NOK|🇳🇴|Норвежская крона|Norwegian krone|10.65
DKK|🇩🇰|Датская крона|Danish krone|6.9
PLN|🇵🇱|Польский злотый|Polish zloty|4.02
CZK|🇨🇿|Чешская крона|Czech koruna|22.9
HUF|🇭🇺|Венгерский форинт|Hungarian forint|363
RON|🇷🇴|Румынский лей|Romanian leu|4.6
BGN|🇧🇬|Болгарский лев|Bulgarian lev|1.81
RSD|🇷🇸|Сербский динар|Serbian dinar|108.4
UAH|🇺🇦|Украинская гривна|Ukrainian hryvnia|40.6
BYN|🇧🇾|Белорусский рубль|Belarusian ruble|3.27
MDL|🇲🇩|Молдавский лей|Moldovan leu|17.7
AMD|🇦🇲|Армянский драм|Armenian dram|388
AZN|🇦🇿|Азербайджанский манат|Azerbaijani manat|1.7
UZS|🇺🇿|Узбекский сум|Uzbekistani som|12650
KGS|🇰🇬|Киргизский сом|Kyrgyzstani som|89
TJS|🇹🇯|Таджикский сомони|Tajikistani somoni|10.7
TMT|🇹🇲|Туркменский манат|Turkmenistani manat|3.5
INR|🇮🇳|Индийская рупия|Indian rupee|83.4
PKR|🇵🇰|Пакистанская рупия|Pakistani rupee|278
BDT|🇧🇩|Бангладешская така|Bangladeshi taka|117
LKR|🇱🇰|Шри-ланкийская рупия|Sri Lankan rupee|302
NPR|🇳🇵|Непальская рупия|Nepalese rupee|133.5
THB|🇹🇭|Тайский бат|Thai baht|36.7
VND|🇻🇳|Вьетнамский донг|Vietnamese dong|25450
IDR|🇮🇩|Индонезийская рупия|Indonesian rupiah|16250
MYR|🇲🇾|Малайзийский ринггит|Malaysian ringgit|4.72
SGD|🇸🇬|Сингапурский доллар|Singapore dollar|1.35
PHP|🇵🇭|Филиппинское песо|Philippine peso|58.6
KRW|🇰🇷|Южнокорейская вона|South Korean won|1380
TWD|🇹🇼|Новый тайваньский доллар|New Taiwan dollar|32.4
HKD|🇭🇰|Гонконгский доллар|Hong Kong dollar|7.81
MNT|🇲🇳|Монгольский тугрик|Mongolian togrog|3450
LAK|🇱🇦|Лаосский кип|Lao kip|21500
KHR|🇰🇭|Камбоджийский риель|Cambodian riel|4100
MMK|🇲🇲|Мьянманский кьят|Myanmar kyat|2100
BND|🇧🇳|Брунейский доллар|Brunei dollar|1.35
SAR|🇸🇦|Саудовский риял|Saudi riyal|3.75
QAR|🇶🇦|Катарский риял|Qatari riyal|3.64
KWD|🇰🇼|Кувейтский динар|Kuwaiti dinar|0.307
BHD|🇧🇭|Бахрейнский динар|Bahraini dinar|0.376
OMR|🇴🇲|Оманский риал|Omani rial|0.385
JOD|🇯🇴|Иорданский динар|Jordanian dinar|0.709
ILS|🇮🇱|Израильский шекель|Israeli new shekel|3.72
EGP|🇪🇬|Египетский фунт|Egyptian pound|47.8
MAD|🇲🇦|Марокканский дирхам|Moroccan dirham|9.95
TND|🇹🇳|Тунисский динар|Tunisian dinar|3.12
DZD|🇩🇿|Алжирский динар|Algerian dinar|134.5
LYD|🇱🇾|Ливийский динар|Libyan dinar|4.83
ZAR|🇿🇦|Южноафриканский рэнд|South African rand|18.2
NGN|🇳🇬|Нигерийская найра|Nigerian naira|1500
GHS|🇬🇭|Ганский седи|Ghanaian cedi|15.1
KES|🇰🇪|Кенийский шиллинг|Kenyan shilling|129
TZS|🇹🇿|Танзанийский шиллинг|Tanzanian shilling|2600
UGX|🇺🇬|Угандийский шиллинг|Ugandan shilling|3700
ETB|🇪🇹|Эфиопский быр|Ethiopian birr|57.5
XOF|🌍|Западноафриканский франк CFA|West African CFA franc|607
XAF|🌍|Центральноафриканский франк CFA|Central African CFA franc|607
MUR|🇲🇺|Маврикийская рупия|Mauritian rupee|46.5
SCR|🇸🇨|Сейшельская рупия|Seychellois rupee|13.8
BWP|🇧🇼|Ботсванская пула|Botswana pula|13.6
NAD|🇳🇦|Намибийский доллар|Namibian dollar|18.2
ZMW|🇿🇲|Замбийская квача|Zambian kwacha|25.6
MWK|🇲🇼|Малавийская квача|Malawian kwacha|1730
MZN|🇲🇿|Мозамбикский метикал|Mozambican metical|63.9
AOA|🇦🇴|Ангольская кванза|Angolan kwanza|850
BRL|🇧🇷|Бразильский реал|Brazilian real|5.45
MXN|🇲🇽|Мексиканское песо|Mexican peso|18.1
ARS|🇦🇷|Аргентинское песо|Argentine peso|905
CLP|🇨🇱|Чилийское песо|Chilean peso|940
COP|🇨🇴|Колумбийское песо|Colombian peso|4050
PEN|🇵🇪|Перуанский соль|Peruvian sol|3.75
UYU|🇺🇾|Уругвайское песо|Uruguayan peso|39.5
PYG|🇵🇾|Парагвайский гуарани|Paraguayan guarani|7500
BOB|🇧🇴|Боливийский боливиано|Bolivian boliviano|6.91
CRC|🇨🇷|Костариканский колон|Costa Rican colon|520
DOP|🇩🇴|Доминиканское песо|Dominican peso|59
GTQ|🇬🇹|Гватемальский кетсаль|Guatemalan quetzal|7.76
HNL|🇭🇳|Гондурасская лемпира|Honduran lempira|24.7
NIO|🇳🇮|Никарагуанская кордоба|Nicaraguan cordoba|36.8
JMD|🇯🇲|Ямайский доллар|Jamaican dollar|156
TTD|🇹🇹|Доллар Тринидада и Тобаго|Trinidad and Tobago dollar|6.79
ISK|🇮🇸|Исландская крона|Icelandic krona|139
ALL|🇦🇱|Албанский лек|Albanian lek|94
MKD|🇲🇰|Македонский денар|Macedonian denar|56.9
BAM|🇧🇦|Конвертируемая марка Боснии|Bosnia-Herzegovina convertible mark|1.81
`;

const currencies = currencySeed.trim().split("\n").map((row) => {
  const [code, flag, ru, en, rate] = row.split("|");
  return { code, flag, names: { ru, en }, fallbackRate: Number(rate) };
});

const fallbackRates = Object.fromEntries(currencies.map(({ code, fallbackRate }) => [code, fallbackRate]));

const i18n = {
  ru: {
    appName: "QuickConvo",
    offline: "Офлайн",
    chooseCurrency: "Выберите валюту",
    searchCurrency: "Поиск валюты",
    noCurrencyResults: "Ничего не найдено",
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
    appName: "QuickConvo",
    offline: "Offline",
    chooseCurrency: "Choose currency",
    searchCurrency: "Search currency",
    noCurrencyResults: "No currencies found",
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
const currencySearch = document.querySelector("#currencySearch");
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
  currencySearch.addEventListener("input", () => renderCurrencyOptions(Number(currencySearch.dataset.index), currencySearch.value));
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
  currencySearch.value = "";
  currencySearch.dataset.index = String(index);
  currencySearch.placeholder = i18n[state.prefs.language].searchCurrency;
  renderCurrencyOptions(index, "");
  currencyDialog.showModal();
  requestAnimationFrame(() => currencySearch.focus({ preventScroll: true }));
}

function renderCurrencyOptions(index, query) {
  const search = query.trim().toLowerCase();
  const visibleCurrencies = currencies.filter((currency) => {
    const haystack = `${currency.code} ${currency.names.ru} ${currency.names.en}`.toLowerCase();
    return haystack.includes(search);
  });

  currencyOptions.innerHTML = "";
  if (!visibleCurrencies.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = i18n[state.prefs.language].noCurrencyResults;
    currencyOptions.appendChild(empty);
    return;
  }

  visibleCurrencies.forEach((currency) => {
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
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = i18n[state.prefs.language][node.dataset.i18nPlaceholder];
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
