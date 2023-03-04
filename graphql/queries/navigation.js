import gql from "graphql-tag";

export const Navigation = gql`
  query {
    navigation {
      data {
        attributes {
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
          MainNav {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
          MainNavCtaButton {
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
          TopnavPages {
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
            HeroBackground {
              data {
                attributes {
                  url
                }
              }
            }
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
