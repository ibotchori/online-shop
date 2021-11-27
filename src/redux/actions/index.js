export const getProductsAction = (value) => {
  return {
    type: "GET_PRODUCTS",
    payload: value,
  };
};

export const getIdsAction = (value) => {
  return {
    type: "GET_ID",
    payload: value,
  };
};

export const getPrice = (value) => {
  return {
    type: "GET_PRICE",
    payload: value,
  };
};

export const cartAction = (value) => {
  return {
    type: "ADD_TO_CART",
    payload: value,
  };
};
