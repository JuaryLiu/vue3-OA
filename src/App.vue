<template>
  <RouterView />
  <Navbar v-if="route.meta.isLogin"/>
</template>

<script setup>

import Header from '@components/Header.vue'
import Navbar from '@components/Navbar.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style lang="scss">

</style>