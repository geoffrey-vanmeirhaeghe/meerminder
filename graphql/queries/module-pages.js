import gql from "graphql-tag";

export const ModulePagesQuery = gql`
  query {
    modulePage {
      data {
        attributes {
          Home {
            data {
              attributes {
                Slug
              }
            }
          }
          Blog {
            data {
              attributes {
                Slug
              }
            }
          }
          Cases {
            data {
              attributes {
                Slug
              }
            }
          }
          Contact {
            data {
              attributes {
                Slug
              }
            }
          }
          Products {
            data {
              attributes {
                Slug
              }
            }
          }
        }
      }
    }
  }
`;
