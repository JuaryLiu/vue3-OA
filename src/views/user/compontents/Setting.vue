<template>
  <Header title="设置" left="true"></Header>
  <div class="main">
    <el-card class="card" v-for="item in dataList" :key=item.id>
      <div class="info" v-for="i in item.list" :key="i.id" @click="goPath(item)">
        <span>{{i.title}}</span>
        <el-icon size="16" color="#999"><ArrowRightBold /></el-icon>
      </div>
    </el-card>
    <div class="btn">退出登录</div>
  </div>
</template>

<script setup>
import { ArrowRightBold } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const dataList = [
  {
    id: 0,
    list: [
      {
        id: 0,
        title: '修改密码',
        path: 'setPwd'
      }
    ]
  },
  {
    id: 1,
    list: [
      {
        id: 0,
        title: '新消息通知',
        path: 'newMsgNotice'
      },
      {
        id: 1,
        title: '通用',
        path: 'current'
      }
    ]
  }
]
const router = useRouter()
const goPath = (item) => {
    router.push(item.path)
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 3.375rem;
  &:deep(.el-card__body) {
    padding: 0.625rem;
  }
  .card {
    margin-bottom: 0.625rem;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .625rem 0; 
    padding-left: 0.625rem;
    border-bottom: 1px solid rgba(244, 244, 244, 1);
    &:last-child {
      border: none;
    }
  }
  .btn {
    background: #fff;
    height: 2.8125rem;
    line-height: 2.8125rem;
    text-align: center;
  }
}
</style>