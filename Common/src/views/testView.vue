<!--
此页仅作基础ui展示
-->

<script setup>
import CusBox from '@/ui/CusBox.vue'
import CusButton from '@/ui/CusButton.vue'
import CusButton2 from '@/ui/CusButton2.vue'
import CusColumn from '@/ui/CusColumn.vue'
import CusInput from '@/ui/CusInput.vue'
import CusSwitch from '@/ui/CusSwitch.vue'
import CusCheckbox from '@/ui/CusCheckbox.vue'
import user from '@/assets/User.png'
</script>

<template>
  <cus-column
    content="这是菜单"
    :items="[
      { title: '这是选项', select: () => {} },
      { title: '这是选项', select: () => {} }
    ]"
    :default="0"
  ></cus-column>
  <div style="position: absolute; left: 400px; top: 70px">
    <cus-box :input="true" content="这是输入框" h="200px" w="200px"></cus-box>
    <cus-box
      :input="false"
      content="这不是输入框"
      h="200px"
      w="200px"
      :textAlign="['left', 'top']"
    ></cus-box>
    <cus-button content="这是按钮"></cus-button>
    <cus-button2 content="这是按钮"></cus-button2>
    <cus-input :path="user" content="这是输入栏"></cus-input>
    <cus-switch content="这是滑动开关" style="top: 20px; left: 600px"></cus-switch>
    <cus-checkbox content="这是复选框" style="top: 120px; left: 600px"></cus-checkbox>
  </div>
</template>
