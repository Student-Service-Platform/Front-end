<!--
Author: 杨龙辉
Description: 基础滑动按钮组件
CreatedAt: 2024.9.29 20:59
Latest: 2024.9.29 20:59
-->

<template>
  <div>
    <span>{{ content }}</span>
    <input type="checkbox" v-model="checked" />
  </div>
</template>

<script>
export default {
  props: {
    content: String
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style scoped>
div {
  position: absolute;
  height: 20px;
  width: auto;
}
span {
  position: relative;
  height: 20px;
  text-wrap: nowrap;
  margin-top: 3px;
  margin-right: 30px;
  color: rgb(82, 82, 82);
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
}

input {
  position: absolute;
  appearance: none;
  top: 0;
  right: 0;
  cursor: pointer;
}

input::after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #fdfdfd;
  box-shadow: 1px 1px rgba(211, 211, 211, 0.5);
}
input::before {
  content: '';
  display: block;
  position: absolute;
  width: 36px;
  height: 20px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 2px 2px rgba(211, 211, 211, 0.5);
}
input:checked::before {
  background-color: #51c0ff;
}
input:checked::after {
  transform: translateX(16px);
}
</style>
