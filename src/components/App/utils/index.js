export const addCurrencySymbol = (symbol, amount) => {
  if (JSON.stringify(amount).includes(symbol)) {
    amount = symbol + amount.split(symbol)[1];
  } else {
    amount = symbol + amount;
  }
  return amount;
};
export const removeCurrencySymbol = (symbol, amount) => {
  if (JSON.stringify(amount).includes(symbol)) {
    amount = amount.split(symbol)[1];
  }
  return amount;
};
