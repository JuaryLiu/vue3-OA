<template>
<!-- 底部Tabbar的封装 -->
  <div class="navbar">
    <div
      class="item"
      v-for="item in navbarList"
      :key="item.id"
      @click="goPath(item)"
      :class="current == item.path ? 'active' : ''"
    >
      <div class="icon">
        <i :class="item.icon"></i>
        <div v-if="item.tag" class="tag"> {{ item.tag }} </div>
      </div>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
import { HomeFilled, User, Menu, Document } from '@element-plus/icons-vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const navbarList = [
  {
    id: 1,
    icon: 'iconfont icon-shouye',
    title: '首页',
    path: 'home',
    tag: ''
  },
  {
    id: 2,
    icon: 'iconfont icon-file-fill',
    title: '待办',
    path: 'schedule',
    tag: ''
  },
  {
    id: 3,
    icon: 'iconfont icon-all-fill',
    title: '应用',
    path: 'application',
    tag: ''
  },
  {
    id: 4,
    icon: 'iconfont icon-user-fill',
    title: '我的',
    path: 'user',
    tag: '2'
  }
]
const router = useRouter()
const goPath = (item) => {
  router.push(item.path)
}
const route = useRoute()
//获取当前的路由路径信息，与tabBar中的跳转路由信息进行比对，相同的情况想就 进行样式的添加与移除，避免了刷新重置的问题
const current = computed(() => {
  return route.path.replace('/', '')
})
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 1.25rem !important;
}
.active {
  color: #2d8cf0 !important;
}
.navbar {
  margin-top: 3.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ccc;
    font-size: 0.875rem;
    .icon {
      position: relative;
      .tag {
        position: absolute;
        top: 0;
        right: -0.3125rem;
        width: .9375rem;
        height: .9375rem;
        line-height:.9375rem;
        text-align: center;
        background: #ff0000;
        color: #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>