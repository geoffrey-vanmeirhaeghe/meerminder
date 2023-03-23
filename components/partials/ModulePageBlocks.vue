<template>
  <div>
    <div v-if="pages.data[0]">
      <div
        v-for="Block in pages.data[0].attributes.Blocks"
        :key="Block.id"
        class="Block"
        :class="'Block-' + Block.__typename"
      >
        <!-- Heading Block -->
        <div v-if="Block.__typename == 'ComponentBlocksHeading'">
          <HeadingBlock
            :Title="Block.HeadingTitle"
            :Settings="Block.Settings"
          />
        </div>

        <!-- Text Block -->
        <div v-if="Block.__typename == 'ComponentBlocksText'">
          <TextBlock
            :Text="Block.ContentTextBlock.Text"
            :Settings="Block.SettingsTextBlock ? Block.SettingsTextBlock : ''"
            :Alignment="
              Block.AlignmentTextBlock ? Block.AlignmentTextBlock.Alignment : ''
            "
          />
        </div>

        <!-- Banner CTA Block -->
        <div v-if="Block.__typename == 'ComponentBlocksBannerCta'">
          <BannerCtaBlock
            :Title="Block.Title ? Block.Title : ''"
            :Text="Block.CtaBannerText.Text ? Block.CtaBannerText.Text : ''"
            :Button="Block.CtaBannerButton ? Block.CtaBannerButton : ''"
            :Image="
              Block.CtaBannerImage
                ? Block.CtaBannerImage.Image.data.attributes
                : ''
            "
            :Settings="Block.SettingsCtaBanner ? Block.SettingsCtaBanner : ''"
          />
        </div>

        <!-- Button Row Block -->
        <div v-if="Block.__typename == 'ComponentBlocksButtonRow'">
          <ButtonRowBlock
            :Buttons="Block.ButtonRowButton ? Block.ButtonRowButton : ''"
            :Settings="Block.ButtonRowSettings ? Block.ButtonRowSettings : ''"
            :Alignment="
              Block.ButtonRowAlignment.Alignment
                ? Block.ButtonRowAlignment.Alignment
                : ''
            "
          />
        </div>

        <!-- Cards Block -->
        <div v-if="Block.__typename == 'ComponentBlocksCards'">
          <CardsBlock
            :Cards="Block.CardsBlockCard ? Block.CardsBlockCard : ''"
            :Settings="Block.SettingsCards ? Block.SettingsCards : ''"
          />
        </div>

        <!-- Title With Text Block -->
        <div v-if="Block.__typename == 'ComponentBlocksTitleWithText'">
          <TitleWithTextBlock
            :Title="Block.Title ? Block.Title : ''"
            :Text="Block.Text.Text ? Block.Text.Text : ''"
            :Settings="
              Block.SettingsTitleWithText ? Block.SettingsTitleWithText : ''
            "
            :SwitchOrder="
              Block.SwitchOrder.SwitchOrder ? Block.SwitchOrder.SwitchOrder : ''
            "
          />
        </div>

        <!-- Text Columns Block -->
        <div v-if="Block.__typename == 'ComponentBlocksTextColumns'">
          <TextColumnsBlock
            :Columns="Block.TextColumnsColumns ? Block.TextColumnsColumns : ''"
            :Settings="Block.Settings ? Block.Settings : ''"
          />
        </div>

        <!-- Image Block -->
        <div v-if="Block.__typename == 'ComponentBlocksImageBlock'">
          <ImageBlock
            :Image="
              Block.ImageBlockImage.Image ? Block.ImageBlockImage.Image : ''
            "
            :Settings="Block.SettingsImageBlock ? Block.SettingsImageBlock : ''"
          />
        </div>

        <!-- USPS Block -->
        <div v-if="Block.__typename == 'ComponentBlocksUsps'">
          <UspsBlock
            :Usps="Block.Usp ? Block.Usp : ''"
            :Settings="Block.SettingsUsps ? Block.SettingsUsps : ''"
          />
        </div>

        <!-- Testimonials Block -->
        <div v-if="Block.__typename == 'ComponentBlocksTestimonials'">
          <TestimonialsBlock
            :Testimonials="
              Block.TestimonialsTestimonial ? Block.TestimonialsTestimonial : ''
            "
            :Settings="
              Block.SettingsTestimonials ? Block.SettingsTestimonials : ''
            "
          />
        </div>

        <!-- Slider Block -->
        <div v-if="Block.__typename == 'ComponentBlocksSlider'">
          <SliderBlock
            :Text="Block.SliderText.Text ? Block.SliderText.Text : ''"
            :Button="Block.Button ? Block.Button : ''"
            :Slides="Block.SliderSlide ? Block.SliderSlide : ''"
            :Settings="Block.SettingsSlider ? Block.SettingsSlider : ''"
          />
        </div>

        <!-- Content Grid Block -->
        <div v-if="Block.__typename == 'ComponentBlocksContentGrid'">
          <ContentGridBlock
            :Blocks="Block.GridBlocks ? Block.GridBlocks : ''"
            :Settings="
              Block.SettingsContentGrid ? Block.SettingsContentGrid : ''
            "
          />
        </div>

        <!-- Text With Image Block -->
        <div v-if="Block.__typename == 'ComponentBlocksTextWithImage'">
          <TextWithImageBlock
            :Text="
              Block.TextwithImageText.Text ? Block.TextwithImageText.Text : ''
            "
            :Button="Block.TextSideCtaButton ? Block.TextSideCtaButton : ''"
            :Image="Block.Image.Image ? Block.Image.Image : ''"
            :SwitchOrder="
              Block.SwitchOrder.SwitchOrder ? Block.SwitchOrder.SwitchOrder : ''
            "
            :Settings="
              Block.SettingsTextWithImage ? Block.SettingsTextWithImage : ''
            "
          />
        </div>

        <!-- Video Block -->
        <div v-if="Block.__typename == 'ComponentBlocksVideo'">
          <VideoBlock
            :Video="Block.Video ? Block.Video : ''"
            :Settings="Block.SettingsVideoBlock ? Block.SettingsVideoBlock : ''"
          />
        </div>

        <!-- Text With Links Block -->
        <div v-if="Block.__typename == 'ComponentBlocksTextWithLinks'">
          <TextWithLinks
            :Title="Block.Title ? Block.Title : ''"
            :Text="
              Block.TextWithLinksText.Text ? Block.TextWithLinksText.Text : ''
            "
            :Links="Block.Links ? Block.Links : ''"
            :Settings="
              Block.SettingsTextWithLinks ? Block.SettingsTextWithLinks : ''
            "
            :SwitchOrder="
              Block.SwitchOrder.SwitchOrder ? Block.SwitchOrder.SwitchOrder : ''
            "
          />
        </div>

        <!-- List With Icons Block -->
        <div v-if="Block.__typename == 'ComponentBlocksListWithIcons'">
          <ListWithIcons
            :Items="Block.IconWithText ? Block.IconWithText : ''"
            :Settings="
              Block.SettingsListWithIcons ? Block.SettingsListWithIcons : ''
            "
            :Alignment="
              Block.Alignment.Alignment ? Block.Alignment.Alignment : ''
            "
          />
        </div>

        <!-- Timeline Block -->
        <div v-if="Block.__typename == 'ComponentBlocksTimeline'">
          <Timeline
            :Markers="Block.TimelineMarker ? Block.TimelineMarker : ''"
            :Settings="Block.SettingsTimeline ? Block.SettingsTimeline : ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PageQuery } from "~/graphql/queries/pages";

