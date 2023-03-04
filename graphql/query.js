import gql from "graphql-tag";

export const PageQuery = gql`
  query Page($Slug: String!) {
    pages(filters: { Slug: { eq: $Slug } }) {
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

// export const testQuery = gql`
//   query GetEverything($slug: String!) {
//     pages(where: { slug: $slug }) {
//       data {
//         attributes {
//           Blocks {
//             __typename
//           }
//         }
//       }
//     }
//   }
// `;
