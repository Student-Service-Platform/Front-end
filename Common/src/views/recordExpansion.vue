<script>
  // 引入自定义组件和图片资源
  import CusBox from "@/ui/CusBox.vue"; // 自定义盒子组件，可以显示内容或输入框
  import CusButton from "@/ui/CusButton.vue"; // 自定义按钮组件
  import CusButton2 from "@/ui/CusButton2.vue"; // 另一个自定义按钮组件
  import CusColumn from "@/ui/CusColumn.vue"; // 自定义列组件，显示选项菜单
  import CusInput from "@/ui/CusInput.vue"; // 自定义输入栏组件
  import CusSwitch from "@/ui/CusSwitch.vue"; // 自定义开关组件
  import CusCheckbox from "@/ui/CusCheckbox.vue"; // 自定义复选框组件
  import User from "@/assets/User.png" // 引入用户图片

export default {
    // 注册上述引入的组件，供模板使用
    components: {
        CusBox,
        CusButton,
        CusButton2,
        CusColumn,
        CusInput,
        CusSwitch,
        CusCheckbox
    },
    data () {
        // 定义数据 user，存储图片路径，供输入栏组件使用
        return {
            user:User
        }
    }
}
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
    <!-- 第一行：标题 -->
    <div style="display: flex;">
      <cus-box :input="false" content="标题" h="60px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="显示标题" h="60px" w="704px" :textAlign="['center', 'top']"></cus-box>
    </div>

    <!-- 第二行：是否紧急等 -->
    <div style="display: flex;">
      <cus-box :input="false" content="紧急度 5 4 3 2 1 是否匿名 是否处理" h="60px" w="704px" :textAlign="['left', 'top']"></cus-box>
    </div>

    <!-- 第三行：问题类别 -->
    <div style="display: flex;">
      <cus-box :input="false" content="问题类别" h="60px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="学术与课程 财务与奖学金 餐饮与住宿 技术与设施 安全与行政" h="60px" w="704px" :textAlign="['left', 'top']"></cus-box>
    </div>

    <!-- 第四行：内容 -->
    <div style="display: flex;">
      <cus-box :input="false" content="内容" h="109px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="显示内容" h="109px" w="704px" :textAlign="['left', 'top']"></cus-box>
    </div>

    <!-- 第五行：照片 -->
    <div style="display: flex;">
      <cus-box :input="false" content="照片" h="70px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="显示图片缩略图" h="70px" w="704px" :textAlign="['left', 'top']"></cus-box>
    </div>

    <!-- 第六行：回复 -->
    <div style="display: flex;">
      <cus-box :input="false" content="回复" h="144px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <cus-box :input="false" content="显示回复" h="144px" w="704px" :textAlign="['left', 'top']"></cus-box>
    </div>

    <!-- 第七行：回复 评分 -->
    <div style="display: flex;">
      <cus-box :input="false" content="回复" h="133px" w="141px" :textAlign="['center', 'top']"></cus-box>
      <div style="display: flex; flex-direction: column; width: 704px;">
        <cus-box :input="false" content="5 4 3 2 1" h="39px" w="704px" :textAlign="['left', 'top']"></cus-box>
        <cus-box :input="false" content="请输入评价" h="96px" w="704px" :textAlign="['left', 'top']"></cus-box>
      </div>
    </div>

    <!-- 第八行：提交评价按钮 -->
    <!-- <div style="display: flex; justify-content: center; margin-top: 20px;">
      <cus-button2 content="提交评价"></cus-button2>
    </div> -->

  </div>

  <RouterView />
</template>

<style scoped>
/* 去除列与列之间的间隙 */
</style>
