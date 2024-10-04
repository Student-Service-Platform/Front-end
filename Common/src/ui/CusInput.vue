<!--
Author: 杨龙辉
Description: 基础输入框组件
CreatedAt: 2024.9.29 20:02
Latest: 2024.10.2 17:04
-->

<template>
  <div>
    <img :src="path" />
    <input :placeholder="content" :style="{ width: width ? width : '308px' }" v-model="val" />
  </div>
</template>

<script lang="ts">
import err from '@/assets/404.png'
import { ref, watch } from 'vue'

export default {
  name: 'cus-input',
  props: {
    path: {
      type: String,
      default: err
    },
    content: String,
    width: String,
    modelValue: String
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const val = ref(props.modelValue)
    watch(
      () => val.value,
      (data) => emit('update:modelValue', data)
    )

    return {
      val
    }
  }
}
</script>

<style scoped>
div {
  position: absolute;
}
input {
  position: absolute;
  width: 308px;
  height: 36px;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 4px;
  box-sizing: border-box;
  padding-left: 48px;
}
img {
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
  color: rgb(140, 140, 140);
  font-family: 阿里巴巴普惠体;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
}
</style>
