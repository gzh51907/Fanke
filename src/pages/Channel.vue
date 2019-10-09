<template>
    <div style="padding: 3rem 0 3.1875rem 0;">
        <header class="header">
            <i class="el-icon-arrow-left" @click="goOff"></i>
            频道
        </header>
        <div v-for="item in 12" :key="item" class="content">
            <img :src="require(`../assets/channel/img${item}.jpg`)" alt="">
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    goOff() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 3rem;
    background-color: #b81c22;
    text-align: center;
    line-height: 3rem;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    i {
      font-size: 1.875rem;
      position: absolute;
      top: .625rem;
      left: 1.25rem;
    }
  }
  .content{
      width: 100%;
      img{
          width: 100%;
      }
  }
</style>