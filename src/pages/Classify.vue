<template>
    <div style="padding: 3rem 0 3.1875rem 0;">
        <header class="header">
            <i class="el-icon-arrow-left" @click="goOff"></i>
            分类
        </header>
        <div>
             <el-tabs tab-position="left" style="height: 100%;">
                <el-tab-pane label="推荐">
                    <el-col :span="8" v-for="item in tuijian" :key="item.img" class="details">
                        <img :src="require(`../assets/classify/${item.img}`)" alt="" style="width:80%">
                        <span>{{item.text}}</span>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="男孩">
                    <el-col :span="8" v-for="item in nanhai" :key="item.img" class="details">
                        <img :src="require(`../assets/classify/${item.img}`)" alt="" style="width:80%">
                        <span>{{item.text}}</span>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="女孩">
                    <el-col :span="8" v-for="item in nvhai" :key="item.img" class="details">
                        <img :src="require(`../assets/classify/${item.img}`)" alt="" style="width:80%">
                        <span>{{item.text}}</span>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="男鞋">
                    <el-col :span="8" v-for="item in nanxie" :key="item.img" class="details">
                        <img :src="require(`../assets/classify/${item.img}`)" alt="" style="width:80%">
                        <span>{{item.text}}</span>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="女鞋">
                    <el-col :span="8" v-for="item in nvxie" :key="item.img" class="details">
                        <img :src="require(`../assets/classify/${item.img}`)" alt="" style="width:80%">
                        <span>{{item.text}}</span>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="袜品">
                    <el-col :span="8" v-for="item in wapin" :key="item.img" class="details">
                        <img :src="require(`../assets/classify/${item.img}`)" alt="" style="width:80%">
                        <span>{{item.text}}</span>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="家居">
                    <el-col :span="8" v-for="item in jiaju" :key="item.img" class="details">
                        <img :src="require(`../assets/classify/${item.img}`)" alt="" style="width:80%">
                        <span>{{item.text}}</span>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="童装">
                    <el-col :span="8" v-for="item in tongzhuang" :key="item.img" class="details">
                        <img :src="require(`../assets/classify/${item.img}`)" alt="" style="width:80%">
                        <span>{{item.text}}</span>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="内衣">
                    <el-col :span="8" v-for="item in neiyi" :key="item.img" class="details">
                        <img :src="require(`../assets/classify/${item.img}`)" alt="" style="width:80%">
                        <span>{{item.text}}</span>
                    </el-col>
                </el-tab-pane>
             </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tuijian:[
                {
                    img:'0qteph7s.jpg',
                    text:"免费衬衫"
                },
                {
                    img:'2019_5_16_15_7_53_8057_400x400.jpg',
                    text:"牛津纺衬衫"
                },
                {
                    img:'126o3xt0.jpg',
                    text:"灯芯绒衬衫"
                }
            ],
            nanhai:[
                {
                    img:'6377093-1j201709181534534139.jpg',
                    text:"免费衬衫"
                },
                {
                    img:'2019_5_15_15_57_55_7561_400x400.jpg',
                    text:"牛津纺衬衫"
                },
                {
                    img:'2019_5_15_15_55_8_2095_400x400.jpg',
                    text:"法兰绒衬衫"
                }
            ],
            nvhai:[
                {
                    img:'6375741-1j201703151524555988.jpg',
                    text:"卫衣"
                },
                {
                    img:'2017_10_9_16_2_46_2082_400x400.jpg',
                    text:"水柔棉"
                },
                {
                    img:'2017_10_9_15_58_41_4362_400x400.jpg',
                    text:"休闲衬衫"
                }
            ],
            nanxie:[
                {
                    img:'2019_5_16_14_59_43_6907_400x400.jpg',
                    text:"帆布鞋"
                },
                {
                    img:'2016_9_29_15_4_54_591_400x400.jpg',
                    text:"休闲鞋"
                },
                {
                    img:'2016_11_4_14_42_3_7460_400x400.jpg',
                    text:"复古鞋"
                }
            ],
            nvxie:[
                {
                    img:'2019_5_16_14_59_46_190_400x400.jpg',
                    text:"帆布鞋"
                },
                {
                    img:'0qteph7s15646.jpg',
                    text:"复古鞋"
                },
                {
                    img:'0qteph7s3.jpg',
                    text:"休闲鞋"
                }
            ],
            wapin:[
                {
                    img:'2015_8_24_14_36_41_8264.jpg',
                    text:"连裤袜"
                },
                {
                    img:'2015_10_12_17_6_14_4263.jpg',
                    text:"打底裤"
                },
                {
                    img:'2015_8_24_14_43_42_6578.jpg',
                    text:"棉袜"
                }
            ],
            jiaju:[
                {
                    img:'dsxcsd.jpg',
                    text:"手机壳"
                },
                {
                    img:'6360018-1j201507061744455744.jpg',
                    text:"床品"
                },
                {
                    img:'6379346-1j201711201639496170.jpg',
                    text:"床单"
                }
            ],
            tongzhuang:[
                {
                    img:'2017_9_22_14_50_27_6213_400x400.jpg',
                    text:"卫衣"
                },
                {
                    img:'6378719-2201710181354559807.jpg',
                    text:"男童"
                },
                {
                    img:'6378718-2201710181354110581.jpg',
                    text:"女童"
                }
            ],
            neiyi:[
                {
                    img:'0852470-1j201602231548141598.jpg',
                    text:"秋衣"
                },
                {
                    img:'6375743-1j201703151541308000.jpg',
                    text:"打底裤"
                },
                {
                    img:'6378045-1j201709200915558828.jpg',
                    text:"内衣"
                }
            ]
        }
    },
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
  .details{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top:.625rem;
      color: #999;
      span{
          margin-top:.3125rem;
          transform: scale(0.8)
      }
  }
</style>

