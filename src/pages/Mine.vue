<template>
    <div>
        <header>
            <i class="el-icon-arrow-left" @click="goOff"></i>
            个人中心
        </header>
        <div class="user">
            <div class="set">
                <i class="el-icon-setting"></i>
            </div>
            <div class="center">
                <img src="../assets/mine/H5-V0.jpg" alt="" style="width:4.875rem;border-radius:50%">
                <span>13257963081</span>
                <img src="../assets/mine/H5-NewV0.png" alt="" style="width:3.75rem;height:1.125rem;">
            </div>
            <el-row class="integral">
                <el-col :span="8" class="col">积分:0</el-col>
                <el-col :span="8" class="col">余额:0.00</el-col>
                <el-col :span="8" class="col">成长值:0</el-col>
            </el-row>
        </div>
        <div class="order">
            <div class="dindan">
                <p>
                    <span>全部订单</span>
                    <i class="el-icon-arrow-right"></i>
                </p>
                <div>
                    <el-col :span="6" class="jxz">
                        <i></i>
                       <span> 进行中</span>
                    </el-col>
                    <el-col :span="6" class="ywc">
                        <i></i>
                        <span>已完成</span>
                    </el-col>
                    <el-col :span="6" class="dpj">
                        <i></i>
                        <span>待评价</span>
                    </el-col>
                    <el-col :span="6" class="wx">
                        <i></i>
                        <span>无效</span>
                    </el-col>
                </div>
            </div>
        </div>
        <div class="uc-section"> 
            <ul class="clear"> 
                <li class="uc-section-li">
                    <div class="uc-section-charge" href="/CashReCharge/index">
                        <span></span>
                        <span>充值返现</span>
                        <span class="chargeNotice">充100返100</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-pTailor" href="/order/GetOrderList4PTailorNew">
                        <span></span>
                        <span>我的私人定制</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-logistics" href="/Order/GetNoArrivalOrderList">
                        <span></span>
                        <span>物流查询</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-rRecords " href="/Order/ReturnExchangeOrder">
                        <span></span>
                        <span>退换货记录</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-addr" href="/User/MyAddresses">
                        <span></span>
                        <span>地址管理</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-coupon" href="/User/MyCoupon">
                        <span></span>
                        <span>我的礼品卡</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-gCard" href="/User/MyGiftCard?status=2">
                        <span></span>
                        <span>我的优惠券</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-points" href="/User/MyPointsDetail">
                        <span></span>
                        <span>我的积分</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-comment" href="/User/MyComment">
                        <span></span>
                        <span>我的评论</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-ask" href="/User/MyAsk">
                        <span></span>
                        <span>我的提问</span>
                    </div>
                </li> 
                <li class="uc-section-li">
                    <div class="uc-section-advise" href="/FBack/Index">
                        <span></span>
                        <span>投诉建议</span>
                    </div>
                </li> 
            </ul> 
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
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
.user {
  width: 100%;
  height: 13.375rem;
  background: url(../assets/mine/uc-topbgd.png);
  background-size: 100%;
  position: relative;
  .set {
    width: 100%;
    height: 2.125rem;
    position: relative;
    i {
      font-size: 1.375rem;
      color: #f3d5d2;
      position: absolute;
      right: .625rem;
      top: .625rem;
    }
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      color: #fff;
      transform: scale(0.8);
      margin: .3125rem 0;
    }
  }

  .integral {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: .3125rem;
    color: #fff;

    .col {
      transform: scale(0.7);
    }
  }
}
.order {
  width: 100%;
  height: 7rem;
  padding: .75rem 0 .9375rem 0;
  background-color: #f0eff5;
  .dindan {
    width: 100%;
    height: 7rem;
    background-color: #fff;
    p {
      height: 2.625rem;
      display: flex;
      align-items: center;
      position: relative;
      padding-left: .625rem;
      span {
        color: #565656;
        transform: scale(0.7);
      }
      i {
        font-size: 1.375rem;
        position: absolute;
        right: .3125rem;
        color: #cecece;
      }
    }
    div {
      height: 4.375rem;

      .jxz,
      .ywc,
      .dpj,
      .wx {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          color: #333;
          transform: scale(0.7);
          margin-top: .3125rem;
        }
        i {
          width: 1.375rem;
          height: 1.5rem;
          background: url(../assets/mine/uc-order-icon.png) no-repeat;
          background-size: 100%;
        }
      }
      .jxz i {
        background-position: 0 -1.5rem;
      }
      .ywc i {
        background-position: 0 -3rem;
      }
      .dpj i {
        background-position: 0 -6.125rem;
      }
      .wx i {
        background-position: 0 -4.5625rem;
      }
    }
  }
}
.uc-section {
  background-color: #fff;

  .clear {
    display: flex;
    flex-wrap: wrap;
    .uc-section-li {
      width: 25%;
      height: 5.875rem;
      div {
        width: 100%;
        height: 3.375rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 1.25rem;
      }
      span {
          display: block;
        width: 100%;
        font-size: .75rem;
      }
    }
  }
}
</style>
