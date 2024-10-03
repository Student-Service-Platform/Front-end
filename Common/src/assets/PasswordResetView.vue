<script setup lang="ts">
import CusInput from '@/ui/CusInput.vue';
import CusButton from '@/ui/CusButton.vue';
import AugmentedReality from "@/assets/AugmentedReality.png";
import password from "@/assets/password.png";
import Mail from "@/assets/Mail.png";
import code from "@/assets/code.png";
</script>

<template>
    <div class="PasswordReset">
        <h1 class="wangjimima">忘记密码</h1>
        <cus-input style="top:20%;" class="input" :path="AugmentedReality" content="请输入ID" required></cus-input>
        <cus-input style="top:32%;" class="input" :path="Mail" content="请输入邮箱" required></cus-input>
        <cus-input style="top:44%;" class="input" :path="code" content="请输入验证码" width="200px" required></cus-input>
        <cus-input style="top:56%;" class="input" :path="password" content="请输入密码" required></cus-input>
        <cus-input style="top:68%;" class="input" :path="password" content="请再次输入密码" required></cus-input>
        <cus-button class="PasswordReset-btn" content="一键修改"></cus-button>
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