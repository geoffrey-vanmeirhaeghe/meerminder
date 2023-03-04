import gql from "graphql-tag";

export const CasesOverviewQuery = gql`
  query {
    cases {
      data {
        attributes {
          Title
          Slug
          Metadata {
            MetaImage {
              data {
                attributes {
                  url
                  name
                  width
                  height
                  alternativeText
                }
              }
            }
          }
          cases_categories {
            data {
              id
              attributes {
                Title
                Slug
              }
            }
          }
        }
      }
    }
    casesCategories {
      data {
        id
        attributes {
          Title
          Slug
        }
      }
    }
  }
`;
