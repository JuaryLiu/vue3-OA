<template>
  <div>
    <video
      src="https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4"
      controls
      ref="videoRef"
      @timeupdate="getVidTime(videoRef)"
    ></video>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
const duration = ref()
const currentTime = ref(0)
const videoRef = ref()
onMounted(() => {
    let time = localStorage.getItem("time")
    if(time) {
        currentTime.value = time
       videoRef.value.currentTime = time
    }
})
const getVidTime =(el) => {
     duration.value = Math.floor(el.duration)
   if( el.currentTime - currentTime.value > 2 && el.currentTime<=el.duration) {
        currentTime.value = Math.floor(el.currentTime)
   } 
   if(el.currentTime === el.duration) {
    localStorage.removeItem("time")
    currentTime.value = 0
   }
}
watch(() => currentTime.value,(newVal) => {
    localStorage.setItem("time",newVal)
})
</script>

<style lang="scss" scoped>
</style>