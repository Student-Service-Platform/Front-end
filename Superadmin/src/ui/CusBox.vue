<!--
Author: 杨龙辉
Description: 基础方框组件
CreatedAt: 2024.9.29 21:39
Latest: 2024.10.2 16:59

Args: 
    input   true为输入框(textarea) false为文本显示(p)
    content 输入框为placeholder 文本即为文本
    h,w     为此元素宽和高
    textAlign   列表可用元素  -  不推荐对textarea使用
        left    字体靠左
        right   字体靠右
        top     字体靠上
        bottom  字体靠下
        以上可以组合使用
        center  字体居中
        centerL 字体垂直居中且靠左
        centerR 字体垂直居中且靠右
        centerT 字体水平居中且靠上
        centerB 字体水平居中且靠下
-->

<template>
  <div :style="{ width: w, height: h }">
    <textarea v-if="input" :placeholder="content" v-model="val"></textarea>
    <p v-else-if="content!=undefined" :class="textAlign">{{ content }}</p>
    <slot></slot>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    input: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      required: false
    },
    h: {
      type: String,
      default: '200px'
    },
    w: {
      type: String,
      default: '200px'
    },
    textAlign: Array,
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
  margin: 0;
  padding: 0;
  position: relative;
  background: rgb(246, 246, 246);
  border: 1px solid rgb(220, 220, 220);
  box-sizing: border-box;
}
div > * {
  margin: 0;
  padding: 0;
  border-radius: 0;
  border-width: 2px;
  border-color: #dcdcdc;
}
p {
  user-select: none;
  position: absolute;
  display: block;
  color: rgb(82, 82, 82);
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
}
textarea {
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  resize: none;
}

.left {
  left: 0;
}
.right {
  right: 0;
}
.top {
  top: 0;
}
.bottom {
  bottom: 0;
}
.center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.centerL {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.centerT {
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
.centerR {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.centerB {
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
</style>
