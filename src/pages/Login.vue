<template>
  <div>
    <header>
            <i class="el-icon-arrow-left" @click="goOff"></i>
            登录
        </header>
    <el-form :model="ruleForm" :rules="rules" ref="regForm" status-icon label-width="5.625rem" class="from">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox label="下次免登陆" v-model="ruleForm.mdl"></el-checkbox>
      </el-form-item>
    </el-form>
    <el-col :span="22" :offset="1"  @click.native="submitForm" class="login">
              登录
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        mdl: false
      },
      rules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        username: [
          { required: true, message: "亲，用户名必须填写哟", trigger: "blur" }
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

          let { username, password, mdl } = this.ruleForm;

          let { data } = await this.$axios.get(
            "http://localhost:1906/user/login",
            {
              params: {
                username,
                password,
                mdl
              }
            }
          );
          console.log("data:", data);

          // this.$router.replace('/mine')
          if (data.code === 1) {
            let { targetUrl } = this.$route.query;console.log('targetUrl:',targetUrl)

            this.$router.replace({
              path: targetUrl || "/mine"
            });

            // 把token写入localstorage
            localStorage.setItem("Authorization", data.data);
            // this.$router.replace({path:'/mine',params:{username}})
          } else {
            alert("用户名或密码不正确");
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
.login {
  background-color: #b81c22;
  height: 2.8125rem;
  line-height: 2.8125rem;
  color: #fff;
  text-align: center;
  font-size: 1.125rem;
  margin-top: 1.25rem;
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
