<script lang="ts">
// 引入自定义组件和图片资源
import CusBox from '@/ui/CusBox.vue' // 自定义盒子组件，可以显示内容或输入框
import CusButton from '@/ui/CusButton.vue' // 自定义按钮组件
import CusColumn from '@/ui/CusColumn.vue' // 自定义列组件，显示选项菜单
import CusCheckbox from '@/ui/CusCheckbox.vue' // 自定义复选框组件
import User from '@/assets/User.png' // 引入用户图片
import { getFeedback, putEvaluation } from '@/apis/src/feedback'


export default {
  props:{
    id: String 
  },
  // 注册上述引入的组件，供模板使用
  components: {
    CusBox,
    CusButton,
    CusColumn,
    CusCheckbox
  },
  data() {
    // 定义数据 user，存储图片路径，供输入栏组件使用
    return {
      user: User,
      loading: true,
      data: {
        "username": "",
        "created_at": "",
        "title": "",
        "description": "",
        "category": 0,
        "urgency": 0,
        "grade": 0,
        "grade_content": "",
        "undertaker": "",
        "status": false,
      },
      reply: [],
      rate: 5,
      content: ""
    }
  },
  mounted() {
    if (this.$route.query.id)
      getFeedback(this.$route.query.id).then(res=>{
        this.data = res.data.data.request
        this.reply = res.data.data.replies
        this.loading = false
        console.log(this.data)
      })
    else
      this.$router.push({name:"view"})
  },
  computed: {
    replies: {
      get(this) :string{
        if (this.reply == null)
          return "无"
        let s = ""
        for (let i of this.reply){
          s += i.respondent+": "+i.content+"\n"
        }
        return s
      }
    }
  },
  methods: {
    submit() {
      putEvaluation(this.$router.query.id, this.rate, this.content).then(res=>{
        alert(res.data.msg)
      }).catch(err=>{
        alert(err)
      })
    }
  }
}
</script>

<template>
  <header>
    <!-- 左侧菜单栏 -->
    <cus-column
      content="内容"
      :items="[
        { title: '反馈记录', to: { query: {id: $route.query.id}} },
        { title: '返回列表', to: { name: 'view' } }
      ]"
      :default="0"
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
        :content="data.title"
        h="60px"
        w="704px"
        :textAlign="['center', 'top']"
      ></cus-box>
    </div>

    <!-- 第二行：是否紧急等 -->
    <div style="display: flex">
      <cus-box :input="false" h="60px" w="845px" :textAlign="['left', 'top']">
        <div class="info">
          <span style="left: 6%">紧急度</span>
          <CusCheckbox style="left: 18%" content="5" :readonly="true" value="5" v-model:group="data.urgency"></CusCheckbox>
          <CusCheckbox style="left: 27%" content="4" :readonly="true" value="4" v-model:group="data.urgency"></CusCheckbox>
          <CusCheckbox style="left: 36%" content="3" :readonly="true" value="3" v-model:group="data.urgency"></CusCheckbox>
          <CusCheckbox style="left: 45%" content="2" :readonly="true" value="2" v-model:group="data.urgency"></CusCheckbox>
          <CusCheckbox style="left: 54%" content="1" :readonly="true" value="1" v-model:group="data.urgency"></CusCheckbox>
          <CusCheckbox style="left: 63%" content="0" :readonly="true" value="0" v-model:group="data.urgency"></CusCheckbox>
          <CusCheckbox style="left: 72%" content="是否匿名" :readonly="true" :radio="false" :set="data.username=='匿名用户'"></CusCheckbox>
          <CusCheckbox style="left: 85%" content="是否处理" :readonly="true" :radio="false" :set="data.status"></CusCheckbox>
        </div>
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
      <cus-box :input="false" h="60px" w="704px" :textAlign="['left', 'top']">
        <div class="info">
          <CusCheckbox style="left: 2%" content="学术与课程" :readonly="true" :value="0" v-model:group="data.category"></CusCheckbox>
          <CusCheckbox style="left: 19%" content="财务与奖学金" :readonly="true" :value="1" v-model:group="data.category"></CusCheckbox>
          <CusCheckbox style="left: 38%" content="餐饮与住宿" :readonly="true" :value="2" v-model:group="data.category"></CusCheckbox>
          <CusCheckbox style="left: 56%" content="技术与设施" :readonly="true" :value="3" v-model:group="data.category"></CusCheckbox>
          <CusCheckbox style="left: 73%" content="安全与行政" :readonly="true" :value="4" v-model:group="data.category"></CusCheckbox>
          <CusCheckbox style="left: 90%" content="其他" :readonly="true" :value="5" v-model:group="data.category"></CusCheckbox>
        </div>
      </cus-box>
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
        :content="data.description"
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
        :content="replies"
        h="144px"
        w="704px"
        :textAlign="['left', 'top']"
      ></cus-box>
    </div>

    <!-- 第七行：回复 评分 -->
    <div style="display: flex">
      <cus-box
        :input="false"
        content="回复"
        h="133px"
        w="141px"
        :textAlign="['center', 'top']"
      ></cus-box>
      <div style="display: flex; flex-direction: column; width: 704px">
        <cus-box :input="false" h="39px" w="704px" :textAlign="['left', 'top']">
          <div class="info">
            <CusCheckbox style="left: 10%" content="5" v-model:group="rate" :value="5"></CusCheckbox>
            <CusCheckbox style="left: 25%" content="4" v-model:group="rate" :value="4"></CusCheckbox>
            <CusCheckbox style="left: 40%" content="3" v-model:group="rate" :value="3"></CusCheckbox>
            <CusCheckbox style="left: 55%" content="2" v-model:group="rate" :value="2"></CusCheckbox>
            <CusCheckbox style="left: 70%" content="1" v-model:group="rate" :value="1"></CusCheckbox>
          </div>
        </cus-box>
        <cus-box
          :input="true"
          content="请输入评价"
          v-model="content"
          h="96px"
          w="704px"
          :textAlign="['left', 'top']"
        ></cus-box>
      </div>
    </div>
    <cus-button content="提交评价" style="position: absolute; top: 670px; left: 268px" :click="submit"></cus-button>
    <!-- 第八行：提交评价按钮 -->
    <!-- <div style="display: flex; justify-content: center; margin-top: 20px;">
      <cus-button2 content="提交评价"></cus-button2>
    </div> -->
  </div>

  <RouterView />
</template>

<style scoped>
/* 去除列与列之间的间隙 */
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
