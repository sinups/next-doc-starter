const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_stork: false,
  unstable_staticImage: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "ru"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/dropdown",
        statusCode: 301,
      },
      {
        source: "/docs",
        destination: "/docs/page",
        statusCode: 302,
      },
      {
        source: "/examples",
        destination: "/examples/basic",
        statusCode: 302,
      },
    ];
  },
});
