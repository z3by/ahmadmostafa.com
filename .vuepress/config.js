module.exports = {
  title: "Ahmad Mostafa",
  description: "Full Stack Software Engineer",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Tags",
        link: "/tag/"
      },
      {
        text: "About",
        link: "/pages/about/"
      }
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/z3by/"
        },
        {
          type: "instagram",
          link: "https://instagram.com/z3bya/"
        },
        {
          type: "facebook",
          link: "https://facebook.com/ahmad.mostafa.z3by/"
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/z3by/"
        },
        {
          type: "twitter",
          link: "https://twitter.com/ahmad_mostafa10/"
        }
      ],
      copyright: [
        {
          text: "Built using Vuepress-Blog-Template",
          link: "https://github.com/z3by/vuepress-blog-template"
        },
        {
          text: `MIT Licensed | Copyright © ${new Date().getFullYear()}-present`,
          link:
            "https://github.com/z3by/vuepress-blog-template/blob/master/LICENSE"
        }
      ]
    }
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/",
            layout: "IndexPost",
            itemLayout: "Post",
            itemPermalink: "/:slug",
            pagination: {
              perPagePosts: 5
            }
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            layout: "Tags",
            frontmatter: { title: "Tags" },
            itemlayout: "Tag",
            pagination: {
              perPagePosts: 5
            }
          }
        ]
      }
    ],
    ["@vuepress/nprogress"],
    ["@vuepress/back-to-top"],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-144752623-2"
      }
    ]
  ]
};
