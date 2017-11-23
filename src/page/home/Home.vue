<template>
  <div class="hello">
    <headtop v-bind:head-title="headTitle"></headtop>
    <h1>{{ msg }}+{{money}}</h1>
    <button class="test1" @click="chuanzhi">button</button>
    <router-view v-bind:money="money" />
  </div>
  
</template>

<script>
import header from '../../common/header/Header'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'this is Home',
      headTitle: 'Home',
      money: 123
    }
  },
  methods: {
    chuanzhi: function () {
      this.money = this.money + 1
    }
  },
  components: {
    headtop: header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 1rem;
}

.hello h1 {
  font-size: .2rem;
}
.test1 {
  width: 1rem;
  height: .5rem;
  border: 1px solid #000;
}
</style>