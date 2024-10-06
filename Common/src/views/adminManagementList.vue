<!-- 普通管理员 垃圾信息列表 -->

<script setup lang="ts">
import CusBox from '@/ui/CusBox.vue';         // 引入 CusBox 组件
import CusColumn from '@/ui/CusColumn.vue';   // 引入 CusColumn 组件
import CusButton2 from '@/ui/CusButton2.vue';

// 模拟数据
const rows = Array(20).fill({
  
  id: "",
  name: "",
  password: "",
  time: "",
  mail: "",
  phone: "",
  action: "" 
});
</script>

<template>
  <header>
    <!-- 左侧菜单栏 -->
    <cus-column content="内容" :items="[
      {title: '未处理反馈', select: () => {}}, 
      {title: '已处理反馈', select: () => {}},
      {title: '垃圾信息审核', select: () => {}},
      {title: '用户管理', select: () => {}},
      {title: '管理员管理', select: () => {}}
    ]" :default="1"></cus-column>
  </header>

  <!-- 右侧表格 -->
  <div style="position:absolute; left:400px; top:70px;">
    <!-- 列头，包含“标题”到“操作” -->
    <div style="display: flex;">
   <cus-box :input="false" h="60px" w="1022px" :textAlign="['center', 'top']">
          <cus-button2  style="left:45%;top:19.3px;" content="新建管理员"></cus-button2>   
    </cus-box>
  </div>
    <div style="display: flex;">
      <cus-box :input="false" content="ID" h="60px" w="140px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="管理员名" h="60px" w="140px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="密码" h="60px" w="140px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="邮箱" h="60px" w="200px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="手机号" h="60px" w="200px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="操作" h="60px" w="202px" :textAlign="['center', 'top']"></cus-box>
    </div>

    <!-- 生成20行数据 -->
    <div v-for="(row, index) in rows" :key="index" style="display: flex;">
      <cus-box :input="false" :content="row.number" h="60px" w="140px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.id" h="60px" w="140px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.title" h="60px" w="140px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.time" h="60px" w="200px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.anonymous" h="60px" w="200px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" h="60px" w="202px" style="background-color: rgb(255, 255, 255);">
        <cus-button2 content="查看" style="left:20.5px;top:19.3px;"></cus-button2>
        <cus-button2 content="删除" style="left:110.5px;top:19.3px;"></cus-button2>
      </cus-box>
      
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
/* 去除列与列之间的间隙 */
</style>
