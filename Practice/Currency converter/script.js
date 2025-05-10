const currencyData = {
  USD: { name: "US Dollar", symbol: "$" },
  EUR: { name: "Euro", symbol: "€" },
  GBP: { name: "British Pound", symbol: "£" },
  JPY: { name: "Japanese Yen", symbol: "¥" },
  CAD: { name: "Canadian Dollar", symbol: "C$" },
  AUD: { name: "Australian Dollar", symbol: "A$" },
  CHF: { name: "Swiss Franc", symbol: "Fr" },
  CNY: { name: "Chinese Yuan", symbol: "¥" },
  INR: { name: "Indian Rupee", symbol: "₹" },
  MXN: { name: "Mexican Peso", symbol: "$" },
  BRL: { name: "Brazilian Real", symbol: "R$" },
  RUB: { name: "Russian Ruble", symbol: "₽" },
  KRW: { name: "South Korean Won", symbol: "₩" },
  SGD: { name: "Singapore Dollar", symbol: "S$" },
  NZD: { name: "New Zealand Dollar", symbol: "NZ$" },
};

// Mock exchange rates (in a real app, these would come from an API)
const baseRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.53,
  CAD: 1.37,
  AUD: 1.51,
  CHF: 0.9,
  CNY: 7.24,
  INR: 83.1,
  MXN: 16.9,
  BRL: 5.04,
  RUB: 92.5,
  KRW: 1335.21,
  SGD: 1.34,
  NZD: 1.64,
};

// DOM elements
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const swapButton = document.getElementById('swapBtn');
const resultBox = document.getElementById('resultBox');
const convertedAmountElement = document.getElementById('convertedAmount');
const exchangeRateElement = document.getElementById('exchangeRate');
const calculationElement = document.getElementById('calculation');
const currentYearElement = document.getElementById('currentYear');

// Initialize the app
function initApp() {
  // Set the current year in the footer
  currentYearElement.textContent = new Date().getFullYear();
  
  // Populate currency dropdowns
  populateCurrencySelect(fromCurrencySelect, 'USD');
  populateCurrencySelect(toCurrencySelect, 'EUR');
  
  // Set up event listeners
  amountInput.addEventListener('input', convertCurrency);
  fromCurrencySelect.addEventListener('change', convertCurrency);
  toCurrencySelect.addEventListener('change', convertCurrency);
  swapButton.addEventListener('click', swapCurrencies);
  
  // Do initial conversion
  convertCurrency();
}

// Populate a select element with currency options
function populateCurrencySelect(selectElement, defaultValue) {
  Object.entries(currencyData).forEach(([code, currency]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = `${currency.symbol} ${code} - ${currency.name}`;
    selectElement.appendChild(option);
  });
  selectElement.value = defaultValue;
}

// Convert currency based on current input values
function convertCurrency() {
  const amount = parseFloat(amountInput.value) || 0;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  
  resultBox.classList.add('loading');
  
  // Simulate API delay
  setTimeout(() => {
    // Get rates from USD to both currencies
    const fromRate = baseRates[fromCurrency];
    const toRate = baseRates[toCurrency];
    
    // Calculate exchange rate between the two currencies
    const exchangeRate = toRate / fromRate;
    
    // Calculate converted amount
    const convertedAmount = amount * exchangeRate;
    
    // Update the UI with the result
    convertedAmountElement.textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
    exchangeRateElement.textContent = `1 ${fromCurrency} = ${exchangeRate.toFixed(6)} ${toCurrency}`;
    calculationElement.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    
    resultBox.classList.remove('loading');
  }, 300);
}

// Swap the from and to currencies
function swapCurrencies() {
  const tempCurrency = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = tempCurrency;
  convertCurrency();
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);