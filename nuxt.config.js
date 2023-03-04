export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337",
    FrontEndBaseUri: process.env.BASE_URL || "http://localhost:3000",
    companyName: "Meerminder Template",
    defaultMetaTitle: "The quickest agile design system in the West",
  },
  head: {
    title: "frontend-template",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "stylesheet", href: "/css/all.css" }],

    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  },

  // router: {
  //   extendRoutes(routes, resolve) {
  //     for (const route of routes) {
  //       if (route.path.includes("/cases")) {
  //         route.path = "/success-stories";
  //       }
  //     }
  //     return routes;
  //   },
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/fontawesome"],

  fontawesome: {
    icons: {
      solid: true,
      regular: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/apollo",
    [
      "nuxt-cookie-control",
      {
        //to open cookie modal anywhere:
        // $cookies.modal = true
        //or
        // this.$cookies.modal = true

        //default css (true)
        //if css is set to false, you will still be able to access
        //your color variables (example. background-color: var(--cookie-control-barBackground))
        css: true,

        //enable or disable css variables polyfill
        cssPolyfill: true,

        //in case you have subdomains (shop.yourdomain.com)
        domain: process.env.strapiBaseUri,

        //modal opener (cookie control)
        controlButton: false,

        //block iframes to prevent them from adding additional cookies
        blockIframe: true,

        //or if you want to set initialState to false (default value for initialState is true)
        blockIframe: {
          initialState: false,
        },

        //position of cookie bar:
        //'top-left', 'top-right', 'top-full',
        //'bottom-left', 'bottom-right', 'bottom-full'
        barPosition: "bottom-right",

        dashInDescription: true,

        //default colors
        //if you want to disable colors set colors property to false
        colors: false,

        //default texts
        text: {
          barTitle: "Cookies",
          barDescription:
            "Om u de beste ervaring te bieden, maakt onze website gebruik van cookies. Wij verbinden ons ertoe om uw gegevens op een ethische manier te verwerken. Voor meer informatie kan u terecht op onze privacy pagina.",
          acceptAll: "Alle accepteren",
          declineAll: "Alle cookies afwijzen",
          manageCookies: "Cookies beheren",
          unsaved: "U heeft niet-opgeslagen instellingen",
          close: "Sluiten",
          save: "Opslaan",
          necessary: "Noodzakelijke cookies",
          optional: "Optionele cookies",
          functional: "Functionele cookies",
          blockedIframe:
            "Om dit element te zien, moet u de functionele cookies inschakelen",
          here: "Hier",
        },
      },
    ],
  ],

  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: "Default Cookies",
        },
        //else
        name: "Default Cookies",
        //else
        description:
          "Dit zijn cookies die nodig zijn om de website te kunnen gebruiken. Hierin bewaren we ook jouw cookie voorkeuren. Deze cookies kan je niet uitschakelen.",
        cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"],
      },
    ],
    optional: [
      {
        name: "Google Tag Manager",
        //if you don't set identifier, slugified name will be used
        identifier: "ga",
        //else
        description: "Google Tag Manager is...",

        initialState: true,
        src: "https://www.googletagmanager.com/gtag/js?id=<API-KEY>",
        async: true,
        cookies: ["_ga", "_gat", "_gid", "_gtm"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js",
          });
        },
        declined: () => {},
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  apollo: {
    clientConfigs: {
      default: "@/graphql/config/config.js",

      alternativeClient: {
        httpEndpoint: "http://localhost:1337",
        browserHttpEndpoint: "/graphql",
      },
    },
    includeNodeModules: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
