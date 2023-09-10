<template>
<!-- 文件上传的封装 -->
    <el-upload
      class="avatar-uploader"
      :action="action"
      :show-file-list="false"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
      :on-error="handleError"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
</template>

<script  setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
 // 这里我没有进行特别的处理，有需求的话可以进行适当的处理
const imageUrl = ref('')
const action = "http://localhost:8080"
//上传成功回调，
const handleSuccess = (response, uploadFile) => { 
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
}


const beforeUpload = (rawFile) => { // 上传之前的回调，可以限制上传文件的类型和大小
console.log(rawFile); //上传文件的信息
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
const handleError = (error) => {
  console.log(error);
}
</script>

<style lang="scss" scoped>
.avatar-uploader .avatar {
  width: 5rem;
  height: 5rem;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 5rem;
  height: 5rem;
  text-align: center;
}
</style>
