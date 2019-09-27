<template>
  <div id="base-list-layout" align="center">
    <div class="ui-posts" align="left">
      <div class="ui-post" v-for="page in pages" v-if="page.frontmatter.published">
        <div class="ui-post-image" :style="{backgroundImage: `url(${page.frontmatter.image})`}"></div>
        <div class="ui-post-title">
          <NavLink :link="page.path">{{ page.title }}</NavLink>
        </div>
        <div class="ui-post-description">
          {{ page.frontmatter.description || page.description }}...
          <!-- <Content :page-key="page.key" slot-key="intro"/>-->
        </div>
        <hr />
        <div class="ui-post-date" v-if="page.frontmatter.date">
          <CalendarIcon />
          <span>{{ new Date(page.frontmatter.date.trim()).toDateString() }}</span>
          <span class="mx-1">|</span>
          <ClockIcon />
          <span>
            Time to read:
            <b>{{ page.frontmatter.time_to_read }}</b> min
          </span>
          <span class="mx-1">|</span>
          <NavigationIcon />
          <span>{{ page.frontmatter.location }}</span>
          <span class="mx-1">|</span>
          <div class="tags">
            <span class="mx-1">Tags: </span>
            <div>
              <router-link
                class="tag-sm"
                v-for="tag in page.frontmatter.tags"
                :to="'/tag/' + tag"
              >#{{ tag }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <component v-if="$pagination.length > 1 && paginationComponent" :is="paginationComponent"></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import { NavigationIcon, ClockIcon, CalendarIcon } from "vue-feather-icons";
import {
  Pagination,
  SimplePagination
} from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: { NavigationIcon, ClockIcon, CalendarIcon },

  data() {
    return {
      paginationComponent: null
    };
  },

  created() {
    this.paginationComponent = this.getPaginationComponent();
  },

  computed: {
    pages() {
      return this.$pagination.pages;
    }
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT;
      if (n === "Pagination") {
        return Pagination;
      }

      if (n === "SimplePagination") {
        return SimplePagination;
      }

      return Vue.component(n) || Pagination;
    }
  }
};
</script>

<style lang="stylus">
.common-layout {
  .content-wrapper {
    padding-bottom: 80px;
  }
}

.ui-posts {
  max-width: 800px;
}

.ui-post {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  padding: 25px;
  padding-top: 15px;
  margin-bottom: 25px;
  border-radius: 14px;
  border-bottom: 1px solid #f1f1f1;
  background-color: #FFF;

  &:hover {
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  }

  &:last-child {
    border-bottom: 0px;
    margin-bottom: 0px;
  }

  p {
    margin: 0;
  }
}

.ui-post-image {
  height: 180px;
  background-size: cover;
  margin-bottom 15px;
  border-radius 10px;
}

.ui-post-title {
  font-size: 24px;
  border-bottom: 0;

  a {
    cursor: pointer;
    color: #222;
    transition: all 0.2s;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.ui-post-description {
  font-size: 14px;
  margin-bottom: 15px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 200;
}

.tags {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 200;
  display: flex;

  .tag-sm {
    margin: 0 4px;
    padding: 0 5px;
    text-decoration: none;
    border: 1px solid $accentColor;
  }
}

.ui-post-author {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.84);
  margin-bottom: 3px;
  font-weight: 400;

  svg {
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }
}

.ui-post-date {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 200;

  svg {
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }
}

.mx-1 {
  margin: 0 8px;
}
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>


