<script setup lang="ts">
import CusBox from '@/ui/CusBox.vue';         // 引入 CusBox 组件
import CusColumn from '@/ui/CusColumn.vue';   // 引入 CusColumn 组件
import CusButton2 from '@/ui/CusButton2.vue';

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
      {title: '反馈记录', to: {name:'view'}}, 
      {title: '反馈提交', to: {name:'record'}}
    ]" :default="0"></cus-column>
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
      <cus-box :input="false" h="60px" w="129px" style="background-color: rgb(255, 255, 255);">
        <cus-button2 content="查看" style="left:30.5px;top:19.3px;"></cus-button2>
      </cus-box>
      
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
/* 去除列与列之间的间隙 */
</style>
