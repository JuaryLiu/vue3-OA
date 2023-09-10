<template>
  <From :data="data" />
  
</template>

<script setup>
import From from '@components/From.vue'
import {getSubmitList} from '@api/home.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const data = ref({})

onMounted(() => { // 更加动态路由穿过来的不同信息，来获取不同页面的数据
  const path = route.params.id
  getSubmitList(path).then((res) => {
    data.value = res.data.data.data
  })
  
})
</script>

<style lang="scss" scoped>
</style>