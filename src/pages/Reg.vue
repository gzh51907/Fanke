<template>
    <div>
        <header>
            <i class="el-icon-arrow-left" @click="goOff"></i>
            注册
        </header>
        <el-form :model="ruleForm" :rules="rules" ref="regForm" status-icon label-width="5.625rem" class="from">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
               <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <p class="http">
          注册账号即表示同意遵守
          <a href="/channel/index/441">《VANCL凡客服务条款》</a>
        </p>
        <el-col :span="22" :offset="1"  @click.native="submitForm" class="reg">
              点击注册
        </el-col>

  </div>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      //window.console.log("validatePass", rule, value, callback);
      //   if (value === "") {
      //     callback(new Error("请再次输入密码"));
      //   } else

      if (value !== this.ruleForm.password) {
        //   校验失败
        callback(new Error("两次输入密码不一致!"));
      } else {
        //   通过校验
        callback();
      }
    };

    // 校验用户名是否存在
    const checkUsername = async (rule, value, callback) => {
      let { data } = await this.$axios.get("http://localhost:1906/user/check", {
        params: {
          username: this.ruleForm.username
        }
      });
      if (data.code === 0) {
        callback(new Error("用户名已存在"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度必须为 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        checkPass: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        username: [
          { required: true, message: "亲，用户名必须填写哟", trigger: "blur" },
          { validator: checkUsername, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    },
    submitForm() {
      //   校验整个表单
      this.$refs.regForm.validate(async valid => {
        // valid： 所有校验规则都通过后，得到true，只要有一个表单元素校验不通过则得到form
        if (valid) {
          // alert('submit!');
          // 发起ajax请求，等待服务器返回结果
          // 根据服务器返回结果：注册成功->跳到“我的”

          let { username, password } = this.ruleForm;

          let { data } = await this.$axios.post(
            "http://localhost:1906/user/reg",
            {
              username,
              password
            }
          );
          console.log("data:", data);

          // this.$router.replace('/mine')
          if (data.code === 1) {
            this.$router.replace({
              path: "/mine",
              params: { username },
              query: { username }
            });
            // this.$router.replace({path:'/mine',params:{username}})
          } else {
            alert("注册失败");
          }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.from{
  margin-top:1.25rem;
  padding:0 .9375rem 0 .625rem;
}
.reg {
  background-color: #b81c22;
  height: 2.8125rem;
  line-height: 2.8125rem;
  color: #fff;
  text-align: center;
  font-size: 1.125rem;
  margin-top: 1.25rem;
}
.http{
  transform: scale(0.8);
  color: #999;
  margin-top: 2.5rem;
  text-align: center;
  font-size: .75rem;
  a{
    text-decoration: none;
    color: #333;
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