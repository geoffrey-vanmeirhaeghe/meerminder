import gql from "graphql-tag";

export const BlogOverviewQuery = gql`
  query {
    blogs {
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
          blog_categories {
            data {
              id
              attributes {
                slug
                Title
              }
            }
          }
        }
      }
    }
    blogCategories {
      data {
        id
        attributes {
          Title
          slug
        }
      }
    }
  }
`;
