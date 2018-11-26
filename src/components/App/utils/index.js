const defaultSymbol = "£";
export const addCurrencySymbol = (symbol = defaultSymbol, amount=0) => {
  if (JSON.stringify(amount).includes(symbol)) {
    amount = symbol + amount.split(symbol)[1];
  } else {
    amount = symbol + amount;
  }
  return amount;
};
export const removeCurrencySymbol = (symbol = defaultSymbol, amount=0) => {
  if (JSON.stringify(amount).includes(symbol)) {
    amount = amount.split(symbol)[1];
  }
  return amount;
};
