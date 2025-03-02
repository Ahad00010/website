import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://aoi.js.org",
  integrations: [
    expressiveCode({
      frames: {
        showCopyToClipboardButton: true,
      },
    }),
    starlight({
      title: "aoi.js",
      favicon: "/favicon.png",
      logo: {
        src: "/favicon.png",
      },
      social: {
        github: "https://github.com/aoijs/website",
        discord: "https://discord.com/invite/HMUfMXDQsV",
      },
      editLink: {
        baseUrl: "https://github.com/aoijs/website/edit/main/",
      },
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "script",
          attrs: {
            src: "/custom.js",
            defer: true,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "aoi.js | Akarui Development",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content:
              "https://raw.githubusercontent.com/aoijs/website/master/assets/images/aoijs-banner.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content:
              "https://raw.githubusercontent.com/aoijs/website/master/assets/images/aoijs-banner.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "theme-color",
            content: "#89CFF0",
          },
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          link: "/guides/setup",
        },
        {
          label: "Extensions",
          items: [
            {
              label: "Showcase",
              link: "/extensions/showcase/",
            },
            {
              label: "@akarui",
              items: [
                {
                  label: "aoi.panel",
                  autogenerate: {
                    directory: "extensions/aoipanel",
                  },
                  collapsed: true,
                },
                {
                  label: "aoi.music",
                  items: [
                    {
                      label: "Getting Started",
                      link: "/extensions/aoimusic/",
                    },
                    {
                      label: "Events",
                      link: "/extensions/aoimusic/events",
                    },
                    {
                      label: "Functions",
                      autogenerate: {
                        directory: "extensions/aoi.music/functions",
                      },
                      collapsed: true,
                    },
                  ],
                  collapsed: true,
                },
              ],
            },
            {
              label: "Community Extensions",
              items: [
                {
                  label: "aoi.canvas",
                  link: "extensions/aoicanvas",
                },
                {
                  label: "aoi.js-library",
                  link: "extensions/aoijs-library",
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          label: "Guides",
          items: [
            {
              label: "Application Commands",
              autogenerate: {
                directory: "guides/application-cmds",
              },
              collapsed: true,
            },
            {
              label: "Client",
              autogenerate: {
                directory: "guides/client",
              },
              collapsed: true,
            },
            {
              label: "Other",
              autogenerate: {
                directory: "guides/other",
              },
              collapsed: true,
            },
          ],
        },
        {
          label: "Functions",
          items: [
            {
              label: "Array",
              autogenerate: {
                directory: "functions/array-related",
              },
              collapsed: true,
            },
            {
              label: "Awaited",
              autogenerate: {
                directory: "functions/awaited-related",
              },
              collapsed: true,
            },
            {
              label: "Client",
              autogenerate: {
                directory: "functions/client-related",
              },
              collapsed: true,
            },
            {
              label: "Event",
              autogenerate: {
                directory: "functions/event-related",
              },
              collapsed: true,
            },
            {
              label: "Guild",
              autogenerate: {
                directory: "functions/guild-related",
              },
              collapsed: true,
            },
            {
              label: "Info",
              autogenerate: {
                directory: "functions/info-related",
              },
              collapsed: true,
            },
            {
              label: "Interaction",
              autogenerate: {
                directory: "functions/interaction-related",
              },
              collapsed: true,
            },
            {
              label: "Invite",
              autogenerate: {
                directory: "functions/invite-related",
              },
              collapsed: true,
            },
            {
              label: "Math",
              autogenerate: {
                directory: "functions/math-related",
              },
              collapsed: true,
            },
            {
              label: "Message",
              autogenerate: {
                directory: "functions/message-related",
              },
              collapsed: true,
            },
            {
              label: "Misc",
              autogenerate: {
                directory: "functions/misc-related",
              },
              collapsed: true,
            },
            {
              label: "User",
              autogenerate: {
                directory: "functions/user-related",
              },
              collapsed: true,
            },
            {
              label: "Util",
              autogenerate: {
                directory: "functions/util-related",
              },
              collapsed: true,
            },
            {
              label: "Variables",
              autogenerate: {
                directory: "functions/variables-related",
              },
              collapsed: true,
            },
          ],
          collapsed: true,
        },
      ],
    }),
    react(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  markdown: {
    shikiConfig: {
      langs: ["powershell"],
    },
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            class: "heading-link",
          },
        },
      ],
    ],
  },
  redirects: {
    // for easier navigation
    guides: "/",
  },
});
