<template>
  <el-container class="login-container">
    <el-main >
      <el-card class="login-card bounceInDown animated jello" >
          <div slot="header" class="el-card-header">
            <h2 class="login-title">{{title}}</h2>
          </div>
          <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm">
              <el-form-item prop="username">
                  <el-input placeholder="请输入账号" prefix-icon="icon-el-icon-name" auto-complete="off" v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input placeholder="请输入密码" type="password" prefix-icon="icon-el-icon-pwd" v-model="ruleForm.password" @keyup.enter.native="login" ></el-input>
              </el-form-item> 
              <el-button type="primary" @click="login">登录</el-button>
          </el-form>
      </el-card>
       <el-button class="show-account" type="text" @click="accountTip">提示帐号信息</el-button>
    </el-main>
  </el-container>
</template>

<script>

import axios from 'axios'
export default {
  data () {
    return {
        title:"系统登录",
        loading:true,
        ruleForm: {
          username:'',
          password:''
        },
       rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 12, message: '账号长度在3-12个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 4, max: 8, message: '密码长度在4-8个字符', trigger: 'blur' }
          ]
        }
    }
  },
   methods: {
      login(){
        var username = this.ruleForm.username;
        var password = this.ruleForm.password;
        console.log('用户名：' + username,'密码：'+ password);

        var url = "https://www.easy-mock.com/mock/5d3a6824eb3d3144306fa0cb/home/login";
        // 发送请求:将数据返回到一个回到函数中
        var that = this;
        // 并且响应成功以后会执行then方法中的回调函数
        axios.get(url).then(function(result) {
          // result是所有的返回回来的数据
          var res = result.data.data,
          len = res.length,
          userName = [],
          passWord = [],
          ses = window.sessionStorage;
          for(var i=0; i<len; i++){
              userName.push(res[i].username);
              passWord.push(res[i].password);
          }
          console.log(userName,passWord);
          if(username == "" && password == ""){
            alert('用户名或者密码不能为空！');
          }
          else if(userName.indexOf(username) === -1){
              alert('账号或者密码错误！');
              console.log('账号或者密码错误！');
          }
          else{
            var index = userName.indexOf(username);
            if(passWord[index] === password){
               alert('登录成功！');
               console.log('登录成功');
               this.$router.push('/index');
            }
             else{
               alert('密码错误！')
               console.log('密码错误！');
            }   
          }    
        }.bind(this)).catch(function (error) {
          console.log("请求失败"+error);
        });

          //  自定义用户名密码登录验证
          //  this.$refs.ruleForm.validate((valid) => {
          //           if (valid) {
          //               if (this.ruleForm.username === 'admin' && this.ruleForm.password === '123456') {
          //                   this.$notify({
          //                       type: 'success',
          //                       message: '欢迎你,' + this.ruleForm.username + '!',
          //                       duration: 3000 
          //                   })
          //                   this.$router.replace('/home')
          //               } else {
          //                   this.$message({
          //                       type: 'error',
          //                       message: '用户名或密码错误',
          //                       showClose: true
          //                   })
          //               }
          //           }
          //           else {
          //               return false
          //           }
          //       })
      },
       accountTip() {
        this.$notify({
          title: '账号：admin',
          dangerouslyUseHTMLString: true,
          message: '<strong>密码：<i>123456</i></strong>',
          type: 'success',
          position: 'bottom-left'
        })
      },
    },
    mounted() {
      this.accountTip()
    }
}
</script>

<style scoped>
.login-container{  
  background:url('../images/login-bg.jpg') center no-repeat; 
  position: absolute;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  }
 .login-card{
    position: relative;
    width: 520px;
    max-width: 100%;
    margin: 7% auto 0 auto;
    padding-bottom:5%;
  }
  .login-title{ 
    text-align: center;
  }
  .el-form{ 
    margin: 2% 10%;
    }
  .el-input{
    width: 100%;
    margin-top: 1%;
  }
  .el-button--primary{
    width: 100%;
    margin-top: 2%;
  }
  .el-form-item__error{
    left: 10% !important;
  }
  .show-account {
      position: absolute;
      left: 15px;
      bottom: 20px;
      color: red;
  }
</style>
