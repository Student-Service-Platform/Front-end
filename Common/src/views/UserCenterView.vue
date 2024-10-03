<!--style标签未加scoped，类型名特殊，否则不知道怎么使用户ID不可修改-->


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
  <div class="UserCenter">
    <header>
        <h1 class="jntm">用户中心</h1>
        <cus-input style="top:23%;" class="inputjntm disabled-input" :path="AugmentedReality" content="用户ID" required></cus-input>
        <cus-input style="top:35%;" class="inputjntm" :path="user" content="请更改用户名" required></cus-input>
        <cus-input style="top:47%;" class="inputjntm" :path="password" content="请更改密码" required></cus-input>
        <cus-input style="top:59%;" class="inputjntm" :path="Mail" content="请更改邮箱" required></cus-input>
        <cus-input style="top:71%;" class="inputjntm" :path="PhoneNumber" content="请更改手机号" required></cus-input>
        <cus-button class="save-btn-jntm" content="保存更改"></cus-button>
    </header>
  </div>

</template>

<style>
.UserCenter {
    border-radius: 16px;
    background: rgb(255, 255, 255);
    box-shadow: 2px 2px lightgray;
    z-index: 1;
    position: absolute;
    width: 430px;
    height: 400px;
    transform: translate(-50%, -50%);
    top: 53%;
    left: 65%;
}
.jntm {
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

.inputjntm {
    z-index: 3;
    position: absolute;
    left: 61px;
}
.save-btn-jntm {
    z-index: 3;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 83%;
}
.disabled-input input {  
    pointer-events: none;
    background-color: #f9f9f9;
    opacity: 0.6;
}
</style>