<template>
  <div class="card">
    <el-card>
      <!-- 首页的打卡信息选项 -->
      <div class="options">
        <div class="item" v-for="item in iconList" :key="item.id" @click="goClock(item)">
          <img :src="item.Image" alt="" />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const iconList = [
  {
    id: 1,
    title: '打卡',
    Image: '	https://demo2022.axureshop.com/1697182/images/%E9%A6%96%E9%A1%B5_1/u62360.svg',
    path: 'clock'
  },
  {
    id: 2,
    title: '考勤查询',
    Image: 'https://demo2022.axureshop.com/1697182/images/%E9%A6%96%E9%A1%B5_1/u62333.svg',
    path: 'attendance'
  },
  {
    id: 3,
    title: '我的申请',
    Image: '	https://demo2022.axureshop.com/1697182/images/%E9%A6%96%E9%A1%B5_1/u62363.svg',
    path: 'apply'
  }
]
const goClock = (item) => {
  router.push(item.path) // 这里根据后端返回的数据，进行对应的页面跳转和参数的传递，一样图方便数据做成死的
}
</script>

<style lang="scss" scoped>
.card {
  margin: 0.625rem 0;
  &:deep(.el-card__body) {
    padding: 0.625rem !important;
  }
}
.options {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item {
    font-size: 1rem;
    color: #666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>