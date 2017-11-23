<template>
  <div class="ziti">
      <p>this is {{ msg }}</p>
      <ul>
          <li>x</li>
          <li>yellowgreen</li>
          <li>y</li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'test',
  data: function () {
    return {
      msg: 'list'
    }
  }
}
</script>
<style>
    .ziti {
        color: yellowgreen;
        font-size: .3rem;
    }
</style>