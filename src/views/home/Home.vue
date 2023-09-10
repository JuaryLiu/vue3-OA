<template>
  <Header title="首页">
    <el-icon color="#2d8cf0" @click.stop="goIcon" size="25"><FullScreen /></el-icon>
  </Header>
  <img
    class="bg-img"
    src="https://demo2022.axureshop.com/1697182/images/%E9%A6%96%E9%A1%B5_1/u62309.png"
    alt=""
  />
  <div class="home">
    <div class="header">
      <span>你好，刘艳玲，祝你开心每一天!</span>
    </div>
    <div class="content">
      <!-- 打卡时间信息组件 -->
      <Time :list="homeList.timeList" />
      <!-- 首页打卡等功能组件 -->
      <Options />


      <!-- 通知栏组件 -->
      <Notice :data="homeList.meetingList" path="meeting" title="会议通知">
        <el-icon color="#2d8cf0" size="30"><Flag /></el-icon>
      </Notice>

      <Notice :data="homeList.useCarList" path="car" title="用车通知">
        <el-icon color="#2d8cf0" size="30"><Van /></el-icon>
      </Notice>

      <Notice :data="homeList.noticeList" path="notice" title="公共通知">
        <el-icon color="#2d8cf0" size="30"><BellFilled /></el-icon>
      </Notice>
    </div>
  </div>
</template>

<script setup>
import {
  Bell,
  CreditCard,
  Flag,
  ArrowRightBold,
  BellFilled,
  Van,
  FullScreen
} from '@element-plus/icons-vue'
import { getHomeList } from '@api/home.js'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Time from '@views/home/components/time.vue'
import Notice from '@views/home/components/notice.vue'
import Options from '@views/home/components/Options.vue'



let homeList = reactive({
  meetingList: [],
  useCarList: [],
  noticeList: [],
  timeList: []
})
const goIcon = () => {
  console.log(111);
}

onMounted(() => {
  // 获取首页的基本信息
  getHomeList().then((res) => {
    if (res.data.code === 200) {
      let data = res.data.data.data
      homeList.meetingList = data.meetingList // 会议信息
      homeList.useCarList = data.useCarList   // 车辆信息
      homeList.noticeList = data.noticeList   // 通知信息

      // 时间信息 ，为了图方便这里就用了一个死数据的接口
      homeList.timeList = data.timeList
    }
  })
})

</script>

<style lang="scss" scoped>
.bg-img {
  margin-top: 2.75rem;
  width: 100%;
  height: 11.875rem;
}
.home {
  position: absolute;
  top: 3.4375rem;
  left: 0;
  padding: 0.625rem;
  width: 100%;

  .header {
    margin-bottom: 0.625rem;
    color: #fff;
    text-align: left;
    font-size: 1.125rem;
    position: relative;
  }
}
.content {
  padding-top: 0;
  padding-bottom: 4.375rem; 
}
</style>