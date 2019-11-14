---
date: '2019-09-01'
slug: how-to-create-vuepress-blog
tags:
- blog
- vue.js
- vuepress
- template
- javascript
- static-site-generator
title: How to create a blog powered by Vuepress?
description: create your own Vuepress blog with high performance and and cool design...
author: Ahmad Mostafa
location: Irbid-Jordan
image: /images/how-to-create-vuepress-blog/header-image.jpg
meta:
  - name: title
    content: How to create a blog powered by Vuepress?
  - name: description
    content: create your own Vuepress blog with high performance and and cool design...
  - name: keywords
    content: Ahmad Mostafa, vuepress blog, vuepress, blog, vue.js, free blog template, open-source vuepress theme
  - name: author
    content: Ahmad Mostafa
  - name: language
    content: English
featured: true
---

I wanted to start blogging long time ago, but I struggled to find the perfect platform that makes me comfortable creating new blogs, so I tried many frameworks, but none of them I really liked, as each one has its own downsides, but when I tried Vuepress I found that it is the perfect way for me to go!

## What is Vuepress

Vuepress is a Static Site Generator powered by Vue.js, it allows you to create high performance and highly customizable static sites with simple steps leveraging the power of Markdown!

## Using Vuepress superpowers for blogging

as Vuepress being highly customizable you can use it as a blog engine, and thanks to the Vue.js community now Vuepress comes with really great Plugins that make that easier.

## Getting Started

### installation

this is a step-by-step guide that helps you starting a Vuepress Blog site from starting to deployment.

##### Fork

let's start by forking this Repository [z3by/vuepress-blog-template](https://github.com/z3by/vuepress-blog-template)

##### Create The repository

now create a new repository using this repository as a template go to [https://github.com/new](https://github.com/new)
in `Repository template` section choose `vuepress-blog-template`

![image](/images/how-to-create-vuepress-blog/1.png)

the created repository will have the same structure as the template, and the readme file will have some instructions on how to get started.
let's follow these instructions, start by cloning your repository

##### Clone

```bash
git clone https://github.com/<YOUR USERNAME>/<REPOSITORY NAME>
```

The file structure will look like this

![vuepress blog template file structure](/images/how-to-create-vuepress-blog/2.jpeg)

now we need to install development dependencies, so navigate to the local repository then run

##### Install dependencies

```bash
yarn install
```

##### Start Vuepress Development Server

after that let's start the development server by running

```bash
yarn dev
```

now you will have the development server running on [http://localhost:8080/](http://localhost:8080/)

### Start creating new posts

when you navigate to your localhost you will see some example blog posts

![blog dev server](/images/how-to-create-vuepress-blog/3.jpeg)

the example posts are in `/_posts/` directory, take a look and see how each post was built.

you will see at the top of each post some Yaml metadata that is called `frontmatter`

```yml
---
date: 2018-11-7
tags:
  - frontmatter
  - vuepress
author: ULIVZ
location: Hangzhou
title: Front Matter in VuePress
image: https://source.unsplash.com/random/800x600
featured: true
---
```

and they are just key pairs that represent the data of the articles, and then you see the actual markdown content of the post, and you can see all the markdown powers illustrated in the post content.
after adding your own post content you can get rid of the other posts.

### Edit About Page

when you navigate to `/about/` section of the website you will find a small info Card about the Blog Owner like this

![about page card](/images/how-to-create-vuepress-blog/4.jpeg)

to change the values you need to go to `/.vuepress/config.js` and change these values to your own information.

```js
...
about: {
      fullName: "Ahmad Mostafa",
      bio: "I am a passionate Software Engineer, I love Vue.js ♥ ...",
      // image: "/images/image.png" / refers to the public directory
      image: "https://www.ahmadmostafa.com/images/bg_1.png"
    },
...
```

and to add links to your own social account you need to override the contact info in the footer section of the same file

```js
...
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
...

```

these values also show in the footer of the website.

## Deployment

you can deploy your blog to any hosting service, you can check the official documentation [here](https://vuepress.vuejs.org/guide/deploy.html#github-pages)

That's it :grinning:
