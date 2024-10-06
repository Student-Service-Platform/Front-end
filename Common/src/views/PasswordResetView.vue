<script lang="ts">
import CusInput from '@/ui/CusInput.vue'
import CusButton from '@/ui/CusButton.vue'
import AugmentedReality from '@/assets/AugmentedReality.png'
import password from '@/assets/password.png'
import Mail from '@/assets/Mail.png'
import code from '@/assets/code.png'
import { resetpwd } from '@/apis/src/resetpassword';

export default {
  data() {
    return {
      AugmentedReality,
      password,
      Mail,
      code,
      userId: '',           // 学号
      email: '',            // 邮箱
      verificationCode: '', // 验证码
      passwordInput: '',    // 密码
      confirmPassword: '',  // 确认密码
      resetpwd
    }
  },
  components: {
    CusButton,
    CusInput
  },
  methods: {
    async resetpassword() {
      if (this.passwordInput !== this.confirmPassword) {
        alert("两次输入的密码不一致");
        return;
      }
      try {
        const response = await resetpwd(this.userId, this.email, this.verificationCode, this.passwordInput, this.confirmPassword).then();
        alert("密码修改成功！");
      } 
      catch (error) {
        alert("修改失败，请检查输入的信息。");
        console.error(error);
      }
    }
  }
}
</script>

<template>
  <div class="PasswordReset">
    <h1 class="wangjimima">忘记密码</h1>
    <cus-input
      style="top: 20%"
      class="input"
      :path="AugmentedReality"
      content="请输入ID"
      v-model="userId"
      required
    ></cus-input>
    <cus-input
      style="top: 32%"
      class="input"
      :path="Mail"
      content="请输入邮箱"
      v-model="email"
      required
    ></cus-input>
    <cus-input
      style="top: 44%"
      class="input"
      :path="code"
      content="请输入验证码"
      width="200px"
      v-model="verificationCode"
      required
    ></cus-input>
    <cus-input
      style="top: 56%"
      class="input"
      :path="password"
      content="请输入密码"
      v-model="passwordInput"
      type="password"
      required
    ></cus-input>
    <cus-input
      style="top: 68%"
      class="input"
      :path="password"
      content="请再次输入密码"
      v-model="confirmPassword"
      type="password"
      required
    ></cus-input>
    <cus-button class="PasswordReset-btn" content="一键修改" @click="resetpassword"></cus-button>
    <cus-button class="code-btn" content="发送验证码"></cus-button>
  </div>
</template>

<style scoped>
.PasswordReset {
  border-radius: 16px;
  background: rgb(255, 255, 255);
  box-shadow: 2px 2px lightgray;
  z-index: 1;
  position: absolute;
  width: 430px;
  height: 500px;
  transform: translate(-50%, -50%);
  top: 52%;
  left: 50%;
}
.wangjimima {
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
.PasswordReset-btn {
  z-index: 3;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 80%;
}
.code-btn {
  width: 100px !important;
  top: 32%;
  z-index: 3;
  right: 61px;
}
</style>
