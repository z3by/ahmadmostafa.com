(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{334:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"get-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-started","aria-hidden":"true"}},[t._v("#")]),t._v(" get started")]),t._v(" "),a("p",[t._v("at the end of this tutorial you will create a vuepress blog that looks and feels like this demo "),a("a",{attrs:{href:"http://vp-modern.z3by.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://vp-modern.z3by.com"),a("OutboundLink")],1),t._v(",")]),t._v(" "),a("p",[t._v("You can scaffold your project how ever you want, here we will use "),a("a",{attrs:{href:"https://github.com/vuepressjs/create-vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create Vuepress"),a("OutboundLink")],1),t._v(" with the Blog boilerplate.")]),t._v(" "),a("p",[t._v("so let's get started by running this command in an empty directory")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create vuepress\n")])])]),a("p",[t._v("Now you will be prompted to choose what boilerplate you want to go with, let's select blog")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/vuepress-modern-blog-theme/2.png",alt:"image"}})]),t._v(" "),a("p",[t._v("After that you will be prompted for some basic info.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/vuepress-modern-blog-theme/3.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("then, let's open the project with a good code editor (Visual Studio Code 😉)")]),t._v(" "),a("p",[t._v("The directory structure will look like this\n"),a("img",{attrs:{src:"/images/vuepress-modern-blog-theme/4.png",alt:"image"}})]),t._v(" "),a("p",[t._v("all posts will go inside "),a("code",[t._v("/blog/_posts/")]),t._v("\nlet's install dependencies and run a development serve by running")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n")])])]),a("p",[t._v("you can access the development server at "),a("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"install-my-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-my-theme","aria-hidden":"true"}},[t._v("#")]),t._v(" Install My theme")]),t._v(" "),a("p",[t._v("Let's install my theme by running")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-theme-modern-blog\n")])])]),a("p",[t._v("Then let's change Vuepress config,\nopen "),a("code",[t._v("/blog/.vuepress/config.js")]),t._v(" then change theme value from")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/theme-blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("to")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modern-blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("you might need to restart the development server.")]),t._v(" "),a("h3",{attrs:{id:"add-frontmatter-metadata-to-the-posts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-frontmatter-metadata-to-the-posts","aria-hidden":"true"}},[t._v("#")]),t._v(" Add Frontmatter metadata to the posts")]),t._v(" "),a("p",[t._v("Let's take one of the demo posts generated by the first step and let's add some new Frontmatter metadata into it.")]),t._v(" "),a("p",[t._v("Current metadata is on the upper section of the post that is located withing "),a("code",[t._v("---")]),t._v(" mark,\nlike this")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2018"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" frontmatter\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vuepress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ULIVZ\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Hangzhou\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("p",[t._v("We can add some values that will improve how the post looks, for example we can specify title, description and Image.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2018"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" frontmatter\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vuepress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ULIVZ\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Hangzhou\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Front Matter in VuePress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" What is Front Matter in Vuepress 🤔🤔🤔\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//static.qdskill.com/2018/05/vuepress.jpg\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("p",[t._v("Now you can see the difference")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/vuepress-modern-blog-theme/5.png",alt:"image"}})]),t._v(" "),a("p",[a("strong",[t._v("NOTE")]),t._v(" to use internal image link you can put your image inside the public directory in "),a("code",[t._v(".vuepress/public/images")]),t._v(" then the image value will be like this")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /images/<YOUR_IMAGE_HERE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"increase-posts-per-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#increase-posts-per-page","aria-hidden":"true"}},[t._v("#")]),t._v(" Increase Posts per page")]),t._v(" "),a("p",[t._v("now the current config shows only 2 Posts per page, to increase this number we will modify blog plugin options by modifying this method in "),a("code",[t._v("/blog/.vuepress/config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// path: /blog/.vuepress/config.js")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("modifyBlogPluginOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("blogPluginOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" blogPluginOptions\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("we will modify it to be")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("modifyBlogPluginOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("blogPluginOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      blogPluginOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"directories"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lengthPerPage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" blogPluginOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("it is not a magic you can check "),a("a",{attrs:{href:"https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),a("OutboundLink")],1),t._v(" to see what we have done here.")]),t._v(" "),a("h2",{attrs:{id:"customize-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize-theme","aria-hidden":"true"}},[t._v("#")]),t._v(" Customize Theme")]),t._v(" "),a("h3",{attrs:{id:"change-theme-colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-theme-colors","aria-hidden":"true"}},[t._v("#")]),t._v(" Change theme Colors")]),t._v(" "),a("p",[t._v("to change theme colors let's navigate to "),a("code",[t._v("blog/.vuepress/styles/palette.styl")])]),t._v(" "),a("p",[t._v("you can see that it contains some "),a("a",{attrs:{href:"http://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stylus"),a("OutboundLink")],1),t._v(" variables, let's change the "),a("code",[t._v("$accentColor")]),t._v(" to "),a("code",[t._v("#6A82FB")]),t._v("\nand let's add a new variable and let's name it "),a("code",[t._v("$secondaryColor")]),t._v(" and give it a value of "),a("code",[t._v("#FC5C7D")])]),t._v(" "),a("p",[t._v("🎉 Now you can see that the whole theme colors did change")]),t._v(" "),a("h3",{attrs:{id:"add-custom-styling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-custom-styling","aria-hidden":"true"}},[t._v("#")]),t._v(" add custom styling")]),t._v(" "),a("p",[t._v("now you can see that te footer colors looks ugly! I did this on purpose 😈 to let you add your own styling and not to stick to mine!")]),t._v(" "),a("p",[t._v("to change Footer style you can inspect the page using your browser and check the proper css selector for the element you want to change, in our case it is a "),a("code",[t._v("<footer>")]),t._v(" element with a class attribute set to "),a("code",[t._v("footer")])]),t._v(" "),a("p",[t._v("so let's go to "),a("code",[t._v(".vuepress/styles/index.styl")]),t._v(" and let's add some styling for example")]),t._v(" "),a("div",{staticClass:"language-stylus extra-class"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("footer.footer")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lighten")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")])])]),t._v("\n")])])]),a("p",[t._v("you might need "),a("code",[t._v("!important")]),t._v(" statement in some cases not all cases, but it is a good practice to use it wisely.")]),t._v(" "),a("h3",{attrs:{id:"change-hero-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-hero-image","aria-hidden":"true"}},[t._v("#")]),t._v(" Change Hero Image")]),t._v(" "),a("p",[t._v("this theme is using "),a("a",{attrs:{href:"https://source.unsplash.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unsplash Random API"),a("OutboundLink")],1),t._v(" as a place holder for the Hero Image, to replace it with your own image just add your image to themeConfig like this")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    heroImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<YOUR_NEW_IMAGE_URL>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-commenting-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-commenting-functionality","aria-hidden":"true"}},[t._v("#")]),t._v(" Add commenting functionality")]),t._v(" "),a("p",[t._v("We will use "),a("a",{attrs:{href:"https://disqus.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Disqus"),a("OutboundLink")],1),t._v(" as a commenting engine, so go ahead and create an account, and get the "),a("code",[t._v("Short Website Name")]),t._v(" from Disqus configurations, put it inside themeConfig object in "),a("code",[t._v(".vuepress/config.js")]),t._v(" as follows")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    disqus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<DISQUS WEBSITE SHORT NAME>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("now you will see this cool comments box after each post")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/vuepress-modern-blog-theme/6.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"add-google-analytics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-google-analytics","aria-hidden":"true"}},[t._v("#")]),t._v(" Add google analytics")]),t._v(" "),a("p",[t._v("after deploying your Blog you will need to know some statistics about your website, how much visitors you have and where your website visits are coming from, etc...")]),t._v(" "),a("p",[t._v("to have these cool features we will incorporate Google Analytics, to get started you just need to create an account on Google analytics, then you need to create a property that is linked to your domain, after that you can get the "),a("code",[t._v("Tracking ID")]),t._v(" of this property, it is usually composed of some numbers, prefixed with "),a("code",[t._v("UA-")]),t._v("\ncopy this value and add it to themeConfig this way:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    googleAnalytics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UA-************"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replace this value with your tracking ID")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-sitemap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-sitemap","aria-hidden":"true"}},[t._v("#")]),t._v(" Add Sitemap")]),t._v(" "),a("p",[t._v("Sitemaps are very important for your website to be indexed by google, you can learn more about Sitemaps "),a("a",{attrs:{href:"https://support.google.com/webmasters/answer/156184?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("We will auto generate a sitemap for our blog, all you need to do is to add these two settings to you themeConfig")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sitemap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.yourdomain.com/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("replace hostname value with your own domain name, for example mine is  "),a("a",{attrs:{href:"https://www.ahmadmostafa.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.ahmadmostafa.com/"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"add-social-sharing-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-social-sharing-feature","aria-hidden":"true"}},[t._v("#")]),t._v(" Add Social-Sharing feature")]),t._v(" "),a("p",[t._v("It is good to allow your users to share your posts on their Social Media accounts, "),a("a",{attrs:{href:"https://disqus.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Disqus"),a("OutboundLink")],1),t._v(" already offers this feature, but it is good to make it more visible to your users so you encourage them to share your content, we will add these settings to themeConfig to enable social sharing feature")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    socialShare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    socialShareNetworks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"twitter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"facebook"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("you can add other networks to "),a("code",[t._v("socialShareNetworks")]),t._v(" array.")]),t._v(" "),a("p",[t._v("now you can see a cool floating button on the right side of your posts that help your users sharing your content! 🎉")]),t._v(" "),a("p",[t._v("That's It! 🎉\ngo and add some cool posts! 😉")])])}),[],!1,null,null,null);e.default=n.exports}}]);