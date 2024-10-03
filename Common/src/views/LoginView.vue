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
        <h1 class="denglu">登录</h1>
        <div class="input-container1">
            <cus-input :path="AugmentedReality" content="请输入ID" required></cus-input>
        </div>
        <div class="input-container2">
            <cus-input :path="password" content="请输入密码" required></cus-input>
        </div>
        <div>
            <cus-input class="input-container3" :path="code" content="请输入验证码" required></cus-input>
        </div>
        <div class="check-box">
            <checkbox content="管理员"></checkbox>
        </div>
        <div class="little-words">
        <p type="button" style="left:57%;">忘记密码</p>
        </div>
        <cus-button content="登录"></cus-button>
    </div>
</template>

<style scoped>
div.Rectange189 {
    z-index: 1;
    position: absolute;
    width: 430px;
    height: 370px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 16px;
    background: rgb(255, 255, 255);
}
.denglu {
    z-index: 2;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 35%;
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
    top: 43%;
}
.input-container2 {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40.7%;
    top: 48%;
}
.input-container3 {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 40.7%;
    top: 53%;
}
p {
    z-index: 3;
    color: rgb(140, 140, 140);
    font-family: 阿里巴巴普惠体;
    top:57.5%;
    font-size: 14px;
    transform: translate(-50%, -50%);
    position: absolute;
    cursor: pointer;
}
.check-box {
    z-index: 3;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 41.5%;
    top: 58%;
    color: rgb(140, 140, 140);
}
.login-btn {
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
    top: 64%;
}
</style>


