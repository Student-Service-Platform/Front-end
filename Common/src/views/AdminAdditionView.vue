<script lang="ts">
import CusInput from '@/ui/CusInput.vue';
import CusButton from '@/ui/CusButton.vue';
import AugmentedReality from "@/assets/AugmentedReality.png";
import password from "@/assets/password.png";
import user from "@/assets/user.png";
import Mail from "@/assets/Mail.png";
import PhoneNumber from "@/assets/PhoneNumber.png";

import { postAddAdmin } from '@/apis/src/superadmin'
export default {
  data() {
    return {
      AugmentedReality,
      password,
      user,
      Mail,
      code,
      PhoneNumber,
      admin_id: '',           // 学号
      name: '',         // 用户名
      passwordInput: '',    // 密码
      confirmPassword: '',  // 确认密码
      email: '',            // 邮箱
      verificationCode: '', // 验证码
      phoneNumber: '',      // 手机号
      postAddAdmin,
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
      
      if (!/^a.*$/.test(this.admin_id)) {
        this.errorMsg = '用户名必须以"a"开头';
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
    goToLogin(){
      this.$router.push({name: "login"})
    },
    async register() {
      const isValid = this.validateInputs();
      if (!isValid) {
        alert(this.errorMsg);
        return;
      }
      try {
        postAddAdmin (this.userId, this.username, this.passwordInput, true, this.phoneNumber).then(res=>{
          if (res.data.code == 200200) {
            alert("新建成功")
            // this.$router.push({name:"login"})
          } else {
            alert(res.data.msg)
          }
        })
      } 
      catch (error) {
        alert("新建失败，请检查输入的信息。");
        console.error(error);
      }
    }
  }
};
</script>
<template>
    <div class="AdminAddition">
        <h1 class="xinjian">新建管理员</h1>
        <cus-input
            style="top: 20%;"
            class="input"
            :path="AugmentedReality"
            content="请输入ID"
            v-model="admin_id"
            required
        ></cus-input>
        <cus-input
            style="top: 31%;"
            class="input"
            :path="user"
            content="请输入用户名"
            v-model="name"
            required
        ></cus-input>
        <cus-input
            style="top: 42%;"
            class="input"
            :path="password"
            content="请输入密码"
            v-model="passwordInput"
            type="password"
            required
        ></cus-input>
        <cus-input
            style="top: 53%;"
            class="input"
            :path="password"
            content="请再次输入密码"
            v-model="confirmPassword"
            required
        ></cus-input>
        <cus-input
            style="top: 64%;"
            class="input"
            :path="Mail"
            content="请输入邮箱"
            v-model="email"
            required
        ></cus-input>
        <cus-input
            style="top: 75%;"
            class="input"
            :path="PhoneNumber"
            content="请输入手机号"
            v-model="phoneNumber"
            required
        ></cus-input>
        <cus-button
            class="xinjian-btn"
            content="新建"
            @click="register"
        ></cus-button>
    </div>
</template>


<style scoped>
.AdminAddition {
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
.xinjian {
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
.xinjian-btn {
    z-index: 3;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 87%;
}
</style>