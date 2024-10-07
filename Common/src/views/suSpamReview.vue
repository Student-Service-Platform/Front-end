<!-- 
超管垃圾信息审核 -->
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
 import { getFeedback } from '@/apis/src/feedback'
 import { putRubbish } from '@/apis/src/superadmin'
 export default {
  props:{
    id: String 
  },
  // 注册上述引入的组件，供模板使用
  components: {
    CusBox,
    CusButton,
    CusButton2,
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
      rate: 5
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
      get(this) : string {
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
  mounted() {
    if (this.$route.query.id) {
      getFeedback(this.$route.query.id).then(res => {
        this.data = res.data.data.request;
        this.reply = res.data.data.replies;
        this.loading = false;
      });
    } else {
      this.$router.push({ name: "view" });
    }
  },
  methods: {
    async confirmRubbish() {
      try {
        const response = await putRubbish(this.data.id, 1);
        if (response.code === 200) {
          console.log('确认成功:', response.msg);
        } else {
          console.error('确认失败:', response.msg);
        }
      } catch (error) {
        console.error('请求错误:', error);
      }
    },
    async revokeRubbish() {
      try {
        const response = await putRubbish(this.data.id, 0);
        if (response.code === 200) {
          console.log('撤销成功:', response.msg);
        } else {
          console.error('撤销失败:', response.msg);
        }
      } catch (error) {
        console.error('请求错误:', error);
      }
    }
  }
   
 }
 </script>
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
         content="data.title"
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
         content="data.description"
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
     <div style="display: flex">
      <cus-box :input="false" h="80px" w="845px" :textAlign="['center', 'top']">
        <cus-button @click="confirmRubbish" style="left: 10%; top: 19.3px" content="垃圾信息确认"></cus-button>
        <cus-button @click="revokeRubbish" style="left: 55%; top: 19.3px" content="垃圾信息撤销"></cus-button>
      </cus-box>
    </div>
   </div>
   
   <RouterView />
 </template>
 
 
 
 <style scoped>
 /* 去除列与列之间的间隙 */
 </style>
 