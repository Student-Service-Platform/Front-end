<!--
Author: 杨龙辉
Description: 基础按钮组件
CreatedAt: 2024.9.29 22:11
Latest: 2024.9.29 22:11
-->
<template>
    <button>{{ content }}</button>
</template>

<script>
export default {
    props:{
        content: String
    }
}
</script>

<style scoped>
    button{
        position: absolute;
        height: 21.4px;
        padding-bottom: 3.7px;
        padding-left: 20px;
        padding-right: 20px;
        background: linear-gradient(-45.00deg, rgb(50, 152, 255),rgb(73, 101, 242));
        border-radius: 48px;
        border-style: none;
        color: rgb(255, 255, 255);
        font-family: 思源黑体;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        text-align: center;
        cursor: pointer;
    }
    button:active{
        background: linear-gradient(-45.00deg,rgb(73, 101, 242), rgb(50, 152, 255));
    }
</style>