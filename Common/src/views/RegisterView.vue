<script setup lang="ts">
import CusInput from '@/ui/CusInput.vue';
import CusButton from '@/ui/CusButton.vue';
import AugmentedReality from "@/assets/AugmentedReality.png";
import password from "@/assets/password.png";
import user from "@/assets/user.png";
import Mail from "@/assets/Mail.png";
import code from "@/assets/code.png";
import PhoneNumber from "@/assets/PhoneNumber.png";
</script>

<template>
    <div class="register">
        <h1 class="zhuce">注册</h1>
        <div class="input-container1">
            <cus-input :path="AugmentedReality" content="请输入学号" required></cus-input>
        </div>
        <div class="input-container2">
            <cus-input :path="user" content="请输入用户名" required></cus-input>
        </div>
        <div class="input-container3">
            <cus-input :path="password" content="请输入密码" required></cus-input>
        </div>
        <div class="input-container4">
            <cus-input :path="password" content="请再次输入密码" required></cus-input>
        </div>
        <div class="input-container5">
            <cus-input :path="Mail" content="请输入邮箱" required></cus-input>
        </div>
        <div class="input-container6">
            <cus-input :path="code" content="请输入验证码" required></cus-input>
        </div>
        <div class="input-container7">
            <cus-input :path="PhoneNumber" content="请输入手机号" required></cus-input>
        </div>
        <cus-button class="register-btn" content="注册"></cus-button>
        <cus-button class="code-btn" type="button" content="发送验证码"></cus-button>
    </div>
</template>

<style>
div.Rectange {
    z-index: 1;
    position: absolute;
    width: 430px;
    height: 500px;
    transform: translate(-50%, -50%);
    top: 55%;
    left: 50%;
    border-radius: 16px;
    background: rgb(255, 255, 255);
}
.zhuce {
    z-index: 2;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 33%;
    color: rgb(0, 0, 0);
    font-family: 阿里巴巴普惠体;
    font-size: 24px;
    font-weight: 550;
    line-height: 33px;
    letter-spacing: 0%;
    text-align: center;
}
.input-container1 {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40.7%;
    top: 38%;
}
.input-container2 {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40.7%;
    top: 43%;
}
.input-container3 {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40.7%;
    top: 48%;
}
.input-container4 {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40.7%;
    top: 53%;
}
.input-container5 {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40.7%;
    top:58%;
}
.input-container6 {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40.7%;
    top: 63%;
}
.input-container7 {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40.7%;
    top: 68%;
}
.register-btn {
    z-index: 3;
    font-size: 16px;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    background: rgb(82, 176, 181);
    border: none;
    padding: 10px 20px;
    width: 308px;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 75%;
}
.code-btn {
    z-index: 3;
    font-size: 16px;
    color: rgb(255, 255, 255);
    background: rgb(82, 176, 181);
    border: none;
    padding: 0;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    left: 53%;
    top: 58.4%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>