<!-- 普管 垃圾信息扩展页面 -->
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
      :default="4"
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
        content="显示标题"
        h="60px"
        w="704px"
        :textAlign="['center', 'top']"
      ></cus-box>
    </div>
    <!-- 第二行：问题类别 -->
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
        h="236px"
        w="141px"
        :textAlign="['center', 'top']"
      ></cus-box>
      <cus-box
        :input="false"
        content="显示内容"
        h="236px"
        w="704px"
        :textAlign="['left', 'top']"
      ></cus-box>
    </div>

    <!-- 第五行：照片 -->
    <div style="display: flex">
      <cus-box
        :input="false"
        content="照片"
        h="274px"
        w="141px"
        :textAlign="['center', 'top']"
      ></cus-box>
      <cus-box
        :input="false"
        content="显示图片缩略图"
        h="274px"
        w="704px"
        :textAlign="['left', 'top']"
      ></cus-box>
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
