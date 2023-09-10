<template>
  <Header title="我的用车" left="ture">
    <div class="icon">
      <el-icon class="el-icon" color="#2d8cf0" size="25" @click.stop="add"><Plus /></el-icon>
      <el-icon color="#2d8cf0" size="25"><Search /></el-icon>
    </div>
  </Header>
  <div class="main">
    <div class="item" v-for="item in 4" :key="item" @click="goPath">
      <div class="left">
        <img
          class="img"
          src="https://demo2022.axureshop.com/1697182/images/%E9%80%89%E6%8B%A9%E8%BD%A6%E8%BE%86/u12736.png"
          alt=""
        />
        <div class="info">
          <p>拜访客户</p>
          <span>2021-04-10 10:00 </span>
          <span>公司大楼一号出口</span>
        </div>
      </div>
      <div class="right">鄂A88888</div>
    </div>
  </div>
</template>

<script setup>
import { Plus, Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const add = () => {
   router.push({
         name:"submit",
    params:{
      id:"addCar"
    }
    })
}
const goPath =() => {
  router.push({
    name:"submit",
    params:{
      id:"carInfo"
    }
  })
}
</script>

<style lang="scss" scoped>
.icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  .el-icon {
    margin-right: 0.625rem;
  }
}
.main {
  margin-top: 3.375rem;
  padding: 0.625rem;
  .item {
    padding: 0.625rem;
    height: 5.625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-radius: 0.625rem;
    margin-bottom: 0.625rem;
    .left {
      display: flex;
      align-items: center;
      .img {
        width: 4.375rem;
        height: 3.125rem;
      }
      .info {
        margin-left: 0.625rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 0.8125rem;

        color: #999;
        p {
          font-size: 0.875rem;
          color: #333;
        }
      }
    }
    .right {
      font-size: .8125rem;
      font-weight: 400;
      color: #2d8cf0;
    }
  }
}
</style>