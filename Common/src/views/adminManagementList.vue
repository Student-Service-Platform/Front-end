<!-- 超管 管理员管理 -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CusBox from '@/ui/CusBox.vue';         // 引入 CusBox 组件
import CusColumn from '@/ui/CusColumn.vue';   // 引入 CusColumn 组件
import CusButton2 from '@/ui/CusButton2.vue';
import { getAllUser, delAdmin } from '@/apis/src/superadmin';  // 引入封装的 API 方法

// 定义 rows 数组来存储获取到的管理员数据
const rows = ref<Array<any>>([]);  // 使用 ref 来响应式存储数据
const router = useRouter();  // 获取路由实例 新建管理员 跳转

// 定义获取管理员数据的函数
const fetchFeedbacks = async () => {
  try {
    const response = await getAllUser("admins", 0, 0);
    console.log(response);
    if (response.data.code == 200200) {
      // 假设 response.data 是包含管理员信息的数组
      rows.value = response.data.data;  // 将管理员数据存储在 rows 中
    } else {
      alert(response.data.msg);
    }
  } catch (error) {
    console.error('获取管理员数据失败:', error);
  }
};

// 删除管理员的函数
const handleDelete = async (userID: string, index: number) => {
  try {
    const response = await delAdmin(userID);
    if (response.data.code === 200200) {
      rows.value.splice(index, 1);  // 从 rows 中移除被删除的管理员
      alert('删除成功');
    } else {
      alert(response.data.msg);
    }
  } catch (error) {
    console.error('删除管理员失败:', error);
  }
};

// 跳转到新建管理员页面
const goToAddAdmin = () => {
  router.push({ name: 'addAdmin' });  // 替换为实际的路由名称
};

// 在组件挂载时获取管理员数据
onMounted(() => {
  fetchFeedbacks();
});
</script>

<template>
  <header>
    <!-- 左侧菜单栏 -->
    <cus-column content="内容" :items="[ 
      { title: '未处理反馈', select: () => {} }, 
      { title: '已处理反馈', select: () => {} },
      { title: '垃圾信息审核', select: () => {} },
      { title: '用户管理', select: () => {} },
      { title: '管理员管理', select: () => {} }
    ]" :default="1"></cus-column>
  </header>

  <!-- 右侧表格 -->
  <div style="position:absolute; left:400px; top:70px;">
    <!-- 列头，包含“标题”到“操作” -->
    <div style="display: flex;">
      <cus-box :input="false" h="60px" w="1022px" :textAlign="['center', 'top']">
        <cus-button2 style="left:45%;top:19.3px;" content="新建管理员" @click="goToAddAdmin"></cus-button2>
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

    <!-- 生成管理员数据 -->
    <div v-for="(row, index) in rows" :key="index" style="display: flex;">
      <cus-box :input="false" :content="row.user_id" h="60px" w="140px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.user_name" h="60px" w="140px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.password" h="60px" w="140px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.mail" h="60px" w="200px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" :content="row.phone" h="60px" w="200px" :textAlign="['center', 'top']" style="background-color: rgb(255, 255, 255);"></cus-box>
      <cus-box :input="false" h="60px" w="202px" style="background-color: rgb(255, 255, 255);">
        <cus-button2 content="查看" style="left:20.5px;top:19.3px;"></cus-button2>
        <cus-button2 content="删除" style="left:110.5px;top:19.3px;" @click="handleDelete(row.user_id, index)"></cus-button2>
      </cus-box>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
/* 去除列与列之间的间隙 */
</style>
