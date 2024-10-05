 <!-- 用户反馈提交界面 
 问题1：使用了响应式，绑上逻辑后，发现在网页输入，控制台不会改变内容
 问题2：checkbox是bool category为数字 不能直接使用 我写了一版转换的methods（31行 59行  138行 但由于控制台不会改变内容 不知是否有效 -->

<script lang="ts">
// 引入自定义组件和图片资源
import CusBox from '@/ui/CusBox.vue' // 自定义盒子组件，用于显示内容或输入框
import CusButton from '@/ui/CusButton.vue' // 自定义按钮组件
import CusColumn from '@/ui/CusColumn.vue' // 自定义列组件，显示选项菜单
import CusCheckbox from '@/ui/CusCheckbox.vue' // 自定义复选框组件
import CusSwitch from '@/ui/CusSwitch.vue' // 自定义开关组件
import User from '@/assets/User.png' // 用户图片
import { postFeedback } from '@/apis/src/user' // 引入提交反馈的API方法

export default {
  // 注册组件，供模板使用
  components: {
    CusBox,
    CusButton,
    CusCheckbox,
    CusColumn,
    CusSwitch
  },
  data() {
    // 定义响应式数据，用于绑定到输入框和表单元素
    return {
      user: User, // 用户图片
      category: 0, // 反馈类别，默认值为0
      title: '', // 反馈标题
      description: '', // 反馈描述
      isUrgent: false, // 是否为紧急反馈
      isAnonymous: false, // 是否匿名
      postFeedback
    }
  },
  methods: {
    /**
     * 提交反馈逻辑
     * 调用后端API，将用户输入的数据发送到服务器
     */
    async submitFeedback() {
      // 校验输入，确保用户填写了标题和描述
      if (!this.title.trim() || !this.description.trim()) {
        alert('标题和内容不能为空');
        return;
      }

      // 组织提交数据
      const postData = {
        title: this.title, // 标题
        category: this.category, // 类别
        is_urgent: this.isUrgent, // 是否紧急
        if_anonymous: this.isAnonymous, // 是否匿名
        description: this.description // 反馈描述
      };
      
      try {
        // 调用API提交反馈
        const response = await postFeedback('userID', postData); // 假设你有userID

        // 检查响应状态，如果提交成功，提示用户
        if (response.data.code === 200200) {
          alert('反馈提交成功！');
          // 跳转反馈列表
          this.$router.push({name:"view"})
        } else {
          alert(response.data.msg)
        }
      } catch (error) {
        // 处理提交失败的情况
        console.error('提交反馈时发生错误:', error);
        alert('提交失败，请稍后重试！');
      }
    }
  }
}
</script>

<template>
  <header>
    <!-- 左侧菜单栏，显示用户中心、反馈记录、反馈提交 -->
    <cus-column
      content="内容"
      :items="[ // 菜单项
        { title: '用户中心', to: { name: 'user' } },
        { title: '反馈记录', to: { name: 'view' } },
        { title: '反馈提交', to: { name: 'record' } }
      ]"
      :default="2"  
    ></cus-column>
    <!-- 默认选中“反馈提交” -->
  </header>

  <!-- 右侧表单区域 -->
  <div style="position: absolute; left: 500px; top: 100px">
    <!-- 第一行：标题 -->
    <div style="display: flex">
      <!-- 标题标签 -->
      <cus-box :input="false" content="标题" h="60px" w="141px" :textAlign="['center']"></cus-box>
      <!-- 标题输入框 -->
      <cus-box
        :input="true"
        content="请输入标题"
        h="60px"
        w="704px"
        :textAlign="['centerL']"
        v-model="title"
      ></cus-box>
       <!-- 绑定标题输入框 -->
    </div>

    <!-- 第二行：是否紧急、是否匿名 -->
    <div style="display: flex">
      <cus-box :input="false" h="60px" w="845px" :textAlign="['left', 'top']">
        <div class="info">
          <!-- 是否紧急开关 -->
          <CusSwitch  style="left: 25%" content="是否紧急" :radio="true" v-model="isUrgent"></CusSwitch>
          <!-- 是否匿名开关 -->
          <CusSwitch  style="right: 25%" content="是否匿名" :radio="true" v-model="isAnonymous"></CusSwitch>
        </div>
      </cus-box>
    </div>

    <!-- 第三行：问题类别选择 -->
    <div style="display: flex">
      <cus-box :input="false" content="问题类别" h="60px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" h="60px" w="704px" :textAlign="['left', 'top']">
        <div class="info">
          <!-- 类别复选框 -->
          <CusCheckbox style="left: 2%" content="学术与课程" :value="0" v-model:group="category"></CusCheckbox>
          <CusCheckbox style="left: 19%" content="财务与奖学金" :value="1" v-model:group="category"></CusCheckbox>
          <CusCheckbox style="left: 38%" content="餐饮与住宿" :value="2" v-model:group="category"></CusCheckbox>
          <CusCheckbox style="left: 56%" content="技术与设施" :value="3" v-model:group="category"></CusCheckbox>
          <CusCheckbox style="left: 73%" content="安全与行政" :value="4" v-model:group="category"></CusCheckbox>
          <CusCheckbox style="left: 90%" content="其他" :value="5" v-model:group="category"></CusCheckbox>
        </div>
      </cus-box>
    </div>

    <!-- 第四行：反馈内容 -->
    <div style="display: flex">
      <cus-box :input="false" content="内容" h="287px" w="141px" :textAlign="['center']"></cus-box>
      <cus-box
        :input="true"
        content="请输入内容"
        h="287px"
        w="704px"
        :textAlign="['left']"
        v-model="description" 
      ></cus-box>
      <!-- 绑定反馈内容输入框 -->
    </div>

    <!-- 第五行：上传照片 -->
    <div style="display: flex">
      <cus-box :input="false" content="照片" h="161px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="上传图片" h="161px" w="704px" :textAlign="['left', 'top']"></cus-box>
    </div>

    <!-- 提交按钮 -->
    <cus-button
      content="提交"
      style="position: absolute; top: 670px; left: 268px"
      @click="submitFeedback"
    ></cus-button>
     <!-- 点击事件，调用提交逻辑 -->
  </div>
</template>

<style scoped>
/* 去除复选框布局之间的间隙 */
.info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.info > * {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
