import gql from "graphql-tag";

export const BlogQuery = gql`
  query Blog($Slug: String!) {
    blogs(filters: { Slug: { eq: $Slug } }) {
      data {
        id
        attributes {
          Slug
          Title
          BlogMetaData: Metadata {
            MetaTitle
            MetaDescription
            MetaImage {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
          }
          blog_categories {
            data {
              attributes {
                Title
                slug
              }
            }
          }
          Date
          locale
          localizations {
            data {
              attributes {
                locale
              }
            }
          }
          Blocks {
            __typename
            ... on ComponentBlocksBannerCta {
              Title {
                Title
                Alignment
                Size
              }
              CtaBannerText: Text {
                Text
              }
              CtaBannerButton: Button {
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
              CtaBannerImage: Image {
                Image {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
              }
              SettingsCtaBanner: Settings {
                Width
                Spacing
              }
            }
            ... on ComponentBlocksButtonRow {
              ButtonRowButton: Button {
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
              ButtonRowSettings: Settings {
                Width
                Spacing
              }
              ButtonRowAlignment: Alignment {
                Alignment
              }
            }
            ... on ComponentBlocksCards {
              CardsBlockCard: Card {
                Image {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                Title
                Label
                Link {
                  data {
                    attributes {
                      Title
                      Slug
                    }
                  }
                }
                ExternalLink
                OpenInNewTab
              }
              SettingsCards: Settings {
                Spacing
              }
            }
            ... on ComponentBlocksContentGrid {
              GridBlocks {
                Image {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                Type
                Title
                Text
              }
              SettingsContentGrid: Settings {
                Width
                Spacing
              }
            }
            ... on ComponentBlocksHeading {
              HeadingTitle: Title {
                Title
                Alignment
                Size
              }
              Settings {
                Spacing
              }
            }
            ... on ComponentBlocksImageBlock {
              ImageBlockImage: Image {
                Image {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
              }
              SettingsImageBlock: Settings {
                Width
                Spacing
              }
            }
            ... on ComponentBlocksListWithIcons {
              IconWithText {
                Icon
                Text
              }
              SettingsListWithIcons: Settings {
                Spacing
              }
              Alignment {
                Alignment
              }
            }
            ... on ComponentBlocksSlider {
              SliderSlide: Slide {
                Image {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                Title
                Text
                Link {
                  data {
                    attributes {
                      Title
                      Slug
                    }
                  }
                }
                ExternalLink
                OpenInNewTab
              }
              SliderText: Text { Text }
              SettingsSlider: Settings {
                Width
                Spacing
              }
            }
            ... on ComponentBlocksTestimonials {
              TestimonialsTestimonial: Testimonial {
                Author
                Image {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                Title
                Text
              }
              SettingsTestimonials: Settings {
                Spacing
              }
            }
            ... on ComponentBlocksTextColumns {
              TextColumnsColumns: Columns {
                Title
                Text
              }
              Settings {
                Spacing
              }
            }
            ... on ComponentBlocksTextWithImage {
              TextwithImageText: Text {
                Text
              }
              TextSideCtaButton {
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
              Image {
                Image {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
              }
              SwitchOrder {
                SwitchOrder
              }
              SettingsTextWithImage: Settings {
                Spacing
              }
            }
            ... on ComponentBlocksTextWithLinks {
              Title {
                Title
                Alignment
                Size
              }
              TextWithLinksText: Text {
                Text
              }
              Links {
                Title
                Subtitle
                Link {
                  data {
                    attributes {
                      Title
                      Slug
                    }
                  }
                }
                ExternalLink
                OpenInNewTab
              }
              SwitchOrder {
                SwitchOrder
              }
              SettingsTextWithLinks: Settings {
                Spacing
              }
            }
            ... on ComponentBlocksText {
              ContentTextBlock: Content {
                Text
              }
              SettingsTextBlock: Settings {
                Spacing
              }
              AlignmentTextBlock: Alignment {
                Alignment
              }
            }
            ... on ComponentBlocksTimeline {
              TimelineMarker {
                Image {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                Title
                Text
                Label
              }
              SettingsTimeline: Settings {
                Spacing
              }
            }
            ... on ComponentBlocksTitleWithText {
              Title {
                Title
                Alignment
                Size
              }
              Text {
                Text
              }
              SwitchOrder {
                SwitchOrder
              }
              SettingsTitleWithText: Settings {
                Spacing
              }
            }
            ... on ComponentBlocksUsps {
              Usp {
                Icon
                Title
                Text
              }
              SettingsUsps: Settings {
                Spacing
              }
            }
            ... on ComponentBlocksVideo {
              Video {
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
              SettingsVideoBlock: Settings {
                Width
                Spacing
              }
            }
          }
        }
      }
    }
  }
`;
