<!--发送验证码没写-->
<script lang="ts">
import CusInput from '@/ui/CusInput.vue'
import CusButton from '@/ui/CusButton.vue'
import AugmentedReality from '@/assets/AugmentedReality.png'
import password from '@/assets/password.png'
import user from '@/assets/user.png'
import Mail from '@/assets/Mail.png'
import code from '@/assets/code.png'
import PhoneNumber from '@/assets/PhoneNumber.png'
import { authRegister } from '@/apis/src/auth';

export default {
  data() {
    return {
      AugmentedReality,
      password,
      user,
      Mail,
      code,
      PhoneNumber,
      userId: '',           // 学号
      username: '',         // 用户名
      passwordInput: '',    // 密码
      confirmPassword: '',  // 确认密码
      email: '',            // 邮箱
      verificationCode: '', // 验证码
      phoneNumber: '',      // 手机号
      authRegister,
      errorMsg: ''          // 错误信息
    };
  },
  components: {
    CusButton,
    CusInput
  },
  methods: {
    validateInputs() {

      this.errorMsg = '';

      if(this.username=="匿名用户") {
        this.errorMsg = '请输入有效的用户名，"匿名用户"不是有效的选项';
        return false;
      }

      if (!/^\d{12}$/.test(this.userId)) {
        this.errorMsg = '学号必须是12位数字';
        return false;
      }

      if (!/^\d{11}$/.test(this.phoneNumber)) {
        this.errorMsg = '手机号必须为11位数字';
        return false;
      }

      if (!/^.{8,16}$/.test(this.passwordInput)) {
        this.errorMsg = '密码必须在8到16位字符之间';
        return false;
      }

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(this.email)) {
        this.errorMsg = '请输入有效的邮箱地址';
        return false;
      }

      if (this.passwordInput !== this.confirmPassword) {
        this.errorMsg = '两次输入的密码不一致';
        return false;
      }

      return true;
    },

    async register() {
      const isValid = this.validateInputs();
      if (!isValid) {
        alert(this.errorMsg);
        return;
      }
      try {
        authRegister(this.userId, this.username, this.passwordInput, true, this.phoneNumber).then(res=>{
          if (res.data.code == 200200) {
            alert("注册成功")
            this.$router.push({name:"login"})
          } else {
            alert(res.data.msg)
          }
        })
      } 
      catch (error) {
        alert("注册失败，请检查输入的信息。");
        console.error(error);
      }
    }
  }
};
</script>
<template>
  <div class="register">
    <h1 class="zhuce">注册</h1>
    <cus-input
      style="top: 15%"
      class="input"
      :path="AugmentedReality"
      content="请输入学号"
      v-model="userId"
      required
    ></cus-input>
    
    <cus-input
      style="top: 25%"
      class="input"
      :path="user"
      content="请输入用户名"
      v-model="username"
      required
    ></cus-input>
    
    <cus-input
      style="top: 35%"
      class="input"
      :path="password"
      content="请输入密码"
      v-model="passwordInput"
      type="password"
      required
    ></cus-input>
    
    <cus-input
      style="top: 45%"
      class="input"
      :path="password"
      content="请再次输入密码"
      v-model="confirmPassword"
      type="password"
      required
    ></cus-input>
    
    <cus-input
      style="top: 55%"
      class="input"
      :path="Mail"
      content="请输入邮箱"
      v-model="email"
      required
    ></cus-input>
    
    <cus-input
      style="top: 65%"
      class="input"
      :path="code"
      content="请输入验证码"
      v-model="verificationCode"
      width="200px"
      required
    ></cus-input>
    
    <cus-input
      style="top: 75%"
      class="input"
      :path="PhoneNumber"
      content="请输入手机号"
      v-model="phoneNumber"
      required
    ></cus-input>
    
    <cus-button class="register-btn" content="注册" @click="register"></cus-button>
    <cus-button class="code-btn" content="发送验证码"></cus-button>
  </div>
</template>

<style scoped>
.register {
  border-radius: 16px;
  background: rgb(255, 255, 255);
  box-shadow: 2px 2px lightgray;
  z-index: 1;
  position: absolute;
  width: 430px;
  height: 500px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.zhuce {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 10px;
  font-family: 阿里巴巴普惠体;
  font-size: 24px;
  font-weight: 550;
  letter-spacing: 0%;
  text-align: center;
}
.input {
  z-index: 3;
  position: absolute;
  left: 61px;
}
.register-btn {
  z-index: 3;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 87%;
}
.code-btn {
  width: 100px !important;
  top: 65%;
  z-index: 3;
  right: 61px;
}
</style>
