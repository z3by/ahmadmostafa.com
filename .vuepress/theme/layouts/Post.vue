<template>
  <div id="vuperess-theme-blog__post-layout">
    <main class="vuepress-blog-theme-content">
      <img :src="$frontmatter.image" :alt="$frontmatter.title" class="img-zoomable">
      <h1>{{ $frontmatter.title }}</h1>
      <hr>
      <Content />
      <Toc />
    </main>
  </div>
</template>

<script>
import Toc from "@theme/components/Toc.vue";

export default {
  components: {
    Toc
  }
};
</script>

<style lang="stylus">

.vuepress-blog-theme-content {
  font-size: 20px;
  letter-spacing: 0px;
  color: #2c3e50;
  position: relative;
}
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>

