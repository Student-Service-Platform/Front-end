<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CusBox from '@/ui/CusBox.vue';         // 引入 CusBox 组件
import CusColumn from '@/ui/CusColumn.vue';   // 引入 CusColumn 组件
import CusButton2 from '@/ui/CusButton2.vue';
import { getProfeedbacks } from '@/apis/src/user';  // 引入封装的 API 方法
import router from '@/router';

// 定义 rows 数组来存储获取到的反馈数据
const rows = ref<Array<any>>([]);  // 使用 ref 来响应式存储数据
const code = ref<number>(0);       // 用于存储反馈序号
// 定义获取反馈数据的函数
const fetchFeedbacks = async () => {
  try {
    const response = await getProfeedbacks("123", 20, 0);
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

function jump(id:number) {
  router.push({name: "list", query: { id }})
}
</script>
<template>
  <header>
    <!-- 左侧菜单栏 -->
    <cus-column
      content="内容"
      :items="[ 
        { title: '用户中心', to: { name: 'user' } },
        { title: '反馈记录', to: { name: 'view' } },
        { title: '反馈提交', to: { name: 'record' } }
      ]"
      :default="1"
    ></cus-column>
  </header>

  <!-- 右侧表格 -->
  <div style="position:absolute; left:400px; top:70px;">
    <!-- 列头，包含“标题”到“操作” -->
    <div style="display: flex;">
      <cus-box :input="false" content="反馈序号" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="ID" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="标题" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="时间" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="问题类别" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="紧急度" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="是否匿名" h="60px" w="115px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="是否处理" h="60px" w="115px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="操作" h="60px" w="129px" :textAlign="['center', 'top']"></cus-box>
    </div>

    <!-- 根据 rows 数据动态生成反馈记录 -->
    <div v-for="(row, index) in rows" :key="index" style="display: flex;">
      <!-- 使用顶层的 code 来显示反馈序号 -->
      <cus-box :input="false" :content="index" h="60px" w="129px" :textAlign="['center']"></cus-box>
      <cus-box :input="false" :content="row.id" h="60px" w="129px" :textAlign="['center']"></cus-box>
      <cus-box :input="false" :content="row.title" h="60px" w="129px" :textAlign="['center']"></cus-box>
      <cus-box :input="false" :content="row.created_at" h="60px" w="129px" :textAlign="['center']"></cus-box>
      <cus-box :input="false" :content="row.category" h="60px" w="129px" :textAlign="['center']"></cus-box>
      <cus-box :input="false" :content="row.urgency" h="60px" w="129px" :textAlign="['center']"></cus-box>
      <cus-box :input="false" :content="row.username == '匿名用户' ? '是' : '否'" h="60px" w="115px" :textAlign="['center']"></cus-box>
      <cus-box :input="false" :content="row.status? '是' : '否'" h="60px" w="115px" :textAlign="['center']"></cus-box>
      <cus-box :input="false" h="60px" w="129px">
        <cus-button2 content="查看" style="left:30.5px;top:19.3px;" :click="()=>{jump(row.id)}"></cus-button2>
      </cus-box>
    </div>
  </div>

  <RouterView />
</template>


<style scoped>
/* 去除列与列之间的间隙 */
</style>
