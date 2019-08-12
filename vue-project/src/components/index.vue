<template>
  <div>
    <el-row :gutter="20">
      
      <el-col :span="6">   
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
      </el-col>
      <el-col :span="18">
        <el-row :gutter="20">
          <el-col :span="8">
              <el-card class="box-card" shadow="hover">
                 <div class="box-info">
                   <span class="el-icon-user-solid"></span>
                 <p class="p-mar">
                   <span>New Visits</span>
                   <span>1064,05</span>
                 </p>
                 </div>
              </el-card>
          </el-col>
          <el-col :span="8">
              <el-card class="box-card" shadow="hover">
                 <div class="box-info">
                   <span class="el-icon-s-comment"></span>
                 <p class="p-mar">
                   <span>New Visits</span>
                   <span>364,050</span>
                 </p>
                 </div>
              </el-card>
          </el-col>
          <el-col :span="8">
              <el-card class="box-card" shadow="hover">
                 <div class="box-info">
                   <span class="el-icon-s-goods"></span>
                 <p class="p-mar">
                   <span>New Visits</span>
                   <span>2264,05</span>
                 </p>
                 </div>
              </el-card>
          </el-col>    
        </el-row>
        <el-row>
           <el-col :span="24">
              <el-card class="box-card todolist" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>TodoList</span>
                  </div>
                   <el-row type="flex" justify="center"  >
                      <el-col :span="6" class="mar">
                          <el-date-picker v-model="newDate" type="date" @change="dateChange" value-format="yyyy-MM-dd" format="yyyy-MM-dd"></el-date-picker>
                      </el-col>
                      <el-col :span="16" class="mar">
                          <el-input placeholder="事项" v-model="newItem" clearable></el-input>
                      </el-col>
                      <el-col :span="6" class="mar">
                          <el-input v-model="newDegree" placeholder="100">
                          <template slot="append">%</template>
                          </el-input>
                      </el-col>
                      <el-col :span="2" class="mar">
                          <el-button type="primary" @click="sumbit">确定</el-button>
                      </el-col>
                </el-row>   
                <el-row type="flex" justify="center" >
                <el-col class="item-list">
                  <ul>
                    <li v-for="(item, index) in items.slice(0, 5)" :key="item.lable">
                      <p>{{ index+1 +'、' }} {{ item.date }} {{ item.lable }} {{ item.degree +'%' }}</p> 
                      <i class="el-icon-error icon2" @click="deleteOne(index)"></i>      
                    </li>
                  </ul>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div id="chart1"></div>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content" id="chart2"></div></el-col>
      <el-col :span="8"><div class="grid-content" id="chart3"></div></el-col>
      <el-col :span="8"><div class="grid-content" id="chart4"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      items:store.fetch(),
      newDate:new Date,
      newItem:"",
      newDegree:""
    }
  },
   watch:{          
       items:{
          handler:function(items){
          store.save(items)   
       },
         deep:true
       }
   },
   methods:{
     dateChange(val) {
          this.newDate = val;
     },
    sumbit(){
      this.items.push({
        lable:this.newItem,
        date:this.newDate,
        degree:this.newDegree,
      })
      this.newItem="",
      this.newDegree=""
    }, 
    deleteAll(){
      localStorage.clear();
       this.items = [];
    },
    deleteOne(i){
       this.items.splice(i, 1);
          localStorage.havedone = JSON.stringify({
          now: this.items
        });
    }
  },
  mounted() {
    this.$chart.line1('chart1');
    this.$chart.line2('chart2');
    this.$chart.line3('chart3');
    this.$chart.line4('chart4');
  }
}
</script>

