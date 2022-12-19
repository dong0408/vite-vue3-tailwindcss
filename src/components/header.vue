<!-- 头部组件 -->
<template>
 <div>
  <div class="header">
    <div class="left">
      <div class="logo">FUNCODE</div>
      <div class="blog">博客</div>
      <div class="blog">下载</div>
      <div class="blog">学习</div>
    </div>
    <div class="center">
      <el-input
      v-model="input"
      class="w-50 m-2"
      placeholder="搜索FUNCODE"
      :suffix-icon="Search"
    />
    </div>
    <div class="right">
      <div class="login">登录/注册</div>
      <div class="login">会员中心</div>
      <div class="login">足迹</div>
      <div class="login">动态</div>
      <div class="login">创作中心</div>
    </div>
  </div>
 </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref} from 'vue'
import { Search } from '@element-plus/icons-vue'

const input=ref('')
</script>
<style lang='less' scoped>
.header{
  display: flex;
}
.right{
  display: flex;
}  
.left{
  display: flex;
}
.center{
  display: flex;
}
</style>