<!-- 假设所有的数据与用户提交反馈一致  -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CusBox from '@/ui/CusBox.vue';         // 引入 CusBox 组件
import CusColumn from '@/ui/CusColumn.vue';   // 引入 CusColumn 组件
import CusButton2 from '@/ui/CusButton2.vue';

import { getfeedbacks } from '@/apis/src/admin';  // 假设有一个这样的api
// 返回响应	
// title	
// description	
// category	
// urgency	
// 是否匿名	if_anonymous
// 图片	?
// 回复	respond
// 评价等级	eval_grade
// 评价内容	evaluation

// 定义 rows 数组来存储获取到的反馈数据
const code = ref<number>(0);       // 用于存储反馈序号
const user_id=123;
// 定义获取反馈数据的函数
const fetchFeedbacks = async () => {
  try {
    const response = await getfeedbacks(code);  //code就是帖子的序号
  } catch (error) {
    console.error('获取反馈数据失败:', error);
  }
};

// 在组件挂载时获取反馈数据
onMounted(() => {
  fetchFeedbacks();
});
</script>
<template>
  <header>
    <!-- 左侧菜单栏 -->
    <cus-column
      content="内容"
      :items="[
        { title: '未处理反馈', select: () => {} },
        { title: '已处理反馈', select: () => {} },
        { title: '垃圾信息', select: () => {} }
      ]"
      :default="1"
    ></cus-column>
  </header>

  <!-- 右侧表格 -->
  <div style="position: absolute; left: 400px; top: 70px">
    <!-- 第一行：标题 -->
    <div style="display: flex">
      <cus-box
        :input="false"
        content="标题"
        h="60px"
        w="141px"
        :textAlign="['center', 'top']"
      ></cus-box>
      <cus-box
        :input="false"
        content="responce.title"
        h="60px"
        w="704px"
        :textAlign="['center', 'top']"
      ></cus-box>
    </div>

    <!-- 第二行：是否紧急等 -->
    <div style="display: flex">
      <cus-box :input="false" h="60px" w="845px">
        <span style="position: absolute; left: 150px; top: 20.5px">紧急度</span>
        <cus-button2 content="responce.urgency" left:215px top:20.5px></cus-button2>
        <cus-switch style="left: 500px; top: 19.3px" content="是否匿名" :radio="response.if_anonymous"></cus-switch>

      </cus-box>
    </div>

    <!-- 第三行：问题类别 -->
    <div style="display: flex">
      <cus-box
        :input="false"
        content="问题类别"
        h="60px"
        w="141px"
        :textAlign="['center', 'top']"
      ></cus-box>

      <!-- 添加复选框行 -->
      <div style="position: relative; width: 704px">
        <cus-box :input="false" content="" h="60px" w="704px" :textAlign="['left', 'top']">
          <cus-button2 content="responce.category" left:15px top:20.5px></cus-button2>  
        </cus-box>
      </div>
    </div>

    <!-- 第四行：内容 -->
    <div style="display: flex">
      <cus-box
        :input="false"
        content="内容"
        h="109px"
        w="141px"
        :textAlign="['center', 'top']"
      ></cus-box>
      <cus-box
        :input="false"
        content="responce.description"
        h="109px"
        w="704px"
        :textAlign="['left', 'top']"
      ></cus-box>
    </div>

    <!-- 第五行：照片 -->
    <div style="display: flex">
      <cus-box
        :input="false"
        content="照片"
        h="70px"
        w="141px"
        :textAlign="['center', 'top']"
      ></cus-box>
      <cus-box
        :input="false"
        content="显示图片缩略图"
        h="70px"
        w="704px"
        :textAlign="['left', 'top']"
      ></cus-box>
    </div>

    <!-- 第六行：回复 -->
    <div style="display: flex">
      <cus-box
        :input="false"
        content="回复"
        h="144px"
        w="141px"
        :textAlign="['center', 'top']"
      ></cus-box>
      <cus-box
        :input="false"
        content="responce.respond"
        h="144px"
        w="704px"
        :textAlign="['left', 'top']"
      ></cus-box>
    </div>

    <!-- 第七行：回复 评分 -->
    <div style="display: flex; position: relative">
      <cus-box
        :input="false"
        content="回复"
        h="133px"
        w="141px"
        :textAlign="['center', 'top']"
      ></cus-box>

      <!-- 使用flex布局，显示复选框和评分数字 -->
      <div style="position: relative; width: 704px">
        <cus-box :input="false" h="39px" w="704px"></cus-box>
        <span style="position: absolute; left: 10px; top: 10.5px">等级</span>
        <cus-button2 content="responce.eval_grade" left:30px top:10.5px></cus-button2>  

        <cus-box
          :input="false"
          content="responce.evaluation"
          h="90.5px"
          w="701px"
          :textAlign="['left', 'top']"
        ></cus-box>
      </div>
    </div>
  </div>

  <RouterView />
</template>



<style scoped>
/* 去除列与列之间的间隙 */
</style>
