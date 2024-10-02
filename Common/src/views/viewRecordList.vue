<script setup lang="ts">
import CusBox from '@/ui/CusBox.vue';         // 引入 CusBox 组件
import CusColumn from '@/ui/CusColumn.vue';   // 引入 CusColumn 组件

// 模拟数据
const rows = Array(20).fill({
  title: "",
  time: "",
  category: "",
  urgency: "",
  anonymous: "",
  progress: "",
  action: "查看" 
});
</script>

<template>
  <header>
    <!-- 左侧菜单栏 -->
    <cus-column content="内容" :items="[
      {title: '反馈提交', select: () => {}}, 
      {title: '反馈记录', select: () => {}}
    ]"></cus-column>
  </header>

  <!-- 右侧表格 -->
  <div style="position:absolute; left:400px; top:70px;">
    <!-- 列头，包含“标题”到“操作” -->
    <div style="display: flex;">
      <cus-box :input="false" content="标题" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="时间" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="问题类别" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="是否紧急" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="是否匿名" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="处理进度" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="操作" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
    </div>

    <!-- 生成20行数据 -->
    <div v-for="(row, index) in rows" :key="index" style="display: flex;">
      <cus-box :input="false" :content="row.title" h="60px" w="129px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.time" h="60px" w="129px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.category" h="60px" w="129px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.urgency" h="60px" w="129px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.anonymous" h="60px" w="129px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.progress" h="60px" w="129px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.action" h="60px" w="129px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <!-- <cus-button2 content="这是按钮"></cus-button2>
      <cus-button2 content="这是按钮" style="position: absolute; top: 50px; left: 450px;"></cus-button2> -->
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
/* 去除列与列之间的间隙 */
</style>