<style scoped>
  h4, p,ul,li{ margin: 0 ; padding: 0;}
  #chart1 {
    width: 94%;
    height: 400px;
    background: rgb(255, 255, 255);
    padding:3%;
    margin-bottom: 32px;
  }
   #chart2 {
    width: 94%;
    height: 300px;
    background: rgb(255, 255, 255);
    padding:3%;
    margin-bottom: 32px;
  }
  #chart3 {
    width: 94%;
    height: 300px;
    background: rgb(255, 255, 255);
    padding:3%;
    margin-bottom: 32px;
  }
  #chart4 {
    width: 94%;
    height: 300px;
    background: rgb(255, 255, 255);
    padding:3%;
    margin-bottom: 32px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
     background: rgb(255, 255, 255);
    padding:3%;
    margin-bottom: 32px;
  }
  .row-bg {
    padding: 10px 0;
  }
  .info{ 
    height: 250px;
  }
  .el-card{
    border: 0
  }
  .avatar{
    margin: 0px auto 12px auto;
    display: block
  }
  .name{
    font-size: 18px;
    line-height: 30px;
    font-weight: bold
  }
  .identity{
    font-size: 14px;
    color: #777;
  }
  .el-icon-user-solid{
    font-size: 60px;
    padding:2px 5px;
    color: #40c9c6;
    margin-top: 8px
  }
  .el-icon-user-solid:hover{
    color: #fff;
    background-color: #40c9c6;
    border-radius: 8px;
    padding:2px 5px;
  }
  .el-icon-s-comment{
    font-size: 60px;
    padding:2px 5px;
    color: #409eff;
    margin-top: 8px
  }
 .el-icon-s-comment:hover{
    color: #fff;
    background-color: #409eff;
    border-radius: 8px;
    padding:2px 5px;
  }
  .el-icon-s-goods{
    font-size: 60px;
    padding:2px 5px;
    color: #f25e43;
    margin-top: 8px
  }
 .el-icon-s-goods:hover{
    color: #fff;
    background-color: #f25e43;
    border-radius: 8px;
    padding:2px 5px;
  }
  .box-info{
    display: flex;
    justify-content:space-between;
  }
  .box-info p span:first-child {
    line-height: 24px;
    color: rgba(0,0,0,.45);
    font-size: 16px;
    font-weight: bold;
    display: block;
    }
    .box-info p span:nth-child(2){
      font-size: 20px;
      color: #666;
      line-height: 24px;
    }
   .finished {
      text-decoration: line-through;
    }
  .el-row--flex{ 
       margin: 0!important;
    }
  .title{ 
    text-align: center;
    margin-bottom: 40px;
    }
  .finished{ 
    text-decoration: underline; 
    color: #e63d3c
    }
  .list{ 
    display: flex; 
    width: 54%;
    margin: 25px auto 0 auto;
    justify-content: space-around;
    }
  .list-percentage{
    line-height: normal;
    display: inline-table;
    width: 18%;
    border-collapse: separate;
  }
  .item-list{
    margin:14px 0 0 0;
    overflow: hidden;
  }
  .item-list h4{
    padding: 15px 10px 15px 10px;
    color: #48576a;
    float: left;
  }
  .item-list ul{ 
    padding:0;
  }
  .item-list li{
    padding: 5px 10px ;
    color: #1f2d3d;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
  .icon1{
    float: right;
    color: #8492a6;
    margin-top: 15px;
    font-size: 24px;
    vertical-align: middle;
    padding: 0 8px;
    cursor: pointer;
  }
  .el-icon-delete:hover {
    color: #606266;
  }
  .el-icon-error:hover{
    color: #606266;
  }
  .icon2{
    color: #8492a6;
    font-size: 1.3em;
    vertical-align: middle;
    cursor: pointer;
  }
  .el-col-12{ 
    width: 51%!important;
  }
  .item-clear{ 
    display: flex;
    border-bottom: 1px solid #d1dbe5;
    clear: both;
    justify-content: space-between;
  }
  .mar{
    margin:0px 10px 0 10px;
  }
  .p-mar{
    margin-top: 15px
  }
  .todolist{
    height: 297px;
    background-color: #fff;
  }
</style>