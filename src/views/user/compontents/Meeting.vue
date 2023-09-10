<template>
   <Header title="我的会议" left="ture">
        <div class="icon">
            <el-icon  @click.stop="add" class="el-icon" color="#2d8cf0" size="25"><Plus /></el-icon>
            <el-icon  color="#2d8cf0" size="25"><Search /></el-icon>
        </div>
   </Header>
   <div class="main">
    <div class="item" v-for="item in 4" :key="item" @click="goPath">
        <img class="img" src="https://demo2022.axureshop.com/1697182/images/%E9%80%89%E6%8B%A9%E4%BC%9A%E8%AE%AE%E5%AE%A4/u11364.jpg" alt="">
        <div class="info">
            <p>考勤制度需求变更确认会</p>
            <span>2021-03-02  14:00-18:00</span>
            <span>401会议室</span>
        </div>
    </div>
   </div>
</template>

<script setup>
import { Plus,Search} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const add = () => {
    router.push({
         name:"submit",
    params:{
      id:"addMeeting"
    }
    })
}
const goPath =() => {
  router.push({
    name:"submit",
    params:{
      id:"meetingInfo"
    },
  })
}
</script>

<style lang="scss" scoped>
.icon {
    display: flex;
    align-items: center;
    .el-icon {
        margin-right: .625rem;
    }
}
.main {
    margin-top: 3.375rem;
    padding: .625rem;
    .item {
        padding: .625rem;
        height: 5.625rem;
        display: flex;
        align-items: center;
        background: #fff;
        border-radius: .625rem;
        margin-bottom: .625rem;
        .img {
            width: 4.375rem;
            height: 3.125rem;
        }
        .info {
            margin-left: .625rem;
            display: flex;
            flex-direction:column;
            justify-content: space-around;
            font-size: .8125rem;
            
            color: #999;
            p {
                font-size: .875rem;
                color: #333;
            }
        }
    }
}
</style>