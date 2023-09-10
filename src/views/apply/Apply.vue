<template>
    <Header title="我的申请" left="true">
       <el-icon  color="#2d8cf0" size="25"><Search /></el-icon>
    </Header>
    <Schedule :tabList="tabList" :flag="true"  :scheduleList="scheduleList"/>
</template>

<script setup>
import Schedule from '@views/schedule/index.vue'
import { Search} from '@element-plus/icons-vue'
import { getMyScheduleList } from '@api/home.js'
import { onMounted, ref } from 'vue'
let scheduleList = ref([])
const tabList = ref(['代办', '已办', '完成','草稿'])
onMounted(() => {
  getMyScheduleList().then((res) => {
    scheduleList.value =  res.data.data.data
  })
})
</script>

<style lang="scss" scoped>

</style>