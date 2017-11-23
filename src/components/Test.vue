<template>
  <div class="ziti">this is {{ msg }} + {{ money }}</div>
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


