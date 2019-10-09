<template>
    <div>
        <header>
            <i class="el-icon-arrow-left" @click="goOff"></i>
            购物车
        </header>
        <div class="page-cart">
            <el-row v-for="(item,idx) in datalist" :key="item.id" style="margin-top:.625rem;border-bottom:.0625rem solid #ccc;padding:.625rem 0;">
                <el-col :span="8" style="display:flex">
                    <el-checkbox v-model="checked" size="medium" style="margin-right:.625rem;margin-top:1.25rem;"></el-checkbox>
                    <img :src="require(`../assets/classify/${item.imgurl}`)" />
                </el-col>
                <el-col :span="13" style="display:flex;flex-direction: column;">
                    <h4>{{item.name}}</h4>
                    <p class="price">
                        <span>￥ {{item.price}}</span>
                    </p>
                    <el-input-number size="mini" v-model="item.qty" :min="1"></el-input-number>
                </el-col>
                <el-col :span="3" style="text-align:right">
                    <el-button type="danger" icon="el-icon-delete" @click="remove(idx)" circle size="mini" style="margin-top:.625rem;"></el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" style="text-align:right;margin-top:1.25rem;">
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeAll">清空购物车</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="jiesuan">
            <el-col :span="12" class="price" style="">
                    总计：
                <span>￥ {{totalPrice.toFixed(2)}}</span>
            </el-col>
            <el-col :span="12" style="text-align:right">
                <el-button type="danger" icon="el-icon-shopping-bag-1">去结算</el-button>
            </el-col>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      datalist: [
        {
          id: "1",
          name: "免费衬衫",
          imgurl:
            "0qteph7s.jpg",
          price: 138.8,
          qty: 3
        },
        {
          id: "2",
          name: "牛津纺衬衫",
          imgurl:
            "2019_5_16_15_7_53_8057_400x400.jpg",
          price: 238,
          qty: 2
        },
        {
          id: "3",
          name: "灯芯绒衬衫",
          imgurl:
            "126o3xt0.jpg",
          price: 98.9,
          qty: 1
        }
      ]
    };
  },
  computed: {
    totalPrice() {
      // let total = 0;
      // this.datalist.forEach(item=>{
      //     total += item.price*item.qty;
      // })
      // return total;

      return this.datalist.reduce((pre, item) => {
        // pre ： 前一次的返回值（第一次为初始值）
        return pre + item.price * item.qty;
      }, 0);
    }
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    },
    remove(idx){
        this.datalist.splice(idx,1)
    },
    removeAll(){
         this.datalist.splice(0,this.datalist.length);
    }
  }
};
</script>
<style lang="scss" scoped>
.page-cart {
  padding: .625rem;
  box-sizing: border-box;

  img {
    width: 5.25rem;
    height: 5.25rem;
  }
}
.jiesuan {
  width: 100%;
  height: 3.1875rem;
  border-top: .0625rem solid #ccc;
  padding: 0 .625rem;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  span{
      color: red;
  }
}
header {
  width: 100%;
  height: 3rem;
  background-color: #b81c22;
  text-align: center;
  line-height: 3rem;
  color: #fff;
  position: relative;
  i {
    font-size: 1.875rem;
    position: absolute;
    top: .625rem;
    left: 1.25rem;
  }
}
</style>
