<template>
    <Header title="公告通知" left="true" >
        <el-icon  color="#2d8cf0" size="25"><Search /></el-icon>
    </Header>
    <Schedule :tabList="tabList" :flag="false" :scheduleList="scheduleList"/>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import Schedule from '@views/schedule/index.vue'
import { getNoticeList } from '@api/home.js'
import { onMounted, ref } from 'vue'
const props = defineProps({
    show:Boolean
})
let scheduleList = ref([])
const tabList = ref(['公告通知', '公司新闻', '规则制度','办事指南'])
onMounted(() => {
    getNoticeList().then(res => {
        scheduleList.value =  res.data.data.data
    })
})
</script>

<style lang="scss" scoped>

</style>