module.exports = {
  title: "Ahmad Mostafa",
  description: "Full Stack Software Engineer",
  theme: "modern-blog",
  themeConfig: {
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
      ['link', { rel: "manifest", href: "/site.webmanifest" }],
      ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
      ['link', { rel: "shortcut icon", href: "https://ahmadmostafa.com/favicon.ico" }],
      ['meta', { name: "msapplication-TileColor", content: "#da532c" }],
      ['meta', { name: "theme-color", content: "#ffffff" }],
    ],
    summary: true,
    summaryLength: 300,
    heroImage: "/images/hero.jpeg",
    nav: [
      {
        text: "Home",
        link: "/",
        icon: 'el-icon-house'
      },
      {
        text: "Projects",
        link: "/projects/",
        icon: "el-icon-folder"
      }
    ],
    about: {
      fullName: "Ahmad Mostafa",
      image: "/images/bg_1.png",
      bio:
        "I'm a passionate, persistent, self-directed, autonomous learner Full Stack Software Engineer. I Enjoy building cool 😎 scalable ⏫ well designed 📐 fast 🚀 web and mobile apps using the cutting-edge languages and frameworks, I work with LOVE 🥰 and live by challenges."
    },
    disqus: "ahmadmostafa",
    googleAnalytics: "UA-144752623-2",
    sitemap: true,
    hostname: "https://ahmadmostafa.com/",
    socialShare: true,
    socialShareNetworks: ["twitter", "facebook"],
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
          type: "youtube",
          link: "https://www.youtube.com/channel/UC8fZybVYhEnCe1UwwVidVcg"
        },
        {
          type: "twitter",
          link: "https://twitter.com/ahmad_mostafa10/"
        }
      ],
      copyright: [
        {
          text: "This theme is available for you!",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        },
        {
          text: `MIT Licensed Copyright © ${new Date().getFullYear()}-present`,
          link:
            "https://github.com/z3by/vuepress-theme-modern-blog/blob/master/LICENSE"
        }
      ]
    }
  },

  plugins: [
    [
      'crisp', {
        siteID: "dd982aa2-b33e-432d-88a5-b14a031cee97"
      }
    ]
  ]
};
