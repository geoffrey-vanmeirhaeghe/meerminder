import gql from "graphql-tag";

export const Navigation = gql`
  query {
    navigation {
      data {
        attributes {
          MainNav {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
          HeaderHero {
            HeroTitle
            HeroSubText
            HeroCtaButton {
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
            HeroFrontImage {
              data {
                attributes {
                  url
                  name
                  alternativeText
                  caption
                  width
                  height
                  size
                }
              }
            }
          }
        }
      }
    }
  }
`;
