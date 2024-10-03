<script setup lang="ts">
import CusInput from '@/ui/CusInput.vue';
import Checkbox from '@/ui/CusCheckbox.vue';
import CusButton from '@/ui/CusButton.vue';
import AugmentedReality from "@/assets/AugmentedReality.png";
import password from "@/assets/password.png";
import code from "@/assets/code.png";
</script>

<template>
    <div class="login">
        <h1>登录</h1>
        <cus-input class="input" :path="AugmentedReality" content="请输入ID" required style="top:105px"></cus-input>
        <cus-input class="input" :path="password" content="请输入密码" required style="top:155px"></cus-input>
        <cus-input class="input" :path="code" content="请输入验证码" required style="top:205px"></cus-input>
        <checkbox class="check-box" content="管理员"></checkbox>
        <p class="little-words" type="button" style="left:57%;">忘记密码</p>
        <cus-button class="login-btn" content="登录"></cus-button>
    </div>
</template>

<style scoped>
.login {
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    width: 401px;
    height: 370px;
    background: rgb(255, 255, 255);
    border-radius: 16px;
    box-shadow: 2px 2px lightgray;
}
.login>h1{
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    font-family: 阿里巴巴普惠体;
    font-size: 24px;
    font-weight: 550;
    letter-spacing: 0%;
    text-align: center;
}
.input{
    position: absolute;
    left: 46.5px;
}
.check-box{
    top: 265px;
    left: 46.5px;
    color:rgb(140, 140, 140);
    font-weight: 400;
}
div>p{
    margin: 0;
    padding: 0;
    position: absolute;
    right: 46.5px;
    transform: translateX(50%);
    top: 265px;
    color:rgb(140, 140, 140);
    font-weight: 400;
    cursor: pointer;
}
.login-btn{
    position: absolute;
    left: 46.5px;
    bottom: 35px;
}
</style>
