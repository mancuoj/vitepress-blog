<script lang="ts" setup>
import Giscus from '@giscus/vue'
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const route = useRoute()
const theme = computed(() => (isDark.value ? 'transparent_dark' : 'light_tritanopia'))
</script>

<template>
  <div id="giscus">
    <Giscus
      :term="route.path"
      id="comments"
      repo="mancuoj/vitepress-blog"
      repoId="R_kgDOJPXGYg"
      category="Announcements"
      categoryId="DIC_kwDOJPXGYs4CVYkY"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      lang="zh-CN"
      :theme="theme"
      async
    />
  </div>
</template>

<style scoped>
#giscus {
  margin-top: 3rem;
}
</style>
