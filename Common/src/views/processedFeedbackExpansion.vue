<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CusBox from '@/ui/CusBox.vue';         // 引入 CusBox 组件
import CusColumn from '@/ui/CusColumn.vue';   // 引入 CusColumn 组件
import CusButton2 from '@/ui/CusButton2.vue';
import { getProFeedbacks } from '@/apis/src/admin';  // 引入封装的 API 方法
import router from '@/router';

// 定义 rows 数组来存储获取到的反馈数据
const rows = ref<Array<any>>([]);  // 使用 ref 来响应式存储数据
const code = ref<number>(0);       // 用于存储反馈序号
// 定义获取反馈数据的函数
const fetchFeedbacks = async () => {
  try {
    const response = await getProFeedbacks(20, 0);
    console.log(response)
    if (response.data.code == 200200)
    // 假设 response.data 是包含反馈信息的数组
      rows.value = response.data.data;  // 将反馈数据存储在 rows 中
    else {
      alert(response.data.msg)
      setInterval(()=>{
        router.push({name:"view"})
      }, 5000)
    }
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
      { title: '个人中心', to: { name: 'admincenter' } },
      { title: '未处理反馈', to: { name: 'unprocessed' } },
      { title: '已处理反馈', to: { name: 'processed' } },
      { title: '垃圾信息', to: { name: 'spam' } }
    ]"
    :default="2"
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
