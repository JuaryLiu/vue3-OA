<template>
  <Header title="公告详情" left="true"></Header>
  <div class="main">
    <div class="header">
      <p>员工行为准则（修订版）</p>
      <div class="header-info">
        <span>人力行政部</span>
        <span>2023-05-20</span>
      </div>
    </div>
    <div class="info">
      <img
        class="img"
        src="https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E8%AF%A6%E6%83%85_1/u62543.jpg"
        alt=""
        srcset=""
      />
      <div class="info-item" v-for="item in 2" :key="item">
        <span>1 目的</span>
        <p>
          为营造原型杂货铺公司公平公正、积极向上、充满正能量的工作氛围，让员工更好地理解原型杂货铺价值观等文化理念，确保企业文化“知言行”的高度统一，从而形成属于所有原型杂货铺人的共同行为准则，特制定本准则。
        </p>
      </div>
      <div class="down">
        <span>附件：</span>
        <el-link
          href="https://codeload.github.com/JuaryLiu/Vite-architecture-Vue3-project/zip/refs/heads/main"
          type="primary"
          :underline="false"
          >
        <el-icon size="18" class="el-icon--left"><Document /></el-icon>相关附件.doc
          </el-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { Document } from '@element-plus/icons-vue'
import { ref } from 'vue'



</script>

<style lang="scss" scoped>
.main {
  margin-top: 2.75rem;
  font-size: 0.8125rem;
  color: #999;
  .header {
    padding: 0.625rem 1.25rem;
    background: #fff;
    p {
      font-size: 1.125rem;
      color: #333;
    }
    .header-info {
      margin-top: 0.625rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .info {
    padding: 1.25rem;
    background: #fff;
    .img {
      width: 100%;
    }
    .info-item {
      font-size: 0.875rem;
      color: #666;
      margin: 0.9375rem 0;
    }
  }
  .down {
    display: flex;
    align-items: center;
    span {
      margin-right: 0.625rem;
    }
  }
}
</style>