<template>
  <div id="app">
    <!--父组件向子组件传递参数-->
    <nav-vue v-bind:nav_lis="nav_lis"></nav-vue>
    <el-input></el-input>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <!--<div class="clear"></div>-->
    <div class="content">
      <ul class="cnav">
        <li><a href="/#/">home</a></li>
        <li><a href="/#/order">order</a></li>
        <li><a href="/#/order">order</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import orderVue from './components/order'
// import Nav from './components/nav'

import YearTable from 'element-ui/packages/date-picker/src/basic/year-table'
export default {
  name: 'App',
  components: {YearTable},
  // 注册局部组件
  // components: {
  //   navVue: Nav,
  //   orderVue
  // },
  data () {
    return {
      nav_lis: [
        '游戏',
        '新闻',
        '关于',
        '客服中心',
        '联系投资者'
      ]
    }
  }
}
</script>

<style>
  .content{
    position:fixed;
    padding-top: 20px;
    top: 58px;
    left: 50px;
    font-size: 20px;
    font-family: "Microsoft YaHei UI";
  }
  .cnav{
    width: 250px;
    list-style: none;
    background: cadetblue;
    text-align: center;
  }
  .cnav li{
    height: 49px;
    line-height: 49px;
    border-bottom: cornflowerblue 1px solid;
  }
  .cnav li a{
    display: block;
    text-decoration: none;
  }
  .cnav li a:hover{
    background: #8f6aff;
    color: white;
  }
</style>
