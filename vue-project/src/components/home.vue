<template>
    <el-container>
        <!-- 侧边菜单 -->
        <el-aside>
            <el-row>
                 <el-col>
                      <el-menu default-active="this.$route.path" class="el-menu-vertical-demo" router  @open="handleOpen"  @close="handleClose" background-color="#304156"  text-color="#fff" active-text-color="#ffd04b">
                        <template v-for="item in items">
                            <template v-if="item.subs">
                                <el-submenu :key="item.index" :index="item.index+''">
                                    <template slot="title">
                                        <i :class="item.icon"></i>
                                        <span >{{ item.title }}</span>
                                    </template>
                                    <template v-for="(subItem,index) in item.subs" @:key="index">
                                        <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                        </el-submenu>
                                        <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                            {{ subItem.title }}
                                        </el-menu-item>
                                    </template>
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="item.index" :key="item.index">
                                    <i :class="item.icon"></i>
                                    <span slot="title">{{ item.title }}</span>
                                </el-menu-item>
                         </template>
                </template>
        </el-menu> 
                </el-col>
            </el-row>
        </el-aside>
        <el-container class="el-right">
            <el-header>
                 <div class="h-left">
                        <!-- 面包屑功能 -->
                        <i class="el-icon-menu menu-r"></i>
                        <el-breadcrumb separator="/" class="crumbs">
                             <el-breadcrumb-item
                                v-for="(bread,index) in breadList"
                                :key="index"
                                :to="{ path: bread.path }"
                            >{{bread.name}}</el-breadcrumb-item>
                        </el-breadcrumb>
                 </div>
                 <div class="h-right">
                     <div class="user-avatar" >
                         <el-dropdown trigger="click" class="dropdown"> 
                            <span class="el-dropdown-link">
                                <img src="../assets/1.jpg" alt="">Dream<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" class="dropdown-list">
                                <el-dropdown-item><router-link  :to="{path:'/info'}" class="info">个人中心</router-link></el-dropdown-item>
                                <el-dropdown-item><a href="https://github.com/dream-m/Vue-Project/tree/master/vue-project" class="info" target="_blank">项目地址</a></el-dropdown-item>
                                <el-dropdown-item><router-link :to="{path:'/'}"  class="info">退出登录</router-link></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                     </div>
                 </div>
            </el-header>
            <el-main class="main-bg">
                <!-- 主要内容 -->
                <router-view></router-view>
            </el-main>
        </el-container>
</el-container>
</template>

<script>
export default {
    data(){
        return{
              items: [
                {index:'/index',title:'主页',icon:'el-icon-menu'},
                {index:'/document',title:'文档',icon:'el-icon-document'},
                {index:'/brief',title:'简述',icon:'el-icon-edit'},
                {index:'/table',title:'表格',icon:'el-icon-date'},
                { icon: 'el-icon-edit-outline', title: '组件',
                     subs: [  
                           {index:'/package/upload',title:'Upload 上传'},
                           {index:'/package/form',title:'Form 表单'},
                           {index:'/package/tabs',title:'Tabs 标签'}
                           ]
                },
                { index:'/error', icon: 'el-icon-folder-delete', title:'404页面'}
                ],
             breadList: [] // 路由集合 
        }
    },
    watch: {
        $route() {
        this.getBreadcrumb();
        }
    },
     methods: {
        isHome(route) {
            return route.name === "index";
        },
        getBreadcrumb() {
            let matched = this.$route.matched;
            //如果不是首页
            if (!this.isHome(matched[0])) {
                matched = [{ path: "/index", meta: { title: "首页" } }].concat(matched);
            }
            this.breadList = matched;
        },
        quit(){

            this.$router.push('/login'); 
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
     created() {
        this.getBreadcrumb();
    },
 }
</script>

<style scoped>
 .el-header {
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    color: #333;
    height: 55px!important;
    line-height: 55px;
    display: flex;
    justify-content: space-between;

  }
  .el-aside{
    position: fixed;
    width: 200px!important;
    height: 100%;
    min-height: 200px;
    background-color: #304156;
  }
  .el-right{
      margin-left: 200px;
  }
  .el-main {
    color: #333;
  }
  .el-menu{
      border: 0;
  }
  .h-left {
    display: flex;
    align-items: center;
  }
  .crumbs{    
    color: #97a8be;
  }
  .h-right{
      padding-right: 10px;
  }
  .user-avatar{
      cursor: pointer;
  }
  .dropdown{
    outline: none;
    display: block;
  }
  .dropdown-list{
    top:42px !important;
  }
  .dropdown img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;  
    margin-right: 8px;
  }
  .main-bg{
    padding: 32px;
    background-color: #f0f2f5;
    position: relative;
  }
  .info{
      text-decoration: none;
      color: #606266;
  }
  
  /*图标样式*/
  .menu-r{
      color: #97a8be;
      font-size: 20px;
      margin:2px 5px 0 0;
  }
</style>
