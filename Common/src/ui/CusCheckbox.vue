<!--
Author: 杨龙辉
Description: 基础复选框组件
CreatedAt: 2024.9.29 20:21
Latest: 2024.9.29 20:21

Arg:
    readonly 决定是否只读
    radio 决定是复选框true还是单选框false
    复选框：
        value 此复选框对应的值
        group 此复选框所属的组别的编号
        可实现一组选一灭一且group绑定的值指向需要的值的效果
    单选框：
        modelValue 绑定的值
-->

<template>
  <div>
    <input
      v-if="radio"
      type="checkbox"
      :disabled="readonly"
      :checked="selected"
      @click="$emit('update:group', value)"
    />
    <input v-else type="checkbox" :disabled="readonly" v-model="check"/>
    <span>{{ content }}</span>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'

export default {
  props: {
    content: String,
    radio: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    group: Number,
    value: Number,
    modelValue: Boolean
  },
  emits: ['update:group', 'update:modelValue'],
  setup(props, { emit }) {
    if (props.radio) return
    const check = ref(props.modelValue)
    watch(
      () => check.value,
      (data) => emit('update:modelValue', data)
    )
    return {
      check
    }
  },
  computed:{
    selected: {
      get() {
        return this.group == this.value
      }
    }
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
  left: 30px;
  text-wrap: nowrap;
  height: 20px;
  font-family: 阿里巴巴普惠体;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
}
input {
  position: absolute;
  top: 2px;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  cursor: pointer;
}
input:checked {
  visibility: hidden;
}
input::after {
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
input:checked::after {
  content: '✓';
  color: #fff;
  font-size: 10px;
  line-height: 15px;
  background-color: #51c0ff;
}
</style>
