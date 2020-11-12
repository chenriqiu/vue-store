<!--  -->
<template>
  <div class="box">
    <div class="content">
      <!-- 头像区域 -->
      <div class="loginImg">
        <img src="@/assets/logo.png" >
      </div>
      <!-- 登录表单区域 -->
      <el-form 
        label-width="0px" 
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
        >
        <!-- 用户名 -->
        <el-form-item prop="username" class="username">
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password" class="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="密码"
            prefix-icon="el-icon-s-goods"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
       </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //这是登录表单的数据绑定对象
      loginForm:{
        username: 'admin',
        password: '123456'
      },
      //这是登录表单的验证规则对象
      loginFormRules:{
        //验证用户名是否合法
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        //验证密码是否合法
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    //点击重置按钮，重置登录表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
      //console.log(this)
    },
    login() {
      this.$refs.loginFormRef.validate(async vaild=>{
        //console.log(vaild)
        if(!vaild) return;
        //结构出data，其他暂时不需要用到
       const { data : result} = await this.$http.post("login",this.loginForm);
        //console.log(result)
        if (result.meta.status !== 200) return this.$message.error('登录失败');
        this.$message.success('登录成功');
        //1.将登录成功之后的token，保存到客户端的sessionStorage中
        window.sessionStorage.setItem("token",result.data.token);
        //2.通过编程是导航跳转到后台主页，路由地址是/home
        this.$router.push("/home");
      })
    }
  }
}
</script>
<style scoped>
.box{
  height: 100%;
  background: skyblue;
  position: relative;
}
.content{
  height: 300px;
  width: 400px;
  border-radius: 3px;
  background: white;
  position:absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
}
/* 头像区域 */
.loginImg{
  height: 130px;
  width: 130px;
  border: 1px solid white;
  border-radius: 50%;
  box-shadow: 0 0 10px skyblue;
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: white;
}
.loginImg img{
  height: 130px;
  width: 130px;
  border-radius: 50%;
  background-color:lightgray;
} 
/* 登录表单区域 */
.login_form{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px; 
  box-sizing: border-box;
}
.btns{
  display: flex;
  justify-content: flex-end;
}
</style>