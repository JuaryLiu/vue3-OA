<template>
  <Header :input="input">
    <el-input v-model="input" placeholder="搜索代办、应用、会议" clearable />
  </Header>
  <Notice :show="true" />
</template>

<script setup>
import Header from '@views/search/Header.vue'
import Notice from '@views/user/compontents/Notice.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const input = ref('')
onMounted(() => {
  input.value = route.params.id
})
</script>

<style lang="scss" scoped>
</style>