<template>
  <Header title="我的"> </Header>
  <div class="main">
    <el-card class="el-card">
      <div class="header" @click="getInfo">
        <div>
          <el-avatar
            size="large"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
        <div class="user-info">
          <div>
            <span class="name">JuaryLiu</span>
            <span>产品经理</span>
          </div>
          <div class="department">原型杂货铺－研发中心－产品设计部</div>
        </div>
      </div>
    </el-card>
    <div class="mian">
      <el-card v-for="item in data" :key="item.id">
        <div class="mian-item" v-for="i in item.list" :key="i.id" @click="goPath(i)">
          <img class="img" :src="i.url" alt="" srcset="" />
          <div class="info">
            <span class="title">{{ i.title }}</span>
            <div v-if="i.tag" class="tag"> {{i.tag}} </div>
          </div>
          <el-icon size="16" color="#999"><ArrowRightBold /></el-icon>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import Header from '@components/Header.vue'
import { ArrowRightBold } from '@element-plus/icons-vue'
import { getUserList } from '@api/users.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
let data = ref([])
onMounted(() => {
  getUserList().then((res) => {
    data.value = res.data.data.data
  })
})
const router = useRouter()
const goPath = (item) => {
  router.push(item.path)
}
const getInfo =() => {
   router.push({
    name:"submit",
    params:{
      id:"userInfo"
    }
  })
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 0.625rem;
}
.main {
  margin-top: 2.75rem;
  height: 100vh;
}
.header {
  display: flex;
  align-items: center;
  .user-info {
    margin-left: 0.625rem;
    font-size: 0.8125rem;
    color: rgba(102, 102, 102, 0.427450980392157);
    .name {
      margin-right: 0.625rem;
      font-size: 1rem;
      color: #333;
      font-weight: 700;
    }
    .department {
      margin-top: 0.3125rem;
    }
  }
}
.mian {
  font-size: 15px;
  color: #333;
  padding: 10px;
  padding-bottom: 5rem;
  .mian-item {
    height: 2.8125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(242, 242, 242, 1);
    margin-bottom: 0.625rem;
    &:last-child {
      border-bottom: none;
    }
    .info {
      margin-left: 0.625rem;
      flex: 1;
      display: flex;
      align-items: center;
      .tag {
        margin-left: .3125rem;
        width: .9375rem;
        height: .9375rem;
        line-height: .9375rem;
        text-align: center;
        background: #ff0000;
        color: #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>