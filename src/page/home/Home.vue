<template>
  <div class="home">
    <!-- <h1>{{ msg }}+{{money}}</h1> -->
    <!-- <button class="test1" @click="chuanzhi">button</button> -->
    <router-view v-bind:money="money" />
    <div class="home-property">
      <p class="home-property-title">净资产</p>
      <p class="home-property-content">+150元</p>
    </div>
    <div class="home-box">
      <p class="home-box-in">收入<span>180</span></p>
      <p class="home-box-out">支出<span>100</span></p>
    </div>
  </div>
  
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-size: .5rem;
  height: 3rem;
}

.home h1 {
  font-size: .2rem;
}
.home .home-property {
  float: left;
  box-sizing: border-box;
  padding-top: .6rem;
  padding-bottom: .6rem;
  width: 3rem;
  height: 3rem;
  background: #b5673c;
}

.home .home-property .home-property-title {
  margin-bottom: .4rem;
  font-size: .8rem;
  font-weight: 700;
  text-align: center;
  line-height: .8rem;
}
.home .home-property .home-property-content {
  font-size: .4rem;
  line-height: .4rem;
  color: red;
  text-align: center;
}

.home .home-box {
  box-sizing: border-box;
  padding-top: .4rem;
  float: right;
  height: 3rem;
  width: 4.5rem;
  background: #ac73d0;
}

.home .home-box p {
  height: 1rem;
  font-size: .5rem;
  line-height: 1rem;
}

.home .home-box .home-box-in {
  margin-bottom: .2rem;
}
</style>