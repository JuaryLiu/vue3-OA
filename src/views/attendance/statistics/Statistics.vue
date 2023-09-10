<template>
  <Header left="true" title="2023年09月考勤统计"></Header>
  <div class="main">
    <div>
      <div class="item" v-for="item in dataList" :key="item.id">
        <span class="title">{{item.title}}</span>
        <span>{{item.time}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const dataList =[
    {
        id:0,
        title:"加班（时）",
        time:"0"
    },
    {
        id:1,
        title:"迟到（次）",
        time:"1"
    },
    {
        id:2,
        title:"旷工（天）",
        time:"0"
    },
    {
        id:3,
        title:"事假（时））",
        time:"0"
    },
    {
        id:2,
        title:"病假（时）",
        time:"0"
    },
    {
        id:2,
        title:"女生假（天）",
        time:"0"
    },
    {
        id:2,
        title:"年假（已用天数/总天数）",
        time:"0.5/5"
    }
]
const route = useRoute()
</script>

<style lang="scss" scoped>
.main {
    margin-top: 3.375rem;
    background: #fff;
    padding: 1.25rem;
  .item {
    display: flex;
    font-size: 0.875rem;
    margin-bottom:.625rem ;
    padding-bottom:.625rem;
    border-bottom: 1px solid rgba(244,244,244,1);
    color: rgba(102, 102, 102, 0.898039215686275);
    &:last-child {
        border: none;
    }
    .title {
      width: 5.25rem;
      margin-right: 3.125rem;
      color: rgba(51, 51, 51, 0.898039215686275);
    }
  }
}
</style>