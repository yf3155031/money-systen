<template>
  <div class="ziti">
    <p class="title">这是middle {{ msg }} + {{ money }}</p>
  </div>
</template>
<script>
export default {
  name: 'test',
  data: function () {
    return {
      msg: 'test'
    }
  },
  props: ['money']
}
</script>
<style>
    .ziti {
        color: yellowgreen;
        font-size: .3rem;
    }
</style>