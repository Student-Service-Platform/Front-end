<script lang="ts">
  // 引入自定义组件和图片资源
  import CusBox from "@/ui/CusBox.vue"; // 自定义盒子组件，可以显示内容或输入框
  import CusButton from "@/ui/CusButton.vue"; // 自定义按钮组件
  import CusColumn from "@/ui/CusColumn.vue"; // 自定义列组件，显示选项菜单
  import CusCheckbox from "@/ui/CusCheckbox.vue"; // 自定义复选框组件
  import User from "@/assets/User.png" // 引入用户图片
  import CusSwitch from "@/ui/CusSwitch.vue";
  import { ref } from "vue";

export default {
    // 注册上述引入的组件，供模板使用
    components: {
        CusBox,
        CusButton,
        CusCheckbox,
        CusColumn,
        CusSwitch
    },
    data () {
        // 定义数据 user，存储图片路径，供输入栏组件使用
        return {
            user:User,
            category: ref(0),
        }
    }
}
</script>

<template>
  <header>
    <!-- 左侧菜单栏 -->
    <cus-column content="内容" :items="[ 
      {title: '反馈记录', to: {name:'view'}}, 
      {title: '反馈提交', to: {name:'record'}}
    ]" :default="1"></cus-column>
  </header>

  <!-- 右侧表格 -->
  <div style="position:absolute; left:400px; top:70px;">
    <!-- 第一行：标题 -->
    <div style="display: flex;">
      <cus-box :input="false" content="标题" h="60px" w="141px" :textAlign="['center']"></cus-box>
      <cus-box :input="true" content="请输入标题" h="60px" w="704px" :textAlign="['centerL']"></cus-box>
    </div>

    <!-- 第二行：是否紧急等 -->
    <div style="display: flex;">
      <cus-box :input="false" h="60px" w="845px" :textAlign="['left', 'top']">
        <div class="info">
          <CusSwitch style="left:25%;" content="是否紧急"></CusSwitch>
          <CusSwitch style="right:25%;" content="是否匿名"></CusSwitch>
        </div>
      </cus-box>
    </div>

    <!-- 第三行：问题类别 -->
    <div style="display: flex;">
      <cus-box :input="false" content="问题类别" h="60px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" h="60px" w="704px" :textAlign="['left', 'top']">
        <div class="info">
          <CusCheckbox style="left:2%;" content="学术与课程" :value="0" v-model="category"></CusCheckbox>
          <CusCheckbox style="left:19%;" content="财务与奖学金" :value="1" v-model="category"></CusCheckbox>
          <CusCheckbox style="left:38%;" content="餐饮与住宿" :value="2" v-model="category"></CusCheckbox>
          <CusCheckbox style="left:56%;" content="技术与设施" :value="3" v-model="category"></CusCheckbox>
          <CusCheckbox style="left:73%;" content="安全与行政" :value="4" v-model="category"></CusCheckbox>
          <CusCheckbox style="left:90%;" content="其他" :value="5" v-model="category"></CusCheckbox>
        </div>
      </cus-box>
    </div>

    <!-- 第四行：内容 -->
    <div style="display: flex;">
      <cus-box :input="false" content="内容" h="287px" w="141px" :textAlign="['center']"></cus-box>
      <cus-box :input="true" content="请输入内容" h="287px" w="704px" :textAlign="['left']"></cus-box>
    </div>

    <!-- 第五行：照片 -->
    <div style="display: flex;">
      <cus-box :input="false" content="照片" h="161px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="上传图片" h="161px" w="704px" :textAlign="['left', 'top']"></cus-box>
    </div>
    <cus-button content="提交" style="position: absolute; top: 670px; left: 268px;"></cus-button>

  </div>

  <RouterView />
</template>

<style scoped>
/* 去除列与列之间的间隙 */
.info{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.info>*{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>


