<!--
Author: 杨龙辉
Description: 基础复选框组件
CreatedAt: 2024.9.29 20:21
Latest: 2024.9.29 20:21
-->

<template>
    <div>
        <input type="checkbox">
        <span>{{ content }}</span>
    </div>
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    div {
        position: absolute;
        height: 20px;
    }
    span {
        position: absolute;
        left: 38px;
        width: 42px;
        height: 20px;
        font-family: 阿里巴巴普惠体;
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0%;
        text-align: left;
    }
    input{
        position: absolute;
        top: 2px;
        width: 16px;
        height: 16px;
        border-radius: 4px;
        cursor: pointer;
    }
    input:checked{
        visibility: hidden;
    }
    input::after{
        position: absolute;
        top: 0;
        color: #000;
        width: 16px;
        height: 16px;
        display: inline-block;
        visibility: visible;
        padding-left: 0px;
        text-align: center;
        border-radius: 2px;
        content: ' ';
    }
    input:checked::after{
        content: "✓";
        color: #fff;
        font-size: 10px;
        line-height: 15px;
        background-color: #51C0FF;

    }

</style>