import gql from "graphql-tag";

export const CREATE_CONTACT = gql`
  mutation CreateContact(
    $Name: String!
    $Email: String!
    $Address: String!
    $City: String!
    $PostalCode: String!
    $Phone: String!
    $Message: String!
  ) {
    createContact(
      data: {
        Name: $Name
        Email: $Email
        Address: $Address
        City: $City
        PostalCode: $PostalCode
        Phone: $Phone
        Message: $Message
      }
    ) {
      data {
        attributes {
          Name
          Email
          Address
          City
          PostalCode
          Phone
          Message
        }
      }
    }
  }
`;
