<template>
    <div class="home">
         <div class="block">
            <el-carousel height="240px" indicator-position="none">
                <el-carousel-item v-for="item in 7" :key="item">
                    <img :src="require(`../assets/home/banner${item}.jpg`)" >
                </el-carousel-item>
            </el-carousel>
            <input type="text" class="search" placeholder="熊本熊">
            <i class="el-icon-search"></i>
            <i class="el-icon-chat-dot-round"></i>
        </div>
        <el-col :span="22" offset="1" class="rebate">
            <img src="../assets/home/rebate.jpg" alt="">
            <ul>
                <li v-for="item in rebate" :key="item.title">
                    <img :src="require(`../assets/home/nav${item.index}.jpg`)" alt="">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </el-col>
        <div class="xpsx">
            <div class="tit">
                <img src="../assets/home/2017_12_19_14_40_52_8584_26x26.jpg" alt="">
                新品上新
            </div>
            <div>
                <img src="../assets/home/2019_9_17_16_44_59_8315_326x206.jpg" alt="">
                <img src="../assets/home/2019_9_17_16_45_0_300_326x206.jpg" alt="">
                <img src="../assets/home/2019_9_17_16_44_56_4248_326x206.jpg" alt="">
                <img src="../assets/home/2019_9_17_16_44_59_475_326x206.jpg" alt="">
                <img src="../assets/home/2019_9_17_16_44_59_4902_326x206.jpg" alt="">
                <img src="../assets/home/2019_9_17_16_44_59_7062_326x206.jpg" alt="">
                <img src="../assets/home/2019_9_20_14_53_29_772_326x206.jpg" alt="">
                <img src="../assets/home/2019_9_26_9_38_46_3615_326x206.jpg" alt="">
                <img src="../assets/home/2019_9_26_9_38_49_648_326x206.jpg" alt="">
            </div>
        </div>
        <div class="mrms">
            <div class="tit">
                <i class="el-icon-time"></i>
                每日秒杀
            </div>
            <div>
                <img src="../assets/home/6385231-1j201903291109592185.jpg" alt="">
                <img src="../assets/home/6379492-1j201802271354367601.jpg" alt="">
                <img src="../assets/home/6379851-1j201803191403204036.jpg" alt="">
                <img src="../assets/home/6382265-1j201806131417221708.jpg" alt="">
                <img src="../assets/home/6385223-1j201904031058517131.jpg" alt="">
                <img src="../assets/home/6385225-1j201903291110193594.jpg" alt="">
                <img src="../assets/home/6385227-1j201903291110142187.jpg" alt="">
                <img src="../assets/home/6385009-1j201903111105265982.jpg" alt="">
                <img src="../assets/home/6386296-1j201907161129138388.jpg" alt="">
            </div>
        </div>
        <div class="fanketx">
            <div class="tit">
                <i class="el-icon-time"></i>
                凡客T恤
            </div>
            <el-carousel height="240px" indicator-position="none">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img :src="require(`../assets/home/fanketx${item}.jpg`)" >
                </el-carousel-item>
            </el-carousel>
        </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      rebate: [
        {
          title: "新品",
          index: 1
        },
        {
          title: "特惠",
          index: 2
        },
        {
          title: "T恤",
          index: 3
        },
        {
          title: "衬衫",
          index: 4
        },
        {
          title: "vip",
          index: 5
        }
      ]
    };
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.home{
    width: 100%;
    box-sizing: border-box;
}
.block {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .search {
    width: 80%;
    height: 25px;
    padding-left: 40px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 20px;
    position: absolute;
    top: 10px;
    left: 15px;
    z-index: 9;
  }
  .el-icon-search {
    font-size: 22px;
    position: absolute;
    top: 12px;
    left: 25px;
    z-index: 10;
  }
  .el-icon-chat-dot-round {
    font-size: 28px;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 10;
  }
}
.rebate {
  margin: 15px 0 10px 0;
  img {
    width: 100%;
  }
  ul {
    width: 100%;
    display: flex;
    margin-top: 10px;
    li {
      width: 20%;
      height: 58px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img {
        width: 34px;
      }
      span {
        transform: scale(0.7);
      }
    }
  }
}
.xpsx {
  width: 100%;
  height: 100%;
  .tit {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    box-sizing: border-box;
    img {
      width: 15px;
      height: 15px;
      margin-right: 10px;
      margin-top: 12px;
    }
  }
  div {
    width: 100%;
    height: 104px;
    display: flex;
    box-sizing: content-box;
    overflow: auto;
    img {
      width: 160px;
      margin-left: 5px;
    }
    img:nth-child(1) {
      margin-left: 0;
    }
  }
}
.mrms {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  .tit {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    box-sizing: border-box;
    i {
      margin-right: 10px;
      margin-top: 12px;
      color: red;
      margin-left: -5px;
    }
  }
  div {
    width: 100%;
    height: 152px;
    display: flex;
    box-sizing: content-box;
    overflow: auto;
    img {
      width: 97px;
      height: 125px;
      margin-left: 8px;
    }
    img:nth-child(1) {
      margin-left: 0;
    }
  }
}
.fanketx {
  .tit {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    box-sizing: border-box;
    i {
      margin-right: 5px;
      margin-top: 12px;
      color: red;
      margin-left: -5px;
    }
  }
  img {
    width: 100%;
  }
}
</style>



