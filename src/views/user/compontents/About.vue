<template>
<Header title="关于" left="true"></Header>
    <div class="mian">
        <el-card>
            <div class="info"> 
                <div class="logo">OA</div>
                <span> 企业OA</span>
                <span class="version">V1.0</span>
            </div>
        </el-card>
         <el-card>
            <div class="current">
                <span>去评论</span>
                <el-icon size="16" color="#999"><ArrowRightBold /></el-icon>
            </div>
        </el-card>
        <div class="text">《企业OA用户协议》</div>
    </div>
</template>

<script setup>
import { ArrowRightBold } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.current {
    font-size: .9375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mian {
    margin-top: 2.75rem;
     &:deep(.el-card__body) {
        padding: .625rem;
    }
    .info {
        padding: 1.25rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: #333;
        font-size: 1.125rem;
        .logo {
            width: 4.375rem;
            height: 4.375rem;
            background: #2D8CF0;
            border-radius: .625rem;
            line-height: 4.375rem;
            text-align: center;
            color: #fff;
            font-size: 1.75rem;
        }
        .version {
            font-size: .9375rem;
            color: #999;
        }
    }
    .text {
        position: absolute;
        bottom: 3.125rem;
        left: 50%;
        transform: translateX(-50%);
        color: #2D8CF0;
        font-size: .75rem;
    }
}
</style>