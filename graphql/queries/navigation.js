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
          DropdownMenu {
            MainPages {
              data {
                attributes {
                  Title
                  Slug
                }
              }
            }
            Logo {
              data {
                attributes {
                  name
                  alternativeText
                  caption
                  width
                  height
                  url
                }
              }
            }
            DropdownCTA {
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
