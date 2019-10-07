<template>
  <div>
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>


<script>
export default {};
</script>

<style src="prismjs/themes/prism-okaidia.css"></style>
