const initialState = {
  id: "",
  data: [],
  price: [
    {
      currency: "USD",
    },
  ],
  cart: [],
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ID":
      return {
        ...state,
        id: action.payload,
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    default:
      return state;
  }
};

export default ProductsReducer;
