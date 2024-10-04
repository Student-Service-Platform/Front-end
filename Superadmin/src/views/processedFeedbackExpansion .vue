<!-- 超管 已处理反馈拓展 -->

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
          content="显示标题"
          h="60px"
          w="704px"
          :textAlign="['center', 'top']"
        ></cus-box>
      </div>
  
      <!-- 第二行：是否紧急等 -->
      <div style="display: flex">
        <cus-box :input="false" h="60px" w="845px">
          <cus-switch content="是否紧急" style="left: 10px; top: 19.3px"></cus-switch>
          <!-- <cus-button2 content="紧急度" style="left: 150px;top:20.5px;"></cus-button2>
              -->
          <span style="position: absolute; left: 150px; top: 20.5px">紧急度</span>
          <cus-checkbox
            v-for="(index, i) in 5"
            :key="i"
            :content="index"
            :style="{ position: 'absolute', left: 215 + i * 50 + 'px', top: '22px' }"
          ></cus-checkbox>
          <cus-switch content="是否匿名" style="left: 500px; top: 19.3px"></cus-switch>
          <cus-switch content="是否处理" style="left: 650px; top: 19.3px"></cus-switch>
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
            <cus-checkbox content="学术与课程" style="left: 0px; top: 19.3px"></cus-checkbox>
            <cus-checkbox content="财务与奖学金" style="left: 115px; top: 19.3px"></cus-checkbox>
            <cus-checkbox content="餐饮与住宿" style="left: 240px; top: 19.3px"></cus-checkbox>
            <cus-checkbox content="技术与设施" style="left: 355px; top: 19.3px"></cus-checkbox>
            <cus-checkbox content="安全与行政" style="left: 470px; top: 19.3px"></cus-checkbox>
            <cus-checkbox content="其他" style="left: 585px; top: 19.3px"></cus-checkbox>
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
          content="显示内容"
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
          content="显示回复"
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
          <cus-checkbox
            v-for="(index, i) in 5"
            :key="i"
            :content="index"
            :style="{ position: 'absolute', left: 70 + i * 70 + 'px', top: '11.5px' }"
          ></cus-checkbox>
  
          <cus-box
            :input="false"
            content="显示评价"
            h="90.5px"
            w="701px"
            :textAlign="['left', 'top']"
          ></cus-box>
        </div>
      </div>
    </div>
  
    <RouterView />
  </template>
  
  <script>
  // 引入自定义组件和图片资源
  import CusBox from '@/ui/CusBox.vue'
  import CusButton from '@/ui/CusButton.vue'
  import CusButton2 from '@/ui/CusButton2.vue'
  import CusColumn from '@/ui/CusColumn.vue'
  import CusInput from '@/ui/CusInput.vue'
  import CusSwitch from '@/ui/CusSwitch.vue'
  import CusCheckbox from '@/ui/CusCheckbox.vue'
  import User from '@/assets/User.png' // 引入用户图片
  
  export default {
    components: {
      CusBox,
      CusButton,
      CusButton2,
      CusColumn,
      CusInput,
      CusSwitch,
      CusCheckbox
    },
    data() {
      return {
        user: User
      }
    }
  }
  </script>
  
  <style scoped>
  /* 去除列与列之间的间隙 */
  </style>
  