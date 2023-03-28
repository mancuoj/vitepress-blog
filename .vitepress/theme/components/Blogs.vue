<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { ref } from 'vue'

interface post {
  regularPath: string
  frontMatter: object
}

const { theme } = useData()
const allPosts = theme.value.posts || []
const pageSize = theme.value.pageSize
const pageNum = Math.ceil(allPosts.length / pageSize)

const currentPage = ref(1)
const currentPosts = ref([])

let allMap = {}
for (let i = 0; i < pageNum; i++) {
  allMap[i] = []
}

let index = 0
for (let i = 0; i < allPosts.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index++
  }
  allMap[index].push(allPosts[i])
}
currentPosts.value = allMap[currentPage.value - 1]

const go = (i: number) => {
  currentPage.value = i
  currentPosts.value = allMap[currentPage.value - 1]
}
</script>

<template>
  <div>
    <div class="blog-list">
      <a class="blog" v-for="post in currentPosts" :href="withBase(post.regularPath)">
        <div class="blog-title">{{ post.frontMatter.title }}</div>
        <div class="blog-date">{{ post.frontMatter.date }}</div>
      </a>
    </div>
    <div class="pagination">
      <div class="link" :class="{ activeLink: currentPage === i }" v-for="i in pageNum" :key="i" @click="go(i)">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.blog {
  display: block;
  max-width: 600px;
  width: 85%;
  margin: 12px;
  padding: 10px 20px;
  background: var(--vp-c-bg);
  border: 5px solid #3e4b4b;
  border-radius: 10px;
  box-shadow: 6px 6px var(--vp-c-brand);
  cursor: pointer;
  position: relative;
}

.blog:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px var(--vp-c-brand);
}

.blog-title {
  color: var(--vp-c-brand);
  font-size: 1.2rem;
  font-weight: bold;
}

.blog-date {
  position: absolute;
  right: 20px;
  bottom: 10px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 70px;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 3.5rem;
}

.link {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 2rem;
}

.link:hover {
  opacity: 0.7;
}

.activeLink {
  background-color: var(--vp-c-brand);
  color: white;
}
</style>
