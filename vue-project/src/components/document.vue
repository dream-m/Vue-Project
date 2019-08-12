<template>
    <el-row class="center">
        <el-link href="https://element.eleme.io" :underline="false" target="_blank">文档主页</el-link>
        <el-link href="https://github.com/dream-m/Vue-Project/tree/master/vue-project" :underline="false" target="_blank">Github 地址</el-link>
        <el-link href="https://element.eleme.cn/#/zh-CN/guide/design" :underline="false" target="_blank">文档指南</el-link>
        <el-link href="https://element.eleme.cn/#/zh-CN/component/installation" :underline="false" target="_blank">文档组件</el-link>
    </el-row>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>

<style>
.el-link--inner{
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    margin: 20px;
}
.el-link--inner:hover{
    color: #3a8ee6;
    border-color: #3a8ee6;
    background-color: #ecf5ff;
    outline: none;
}
</style>

