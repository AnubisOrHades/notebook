<template>
  <div class="filter center">
    <!--引用过滤器-->
    <p>{{text | fanzhuan}}</p>
    <input type="text" v-model="text" >
  </div>
</template>

<script>
export default {
  name: 'filter',
  // 定义过滤器
  filters: {
    fanzhuan: function (value) {
      return value.split('').reverse().join('')
    }
  },
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>
.filter{
  width: 800px;
}
  .filter p{
    width: 200px;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    background: #2fff91;
    color: blue;
    border-radius: 5px;
  }
  .filter input{
    width: 200px;
    height: 30px;
    border-radius: 5px;
    background: bisque;
    margin-top: 15px;
  }
</style>
