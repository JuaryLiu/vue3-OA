<template>
  <Header title="我的消息" left="true"></Header>
  <div class="main">
    <el-card>
      <div class="item" v-for="item in 3" :key="item" @click="goPath">
        <div class="left">
          <div class="avatar"
            ><el-avatar size="large"> 审批 </el-avatar>
            <div class="tag"> 1 </div>
          </div>
          <div class="info">
            <p class="title">审批提醒</p>
            <span class="content">黄二于 2021-02-01 …</span>
          </div>
        </div>
        <div>2021-02-01 </div>
      </div>
    </el-card>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goPath =() => {
  router.push({
    name:"msgInfo",
    params:{
      id:"111"
    }
  })
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 3.375rem;
  &:deep(.el-card__body) {
    padding: 0 var(--el-card-padding) !important;
  }
}
.item {
    margin: .625rem 0;
  padding: 0.625rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
  height: 4.375rem;
  color: #ccc;
  border-bottom: 1px solid rgba(244, 244, 244, 1);
  &:last-child {
    border: none;
  }
  .left {
    display: flex;
    .info {
      margin-left: 0.3125rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-size: 0.9375rem;
        color: #333;
      }
    }
  }
}
.avatar {
  position: relative;
  .tag {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    text-align: center;
    background: #ff0000;
    color: #fff;
    border-radius: 50%;
  }
}
</style>