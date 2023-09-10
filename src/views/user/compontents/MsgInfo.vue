<template>
  <Header title="审批提醒" left="true"></Header>
  <div class="main">
    <span class="time">2023-09-10 10:00</span>
    <div class="info">
      <div class="avatar"><el-avatar size="large"> 审批 </el-avatar></div>
      <div class="msg">
        <el-card>
          <template #header>
            <div class="msg-info">
              <span>审批提醒</span>
              <p>黄二于 2021-02-01 10:00 发起一条申请申请，请您尽快办理</p>
            </div>
          </template>
          <div class="btn" @click="goPath"> 去处理 </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
onMounted(() => {
  const path = route.params.id
  console.log(path)
})
const goPath = () => {
  console.log(111)
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 2.75rem;
  padding: 0.625rem;
  font-size: 0.8125rem;
  text-align: center;
  color: #999;
  .info {
    display: flex;
    justify-content: space-between;

    font-size: 0.9375rem;
    color: #333;
    .msg {
      position: relative;
      margin-left: 1.25rem;
      &:deep(.el-card__header) {
        padding: 0.625rem !important;
      }
      &:deep(.el-card__body) {
        padding: 0.625rem !important;
      }
      &::before {
        content: '';
        position: absolute;
        top: 1.25rem;
        left: -1.25rem;
        width: 0px;
        height: 0px;
        border: 10px solid rgba(255, 0, 0, 0);
        border-top: 10px solid #fff;
        transform: rotateZ(90deg);
      }
      .msg-info {
        text-align: left;
        p {
          margin-top: 0.3125rem;
          font-size: 0.875rem;
          color: #666;
        }
      }
      .btn {
        font-size: 0.8125rem;
        text-align: center;
        color: #2d8cf0;
      }
    }
  }
}
</style>