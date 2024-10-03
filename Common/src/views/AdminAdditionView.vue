<script setup lang="ts">
import CusInput from '@/ui/CusInput.vue';
import CusButton from '@/ui/CusButton.vue';
import AugmentedReality from "@/assets/AugmentedReality.png";
import password from "@/assets/password.png";
import user from "@/assets/user.png";
import Mail from "@/assets/Mail.png";
import PhoneNumber from "@/assets/PhoneNumber.png";
</script>

<template>
    <div class="AdminAddition">
        <h1 class="xinjian">新建管理员</h1>
        <cus-input style="top:20%;" class="input" :path="AugmentedReality" content="请输入ID" required></cus-input>
        <cus-input style="top:31%;" class="input" :path="user" content="请输入用户名" required></cus-input>
        <cus-input style="top:42%;" class="input" :path="password" content="请输入密码" required></cus-input>
        <cus-input style="top:53%;" class="input" :path="password" content="请再次输入密码" required></cus-input>
        <cus-input style="top:64%;" class="input" :path="Mail" content="请输入邮箱" required></cus-input>
        <cus-input style="top:75%;" class="input" :path="PhoneNumber" content="请输入手机号" required></cus-input>
        <cus-button class="xinjian-btn" content="新建"></cus-button>
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