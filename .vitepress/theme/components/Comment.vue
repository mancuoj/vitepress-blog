<script lang="ts" setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const theme = computed(() => (isDark.value ? 'dark_tritanopia' : 'light_tritanopia'))
</script>

<template>
  <div id="giscus">
    <Giscus
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
