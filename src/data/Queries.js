import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query {
    category {
      products {
        name
        id
        gallery
        category
        inStock
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        description
        brand
        prices {
          currency
          amount
        }
      }
    }
  }
`;
