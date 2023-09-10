<template>
    <Header title="我的工资条" left="true"></Header>
    <div class="main">
        <el-card class="card" v-for="item in 2" :key="item" @click="goPath">
            <div class="info">
                <span class="title">薪资</span>
                <span>期次：202303</span>
                <span>2023-03-10  10:00</span>
            </div>
        </el-card>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goPath =() => {
  router.push({
    name:"submit",
    params:{
      id:"wagesInfo"
    }
  })
}
</script>

<style lang="scss" scoped>
.main {
    margin-top: 2.75rem;
    padding: .625rem;
    &:deep(.el-card__body) {
        padding: .625rem;
    }
    .card {
        margin-bottom: .625rem;
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: rgba(0, 0, 0, 0.427450980392157);
        font-size: .8125rem;
        .title {
            color: #333;
            font-size: .9375rem;
        }
    }
}
</style>