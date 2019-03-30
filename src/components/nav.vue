<template>
  <div class="head">
    <div class="top center">
      <div class="logo fl">
        <img src="static/boya/logo.png" alt="logo">
      </div>
      <div class="navTop">
        <ul>
          <li class="fl"><a href="#" class="home">首页</a></li>
          <li class="fl" v-for="(n,index) in nav_lis" :key="index"><a href="#">{{n}}</a></li>
          <!--<li class="fl"><a href="#">博雅新闻</a></li>-->
          <!--<li class="fl"><a href="#">关于我们</a></li>-->
          <!--<li class="fl"><a href="#">客服中心</a></li>-->
          <!--<li class="fl"><a href="#">联系投资者</a></li>-->
        </ul>
      </div>
      <div class="joinUs">
        <a class="fr" href="#">
          <img src="static/boya/jrwm.png" alt="加入我们">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      navLis: [
        '博雅游戏',
        '博雅新闻',
        '关于我们',
        '客服中心',
        '联系投资者'
      ]
    }
  },
  // 接收父组件传递的值
  props: ['nav_lis']
}
</script>

<style scoped>
  .head {
    height: 58px;
    line-height: 58px;
    background: #191D3A;
  }

  .logo {
    height: 58px;
    margin-right: 40px;
  }

  .top {
    width: 1000px;
  }

  .head .home {
    color: white;
    background: #252947;
  }

  .head ul {
    padding-left: 40px;
    /*去掉列表样式*/
    list-style: none;
  }

  .head li {
    width: 100px;
    text-align: center;
    border-right: 1px solid #252947;
  }

  .head a {
    /*a转化为块级元素*/
    display: block;
    color: #818496;
    /*去除超链接下划线*/
    text-decoration: none;
  }

  /*a :hover 当鼠标移到连接上时*/
  .head ul li a:hover {
    background: #252947;
    color: white;
  }

  .joinUs {
    height: 46px;
    padding: 12px 20px 0 0;
  }

</style>
