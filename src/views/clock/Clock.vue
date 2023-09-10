<template>
  <Header left="true" title="首页"></Header>
  <div class="main">
    <el-card class="header">
      <div class="info">
        <el-avatar
          size="large"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <div class="user-info">
          <p class="name">JuaryLiu</p>
          <p>产品设计部</p>
        </div>
      </div>
    </el-card>
    <el-card>
      <div class="time">
        <div class="work" v-for="item in 2" :key="item">
          <span class="title">上班 08:30</span>
          <span>未打卡</span>
        </div>
      </div>
      <div class="clock" @click="goClock">
        <p>上班打卡</p>
        <p>{{ time }}</p>
      </div>
      <p class="tip">您已进入打卡范围</p>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { parseTime } from '@utils/time.js'
import {getTimeList,putTime} from '@api/home.js'
const time = ref()
const flag = ref(false)
let timer
onMounted(() => {
  getNowTime()
  clearInterval(timer)
  timer = setInterval(() => {
    getNowTime()
  }, 1000*60)
  
  getTimeList().then(res => {
    console.log(res);
  })


})

const goClock = () => {
    // flag.value = true
  putTime({upTime:time.value,downTime:flag.value}).then(res => {
    console.log(res);
  })

}
const getNowTime = () => {
  let date = new Date()
  time.value = parseTime(date, '{h}:{i}')
}
onUnmounted(() => {
  
  clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 0.625rem;
}
.tip {
  text-align: center;
  text-align: center;
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 1.875rem;
}
.time {
  display: flex;
  justify-content: space-between;
}
.clock {
  margin: 5rem auto;
  margin-bottom: 1.25rem;
  width: 11.25rem;
  height: 11.25rem;
  background: #2d8cf0;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  color: #fff;
}
.work {
  width: 49%;
  padding: 0.625rem;
  display: flex;
  height: 4.875rem;
  flex-direction: column;
  justify-content: space-around;
  background: rgba(244, 244, 244, 1);
  color: rgba(102, 102, 102, 0.427450980392157);
  font-size: 0.8125rem;
  border-radius: 0.3125rem;
  font-weight: 700;
  .title {
    font-size: 15px;
    color: #333;
  }
}
.main {
  margin-top: 2.75rem;
  padding: 0.625rem;
  .info {
    display: flex;
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
    }
  }
}
</style>