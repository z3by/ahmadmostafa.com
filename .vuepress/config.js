module.exports = {
  title: "Ahmad Mostafa",
  description: "Full Stack Software Engineer",
  theme: "modern-blog",
  themeConfig: {
    summary: true,
    summaryLength: 300,
    heroImage: "https://images.unsplash.com/photo-1571291044796-b7a2b315bb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
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
          text: `MIT Licensed Copyright © ${new Date().getFullYear()}-present`,
          link:
            "https://github.com/z3by/vuepress-blog-template/blob/master/LICENSE"
        }
      ]
    }
  }
};
