---
date: '2019-09-01'
published: true
slug: how-to-create-vuepress-blog
tags:
- blog
- vue.js
- vuepress
- template
- static-site-generator
time_to_read: 7
title: How to create blog powered by Vuepress like my blog?
description: create your own Vuepress blog with high performance and and cool design...
author: Ahmad Mostafa
location: Irbid-Jordan
image: /images/how-to-create-vuepress-blog/header-image.jpg
meta:
  - name: description
    content: How to create blog powered by Vuepress like my blog?
  - name: keywords
    content: Ahmad Mostafa, vuepress, blog, vue.js, profile, free template, open-source
---

I wanted to start blogging long time ago, but I struggled to find the perfect platform that makes me comfortable creating new blogs, so I tried many frameworks, but none of them I really liked, as each one has its own downsides, but when I tried Vuepress I found that it is the perfect way for me to go!

## What is Vuepress

Vuepress is a Static Site Generator powered by Vue.js, it allows you to create high performance and highly customizable static sites with simple steps leveraging the power of Markdown!

## Using Vuepress superpowers for blogging

as Vuepress being highly customizable you can use it as a blog engine, and thanks to the Vue.js community now Vuepress comes with really great Plugins that make that easier.

## Getting Started

### installation

this is a step-by-step guide that helps you starting a Vuepress Blog site from starting to deployment.

let's start by forking this Repository [z3by/vuepress-blog-template](https://github.com/z3by/vuepress-blog-template)

now create a new repository using this repository as a template go to [https://github.com/new](https://github.com/new)
in `Repository template` section choose `vuepress-blog-template`

![image](/images/how-to-create-vuepress-blog/1.png)

the created repository will have the same structure as the template, and the readme file will have some instructions on how to get started.
let's follow these instructions, start by cloning your repository

```bash
git clone https://github.com/<YOUR USERNAME>/<REPOSITORY NAME>
```

and here is the files structure

![files structure](/images/how-to-create-vuepress-blog/2.png)

now we need to install development dependencies, so navigate to the local repository then run

```bash
yarn install
```

after that let's start the development server by running

```bash
yarn dev
```

now you will have the development server running on [http://localhost:8080/](http://localhost:8080/)

### Start creating new posts

when you navigate to the localhost you will see the blog site with some example posts

![blog dev server](/images/how-to-create-vuepress-blog/3.png)

the example posts are in `/_posts/` directory, take a look and see how each post was built.

you will see at the top of each post some Yaml metadata that is called `frontmatter`

```yml
---
date: 2019-9-9
tags:
  - blogging
  - vuepress
author: Ahmad Mostafa
location: Amman-Jordan
summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vel corporis ducimus iste, quos eligendi quidem omnis alias dignissimos reiciendis odio excepturi neque nulla iusto magni reprehenderit atque voluptates dicta."
timeToRead: 5
# you can add a custom image to the public directory then just put the url here for example /images/....
headerImage: "https://source.unsplash.com/random/800x400" 
---

```

and they are just key pairs that represent the data of the articles, and then you see the actual markdown content of the post, and you can see all the markdown powers illustrated in the post content.
after adding your own post content you can get rid of the other posts.

### Edit About Page

when you navigate to `/about/` section of the website you will find a small info Card about the Blog Owner like this

![about page card](/images/how-to-create-vuepress-blog/4.png)

to change the values you need to go to `/.vuepress/config.js` and change these values to your own information.

```js
personalPhoto: "/images/personalPhoto.png", // the base directory for this image is the public directory
fullName: "Ahmad Mostafa", // appears in about page
bio:
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatuquam voluptas nam dolorum minus consequuntur fugit quis repellenduhic vero praesentium facilis amet minima officia impedit, expeditquo veniam perferendis.", // appears in about page
```

and to add links to your own social account you need to override the contact info in the footer section of the same file

```js
....
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
.....

```

these values also show in the footer of the website.

## Adding a new page

now we will add a custom page, let's call it `projects`
to do this we need to create a new folder inside `/pages/` and lets call it `projects`, then we will create a new markdown file inside it and let's call it `index.md`, then add some markdown to it for example

```markdown
# My projects

## vuepress
etc..
```

now we have our new page ready, so we will add it to the navbar
to do so, open `/.vuepress/config.js` then add a new object to the `nav` array inside `themeConfig`

```js
...
nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Archive",
        link: "/archive/"
      },
      {
        text: "Tags",
        link: "/tag/"
      },
      {
        text: "About",
        link: "/pages/about/"
      },
      {
        // the text that will show in the navbar
        text: "Projects",
        // the link to the project directory that we created recently
        link: "/pages/projects/"
      }
    ],
...
```
now, when we check our site we will be having a new link in the navbar referring to the Projects page that we created! :tada:
if you are not able to see the new page just restart the development server.

## Deployment

you can deploy your blog you any hosting service, you can check the official documentation [here](https://vuepress.vuejs.org/guide/deploy.html#github-pages)

That's it :grinning:
