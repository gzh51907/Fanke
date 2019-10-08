<template>
    <div style="padding: 48px 0 51px 0;">
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
    height: 48px;
    background-color: #b81c22;
    text-align: center;
    line-height: 48px;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    i {
      font-size: 30px;
      position: absolute;
      top: 10px;
      left: 20px;
    }
  }
  .content{
      width: 100%;
      img{
          width: 100%;
      }
  }
</style>