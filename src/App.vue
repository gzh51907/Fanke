<template>
    <div class="app">
        <el-col :span="24">
          <router-view/>
        </el-col>
        <div class="footer">
            <div v-for="item in menus" :key="item.name" class="nav">
                <router-link :to="item.path" active-class="current">
                        <i :class="item.icon"></i>
                        <span>{{item.text}}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon:'el-icon-house'
        },
        {
          name: "classify",
          path: "/classify",
          text: "分类",
          icon:'el-icon-shopping-bag-1'
        },
        {
          name: "channel",
          path: "/channel",
          text: "频道",
          icon:'el-icon-data-analysis'
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon:'el-icon-shopping-cart-2'
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          icon:'el-icon-user'
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.app{
  width: 100%;
  height: 100%;
}
.footer {
  width: 100%;
  height: 51px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #999;
  padding: 5px 0 ;
  background-color: #fff;
  z-index: 20;

}
.footer .nav {
  width: 20%;
  a{
  width: 100%;
  text-decoration: none;
  height: 51px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  i{
    font-size: 30px;
    color: #999;
  }
  span{
    transform: scale(0.8);
    color: #999;
  }
}
.current i,.current span{
  color: #FF0000;
}
}

</style>