// Blocks
import TextBlock from "~/components/blocks/TextBlock";
import BannerCtaBlock from "~/components/blocks/BannerCtaBlock";
import ButtonRowBlock from "~/components/blocks/ButtonRowBlock";
import CardsBlock from "~/components/blocks/CardsBlock";
import TitleWithTextBlock from "~/components/blocks/TitleWithTextBlock";
import TextColumnsBlock from "~/components/blocks/TextColumnsBlock";
import ImageBlock from "~/components/blocks/ImageBlock";
import UspsBlock from "~/components/blocks/UspsBlock";
import TestimonialsBlock from "~/components/blocks/TestimonialsBlock";
import HeadingBlock from "~/components/blocks/HeadingBlock";
import SliderBlock from "~/components/blocks/SliderBlock";
import ContentGridBlock from "~/components/blocks/ContentGridBlock";
import TextWithImageBlock from "~/components/blocks/TextWithImageBlock";
import VideoBlock from "~/components/blocks/VideoBlock";
import TextWithLinks from "~/components/blocks/TextWithLinks";
import ListWithIcons from "~/components/blocks/ListWithIcons";
import Timeline from "~/components/blocks/Timeline";

export default {
  name: "ModulePageBlocks",

  props: ["ModulePage", "Blocks"],

  components: {
    // Blocks
    TextBlock,
    BannerCtaBlock,
    ButtonRowBlock,
    CardsBlock,
    TitleWithTextBlock,
    TextColumnsBlock,
    ImageBlock,
    UspsBlock,
    TestimonialsBlock,
    HeadingBlock,
    SliderBlock,
    ContentGridBlock,
    TextWithImageBlock,
    VideoBlock,
    TextWithLinks,
    ListWithIcons,
    Timeline,
  },

  apollo: {
    pages: {
      prefetch: true,
      query: PageQuery,
      variables() {
        return {
          Slug: String(
            this.ModulePage ? this.ModulePage : this.$route.params.Slug
          ),
        };
      },
    },
  },

  data() {
    return {
      pages: [],
    };
  },

  head() {
    return {
      title:
        process.env.companyName +
        ` | ` +
        [
          this.pages.data[0].attributes.PageMetaData.MetaTitle
            ? this.pages.data[0].attributes.PageMetaData.MetaTitle
            : process.env.defaultMetaTitle,
        ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.pages.data[0].attributes.PageMetaData.MetaDescription,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: [
            this.pages.data[0].attributes.PageMetaData.MetaImage.data
              ? `${
                  process.env.strapiBaseUri +
                  this.pages.data[0].attributes.PageMetaData.MetaImage.data
                    .attributes.url
                }`
              : "",
          ],
        },
      ],
    };
  },
};
</script>
