<template>
  <div class="content">
    <ul>
      <ul class="fl order">
        <li v-for="(order,index) in orders" :key="index">
          {{order.name}}
        </li>
        <!--<li>v-html</li>-->
        <!--<li>v-model</li>-->
        <!--<li>v-if</li>-->
        <!--<li>v-show</li>-->
        <!--<li>v-bind</li>-->
      </ul>
      <ul class="fl">
        <li>
          <span v-text="text"></span>
        </li>
        <li>
          <span v-html="html"></span>
        </li>
        <li>
          <span v-html="model"></span>
          <input type="text" v-model="model">
        </li>
        <li>
          <span v-if="vif">v-if效果</span>
          <input type="button" value="变化" v-on:click="change">
        </li>
        <li>
          <span v-show="show">v-show效果</span>
          <input type="button" value="变化" v-on:click="changeshow">
        </li>
        <li>
          <span v-bind:class="[s]">v-bind 绑定class改变样式</span><span v-text="s"></span>
          <select name="background"  v-model="s" id="bg">
            <option value="green">green</option>
            <option value="red">red</option>
            <option value="yellow">yellow</option>
            <option value="blue">blue</option>
          </select>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      orders: [
        {name: 'v-text'},
        {name: 'v-html'},
        {name: 'v-model'},
        {name: 'v-if'},
        {name: 'v-show'},
        {name: 'v-bind'}
      ],
      text: '<h3>v-text显示的内容</h3>',
      html: '<h3>v-html显示的内容</h3>',
      model: 'v-model双向绑定',
      vif: false,
      show: true,
      s: 'green'
    }
  },
  methods: {
    change () {
      this.vif = !this.vif
    },
    changeshow () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
  .content {
    height: 1110px;
    margin-left: 300px;
  }

  li {
    height: 50px;
  }

  span {
    height: 50px;
    background: blueviolet;
    border-bottom: black solid 1px;
  }
  .green{
    background: green;
  }
  .red{
    background: red;
  }
  .yellow{
    background: yellow;
  }
  .blue{
    background: blue;
  }
</style>
