export const currencySymbol = (price) => {
  let symbol = "";
  switch (price) {
    case "USD":
      symbol = "$";
      break;
    case "GBP":
      symbol = "£";
      break;
    case "AUD":
      symbol = "$";
      break;
    case "JPY":
      symbol = "¥";
      break;
    case "RUB":
      symbol = "₽";
      break;
    default:
      symbol = "$";
  }
  return symbol;
};
