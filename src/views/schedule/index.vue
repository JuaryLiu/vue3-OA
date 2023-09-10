<template>
  <div class="mian ">
    <ul>
      <li
        v-for="(item, index) in tabList"
        :key="index"
        @click="handleClick(index)"
        :class="currentId === index ? 'active' : ''"
        >{{ item }}</li
      >
    </ul>
    <div class="items" v-if="flag">
      <el-card style="margin-bottom: 10px;" v-for="item in data" :key="item.id">
        <div class="card">
          <p class="title">{{item.title}}</p>
          <p>{{item.info}}</p>
          <p>{{item.time}}</p>
          <el-tag>{{item.tag}}</el-tag>
         <div :class="item.type?'tag warning':'tag'" v-if="item.effect">
            {{item.effect}}
         </div>
        </div>
      </el-card>
    </div>

    <div class="notice" v-else>
      <el-card class="card" v-for="item in data" :key="item.id">
        <div class="notice-item">
          <img v-if="item.img" :src="item.img">
            <div class="notice-info ">
              <span>{{item.title}}</span>
              <span class="time">{{item.time}}</span>
            </div>
          </div>
      </el-card>
    </div>
    <div class="more">
      --没有更多了--
    </div>
  </div>
</template>

<script setup>
import { ref, watch, } from 'vue'



const currentId = ref(0)
const handleClick = (index) => {
  currentId.value = index
}
const props = defineProps({
    tabList:Array,
    scheduleList:Array,
    flag:Boolean
})

let data = ref([])

watch(() => props.scheduleList,(newVal) => {
    data.value = newVal[currentId.value]
})
watch(() => currentId.value,(newVal) => {
    data.value =  props.scheduleList[newVal]  
})
</script>

<style lang="scss" scoped>
.more {
  margin: .625rem 0;
  text-align: center;
  font-size: .75rem;
  color: #7f7f7f;
}
.notice {
  padding: 0.625rem;
  .card {
  margin-bottom: .625rem;
  }
  .notice-item {
    display: flex;
    .notice-info {
      margin-left: .625rem;
      display: flex;
      flex-direction:column;
      justify-content: space-around;
      font-size: .875rem;
      color: #333;
      .time {
        font-size: .8125rem;
        color: rgba(0, 0, 0, 0.427450980392157);
      }
    }
  }
}
.warning {
    background: #E6A23C !important;
}
.tag {
    position: absolute;
    top: -20px !important;
    right: 0;
    width: 2.125rem;
    height: 2.125rem;
    line-height: 2.125rem;
    text-align: center;
    background-color: #2D8CF0;
    border: none;
    border-right: 0px;
    border-radius: 150px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    color: #fff;
}
.active {
  color: #2d8cf0;
  font-weight: 700;
  border-bottom: 2px solid #2d8cf0;
  border-radius: 0.0625rem;
}
.mian {
    margin-top: 2.75rem;
  ul {
    padding: 0 1.25rem;
    display: flex;
    justify-content: space-around;
    height: 2.8125rem;
    align-items: center;
    font-size: 0.875rem;
    color: #727272;
    background: #fff;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      margin-right: 0.625rem;
      height: 100%;
    }
  }
}
.items {
  padding: 0.625rem;
  .title {
    font-size: .9375rem;
    color: #333;
    font-weight: 700;
  }
}
.card {
  position: relative;
  font-size: 13px;
  color: #999;
  .tag {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>