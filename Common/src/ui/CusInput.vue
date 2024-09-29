<!--
Author: 杨龙辉
Description: 基础输入框组件
CreatedAt: 2024.9.29 20:02
Latest: 2024.9.29 20:02
-->

<template>
    <div>
        <img :src="path" /> 
        <input :placeholder="content" />
    </div>
</template>

<script lang="ts">
export default {
    name: "cus-input",
    props: {
        path: String,
        content: String,
    }
}
</script>

<style scoped>
div{
    position: absolute;
}
input{
position: absolute;
width: 308px;
height: 36px;
border: 1px solid rgb(217, 217, 217);
border-radius: 4px;
box-sizing: border-box;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
img{
    z-index: 1;
    position: absolute;
    top: 10px;
    left: 16px;
    width: 16px;
    height: 16px;
}
input::placeholder {
    position: absolute;
    top: 8px;
    left: 48px;
    width: 55px;
    height: 20px;
    color: rgb(140, 140, 140);
    font-family: 阿里巴巴普惠体;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;

}
</style>