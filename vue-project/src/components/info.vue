<template>
    <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>About me</span>
          </div>
         <el-avatar src="/static/img/1.f0506e2.jpg" :size="70" class="avatar"></el-avatar>
         <span class="center name">王梦梦</span>
         <span class="center identity">Admin</span>
          <el-divider></el-divider>
          <span>HTML</span>
          <el-progress :percentage="90"></el-progress>
          <span>CSS</span>
          <el-progress :percentage="80" color="#64d572"></el-progress>
          <span>JavaScript</span>
          <el-progress :percentage="55" color="#e6a23c"></el-progress>
          <span>VUE</span>
          <el-progress :percentage="40" color="#f56c6c"></el-progress>
        </el-card> 
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box-card{
    width: 40%;
    display: block;
    margin: 0 auto;
}
</style>
