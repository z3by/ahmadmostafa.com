module.exports = {
  title: "Ahmad Mostafa",
  description: "Full Stack Software Engineer",
  theme: "modern-blog",
  themeConfig: {
    head: [
      ['link', { rel: "shortcut icon", href: "/favicon.png" }]
    ],
    summary: true,
    summaryLength: 600,
    heroImage: "/images/hero.jpeg",
    nav: [
      {
        text: "Home",
        link: "/",
        icon: 'el-icon-house'
      },
      {
        text: "About",
        link: "/pages/about/",
        icon: "el-icon-user"
      },
      {
        text: "Projects",
        link: "/pages/projects/",
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
            "https://github.com/z3by/vuepress-blog-template/blob/master/LICENSE"
        }
      ]
    }
  }
};
