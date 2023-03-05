import gql from "graphql-tag";

export const Footer = gql`
  query {
    footer {
      data {
        attributes {
          FooterTitle
          FooterContactInfo
          FooterLogo {
            data {
              attributes {
                name
                alternativeText
                width
                height
                url
              }
            }
          }
          FooterMainNav {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
          FooterSubNav {
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
          FooterCtaButton {
            ButtonText
            page {
              data {
                attributes {
                  Title
                  Slug
                }
              }
            }
            OpenInNewTab
            Style
            ExternalLink
          }
        }
      }
    }
  }
`;
