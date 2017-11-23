<template>
  <div class="header">
    <p class="title">头部标题：{{ headTitle }}</p>
  </div>

</template>
<script>
  export default {
    props: ['headTitle', 'todo']
  }
</script>
<style>
  .header {
      height: 1rem;
      /* font-size: .3rem;
      line-height: 1rem; */
      text-align: center;
      width: 100%;
      background: #BAD5D8;
  }
  .header p {
     font-size: .3rem;
     line-height: 1rem;
  }
</style>

