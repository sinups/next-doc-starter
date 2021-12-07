import { useRouter } from "next/router";

const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 291 69" fill="none">
    <path
      d="M0 36.53c.07 17.6 14.4 32.01 32.01 32.01a32.05 32.05 0 0032.01-32V32a13.2 13.2 0 0123.4-8.31h20.7A32.07 32.07 0 0077.2 0a32.05 32.05 0 00-32 32.01v4.52A13.2 13.2 0 0132 49.71a13.2 13.2 0 01-13.18-13.18 3.77 3.77 0 00-3.77-3.77H3.76A3.77 3.77 0 000 36.53zM122.49 68.54a32.14 32.14 0 01-30.89-23.7h20.67a13.16 13.16 0 0023.4-8.3V32A32.05 32.05 0 01167.68 0c17.43 0 31.64 14 32 31.33l.1 5.2a13.2 13.2 0 0023.4 8.31h20.7a32.07 32.07 0 01-30.91 23.7c-17.61 0-31.94-14.42-32.01-32l-.1-4.7v-.2a13.2 13.2 0 00-13.18-12.81 13.2 13.2 0 00-13.18 13.18v4.52a32.05 32.05 0 01-32.01 32.01zM247.94 23.7a13.16 13.16 0 0123.4 8.31 3.77 3.77 0 003.77 3.77h11.3a3.77 3.77 0 003.76-3.77A32.05 32.05 0 00258.16 0a32.07 32.07 0 00-30.92 23.7h20.7z"
      fill="currentColor"
    />
  </svg>
);

const Devs = ({ height = 20 }) => <span>❤️</span>;

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "Documentation quick start",
  ru: "Документация быстрый старт",
};

export default {
  github: "https://github.com/sinups/nds",
  docsRepositoryBase: "https://github.com/sinups/nds",
  titleSuffix: " – NDS",
  search: true,
  unstable_stork: false,
  floatTOC: true,
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        {/* <Logo height={18} /> */}
        <span className="mx-2 font-extrabold hidden md:inline select-none">
          NDS
        </span>
        <span className="text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap">
          {TITLE_WITH_TRANSLATIONS[locale]}
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={meta.description || "NDS description"}
        />
        <meta
          name="og:description"
          content={meta.description || "NDS description"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta
          name="twitter:image"
          content={
            meta.image ||
            "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg"
          }
        />
        <meta
          name="og:title"
          content={
            title ? title + " – NDS" : "NDS: React Hooks for Data Fetching"
          }
        />
        <meta
          name="og:image"
          content={
            meta.image ||
            "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg"
          }
        />
        <meta name="apple-mobile-web-app-title" content="SWR" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          media="print"
          onLoad="this.media='all'"
        />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "ru":
        return "Редактировать на GitHub";
      default:
        return "Edit this page on GitHub";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      case "ru":
        return (
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">Сделано с</span>
            <span className="mr-2">
              <Devs />
            </span>
          </a>
        );
      default:
        return (
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-1">Made with</span>
            <span>
              <Devs />
            </span>
          </a>
        );
    }
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "ru", text: "Русский" },
  ],
};
