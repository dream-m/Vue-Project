<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
     <el-table-column
      type="index"
      label="序号"
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      sortable
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="号码"
      align="center"
      width="200">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter"
      align="center">
    </el-table-column>
     <el-table-column
      prop="title"
      label="标题" 
      align="left">
    </el-table-column>
  </el-table>
</template>


<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2019-08-02',
          name: 'Jeffrey',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1518 弄',
          title:'Lrnp Nlrwof Trivq Kclfk Iebir Prhxcq'
        }, 
        {
          date: '2019-08-04',
          name: 'George',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1517 弄',
          title:'Dxufvekhq Okmmg Jmrl Oaomd Uakftqtft Iyqyuns Lbjxdyf Kzgewih'
        }, 
        {
          date: '2019-08-01',
          name: 'Robert',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1519 弄',
          title:'Wdwli Ykhncc Duh Mobeucqxhy Jfcjulehuo Rjw Ewrl Tcuivfjg'
        }, 
        {
          date: '2019-08-03',
          name: 'Carol',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1516 弄',
          title:'Focj Edmxt Wskx Gmptztr Bxgpk Ipjz Oibwi Krpbdrcqk Pbqhqzjc'
        },
        {
          date: '2019-08-13',
          name: 'Susan',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1516 弄',
          title:'Xeriggsh Hvowsrsg Urndu Pztfq Kofsns'
        },
         {
          date: '2019-08-10',
          name: 'Steven',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1517 弄',
          title:'Wmqbnw Zturvk Fociqx Apno Cgtijej Dckoxuo'
        },
         {
          date: '2019-08-06',
          name: 'Brian',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1516 弄',
          title:'Tguk Jksaydd Xnnsoz Msmarshlvm Mwipehsm Ggobxc Ojqjqrbn'
        },
         {
          date: '2019-08-08',
          name: 'Kimberly',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1518 弄',
          title:'Gqvltwwd Quqlxqoxcr Ffqdqihrc Xckglsf Luxhtyl Wjyhudpe Qgofbw'
        },
         {
          date: '2019-08-02',
          name: 'Kenneth',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1516 弄',
          title:'Xshgqyv Eopkicos Qogxxsfu Wxeljut Jpkjty Hkbyblcqfw Cvvvrj'
        },
         {
          date: '2019-08-07',
          name: 'Laura',
          phone:'13013013012',
          address: '上海市普陀区金沙江路 1516 弄',
          title:'Gyqyensr Lacgtvgaw Luionwjk Eygzrpjz Ceoedyili Odlu Xunefn Bowwxg'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>

<style>
</style>

