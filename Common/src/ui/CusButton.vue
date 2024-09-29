<!--
Author: 杨龙辉
Description: 基础按钮组件
CreatedAt: 2024.9.29 20:34
Latest: 2024.9.29 20:34
-->

<template>
    <button>{{ content }}</button>
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style scoped>
button{
    position: absolute;
    width: 308px;
    height: 36px;
    background: rgb(82, 176, 181);
    border-radius: 4px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 阿里巴巴普惠体;
    cursor: pointer;
}

button:active{
    background: rgb(66, 144, 148);
}

</style>