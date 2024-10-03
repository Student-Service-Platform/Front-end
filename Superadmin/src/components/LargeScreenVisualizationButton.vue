// Author:韩磊
// Descripiton: 超级管理员 可视化 大屏 跳转按键
// CreatedAT：2024.10.1 10：00
// Latest：2024.10.3 12：30
<template>
  <div id="super-admin-visualization-button">
      <button class="button" style="top: 70%; left: 72%;">
          <p class="label">用户管理</p>
      </button>
      <button class="button" style="top: 76%; left: 72%;">
          <p class="label">管理员管理</p>
      </button>
      <button class="button" style="top: 82%; left: 72%;">
          <p class="label">垃圾信息管理</p>
      </button>
      <button class="button" style="top: 88%; left: 72%;">
          <p class="label">反馈管理</p>
      </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LargeScreenVisualizationButton'
}
</script>

<style scoped>
body {
  background-color: black;
}

.button {
  position: absolute;
  width: 20%;
  height: 4%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: rgb(82, 176, 181);
  padding: 4px 16px;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.label {
  color: #ffffff;
  font-family: 阿里巴巴普惠体;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  opacity: 0;
  animation: fadeIn 2s forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>