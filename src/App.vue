<template>
<!-- 模块名 + 元素名 + 修饰器 -->
  <div>
    <headtop v-bind:head-title="headTitle"></headtop>
    <router-view/>
  </div>
</template>

<script>
import header from './common/header/Header'
export default {
  name: 'app',
  data () {
    return {
      headTitle: '我的主页'
    }
  },
  components: {
    headtop: header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.test2 {
  width: 2rem;
  height: .5rem;
  border: 1px solid yellowgreen;
}
</style>
