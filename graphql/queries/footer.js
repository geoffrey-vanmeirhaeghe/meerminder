import gql from "graphql-tag";

export const Footer = gql`
  query {
    footer {
      data {
        attributes {
          FooterTitle
          FooterContactInfo
          FooterMainNav {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
          FooterLegalNav {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
        }
      }
    }
  }
`;
