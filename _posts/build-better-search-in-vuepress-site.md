---
date: '2019-12-09'
slug: build-better-search-in-vuepress-site
tags:
- open-source
- github
- career
- software-engineering
title: Build a better search in Vuepress
description: How to build better search in vuepress and vue.js
author: Ahmad Mostafa
location: Irbid-Jordan
image: /images/build-better-search-in-vuepress-site/header-image.jpeg
meta:
  - name: title
    content: Build a better search in Vuepress
  - name: description
    content: How to build better search in vuepress and vue.js
  - name: keywords
    content: Ahmad Mostafa, Vuepress, flex-search, Vuepress search index, vue.js search, static site search
  - name: author
    content: Ahmad Mostafa
  - name: language
    content: English
featured: true
---

## How to use Vuepress search

[Vuepress](https://vuepress.vuejs.org/) default theme provides a somehow good search capabilities for small sites, it works out of the box, but it is not too reliable, it searches the headers only and doesn't help a lot in finding the exact result you are aiming for, I faced this issue with a Vuepress theme that I am building, so here I will let you know how I handled this situation.

## Using Algolia to index your site

[Algolia](https://www.algolia.com/) define themselves as "Fast, reliable and modern search and discovery", it is a service that helps your site to provide a better search functionality, their services varies from site indexing to API indexing, to query ranking, to Voice search, etc...

[Vuepress](https://vuepress.vuejs.org/) is integrated by default with [Algolia](https://www.algolia.com/) with a service called [Doc Search](https://community.algolia.com/docsearch/), you can create an account and request to index your documentation site, this is pretty good service for Open-source software documentation sites, and it is being used by different popular sites such as:

- [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [Vue.js](https://vuejs.org/v2/guide/)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [Moments.js](https://momentjs.com/)
- ...

I submitted one site but they rejected it, but if you were lucky you can add it to your site by following The official documentation [here :wave:](https://vuepress.vuejs.org/theme/default-theme-config.html#algolia-docsearch)

## Using Google custom search engine

My second option was [Google custom search engine](https://cse.google.com/cse/all), it can give you google's superpowers, it works great in medium to large static sites, but it has some ads if you are OK with them, Or you can use it over JSON API, but it is not free, it works really well, but I saw that it as Over-Kill :knife:

## Using a local search library

I found a plenty of other third party providers, but I decided to build my own local search index, but thanks to [FlexSearch](https://github.com/nextapps-de/flexsearch) I did not need to re-invent the wheel, [FlexSearch](https://github.com/nextapps-de/flexsearch) define themselves as "Web's fastest and most memory-flexible full-text search library with zero dependencies.", I found that is true!

here I will show you how I've built my custom search engine within few lines!

first I installed FlexSearch

```bash
npm install nextapps-de/flexsearch
```

Then in my Search Component I used it as following.

```javascript
// SearchBox.vue

<template>
  ...
</template>

<script>
import Flexsearch from "flexsearch";

export default {
  data () {
    return {
      index: null,
      query: ""
    };
  },
  // In Vuepress you should use mounted not Created life-cycle hook, otherwise it will throw an error.
  mounted () {
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "key",
        // here you choose the fields you want to index.
        // for me I will search in the title and the content of each page.
        // of course I stripped the content before so I use the plain text content not the markdown text
        field: ["title", "content"]
      }
    });
    // Vuepress injects the $site global variable in the Vue instance, you can get the pages array from the $site object
    const { pages } = this.$site;
    // finally you add the pages to the FlexSearch index.
    this.index.add(pages);
  },
  methods: {
    querySearchAsync (queryString, cb) {
      const { pages, themeConfig } = this.$site;
      const query = queryString.trim().toLowerCase();
      const max = 10;

      if (this.index === null || query.length < 3) {
        return cb([]);
      }

      // here we use the search method that FlexSearch provides.
      this.index.search(
        query,
        {
          limit: max,
          threshold: 2,
          // for other types of encoding refer to https://github.com/nextapps-de/flexsearch#encoders
          encode: 'extra'
        },
        // this callback gives you the all pages that contains the search term "query"
        (result) => {
          if (result.length) {
            // getting the value and link of each page that contains the search term
            const resolvedResult = result.map(page => {
              return {
                link: page.path,
                value: this.getQuerySnippet(page)
              };
            });
            return cb(resolvedResult);
          } else {
            return cb([{ value: `No results! Try something else.`, link: `#` }]);
          }
        }
      );
    }
  }
};
</script>
```

and that is it! you are free to use this code snippet, reading the readme of [FlexSearch](https://github.com/nextapps-de/flexsearch) will be enough for you to get the best results you want, please give it a look for more customizations.
