<!--
@description: 普通管理员个人界面
-->
<script lang="ts">
import CusInput from '@/ui/CusInput.vue'
import CusButton from '@/ui/CusButton.vue'
import CusColumn from '@/ui/CusColumn.vue'
import AugmentedReality from '@/assets/AugmentedReality.png'
import password from '@/assets/password.png'
import user from '@/assets/user.png'
import Mail from '@/assets/Mail.png'
import PhoneNumber from '@/assets/PhoneNumber.png'
import IconStepsFinished from '@/assets/IconStepsFinished.png'
import { getProfile } from '@/apis/src/admin'
import { putProfile } from '@/apis/src/user'

export default {
  data() {
    return {
      AugmentedReality,
      password,
      user,
      Mail,
      PhoneNumber,
      IconStepsFinished,
      data: {
        user_id: "",
        name: "",
        phone: "",
        mail: ""
      },
      loading: true,
      origin:{
        user_id: "",
        name: "",
        phone: "",
        mail: ""
      },
      pwd: ""
    }
  },
  components:{
    CusButton,
    CusInput,
    CusColumn
  },
  mounted(){
    const userID = this.$cookies.get("user_id")
    getProfile(userID).then(res=>{
        this.data.mail = res.data.data.mail
        this.data.name = res.data.data.name
        this.data.user_id = res.data.data.user_id
        this.data.phone = res.data.data.phone
        this.origin.mail = res.data.data.mail
        this.origin.name = res.data.data.name
        this.origin.user_id = res.data.data.user_id
        this.origin.phone = res.data.data.phone
        this.loading = false
       }).catch(()=>{
        alert("出错了。。。")
       })
    },
   methods:{
    saveProfile() {
      if(this.data.name!=this.origin.name)
        putProfile("username",this.data.name).then(res=>{alert(res.data.msg)})
      if(this.data.phone!=this.origin.phone)
        putProfile("phone",this.data.phone).then(res=>{alert(res.data.msg)})
      if(this.data.mail!=this.origin.mail)
        putProfile("mail",this.data.mail).then(res=>{alert(res.data.msg)})
      if(this.pwd != "")
        putProfile("password",this.pwd).then(res=>{alert(res.data.msg)})
    },
    logout() {
      this.$cookies.remove("user_id")
      localStorage.clear()
      this.$router.push({name:"login"})
    }
   }
}
</script>

<template>
  <header>
    <cus-column
      content="内容"
      :items="[
        { title: '个人中心', to: { name: 'admincenter' } },
        { title: '未处理反馈', to: { name: 'unprocessed' } },
        { title: '已处理反馈', to: { name: 'processed' } },
        { title: '垃圾信息', to: { name: 'spam' } }
      ]"
      :default="0"
    ></cus-column>
  </header>
  <div class="CommonAdminCenter" v-if="loading">
    <h1 class="jntm1">加载中</h1>
  </div>
  <div class="CommonAdminCenter" v-else>
    <h1 class="jntm1">普通管理员中心</h1>
    <cus-input
      style="top: 18%"
      class="inputjntm1 disabled-input1"
      :path="IconStepsFinished"
      content="管理员评分-(没做呢)"
    ></cus-input>
    <cus-input
      style="top: 29%"
      class="inputjntm1 disabled-input1"
      :path="AugmentedReality"
      content="管理员ID"
      v-model="data.user_id"
    ></cus-input>
    <cus-input
      style="top: 40%"
      class="inputjntm1"
      :path="user"
      content="管理员用户名"
      v-moudel="data.name"
    ></cus-input>
    <cus-input
      style="top: 51%"
      class="inputjntm1"
      :path="password"
      content="请更改密码"
      v-model="pwd"
      required
    ></cus-input>
    <cus-input
      style="top: 62%"
      class="inputjntm1"
      :path="Mail"
      content="请更改邮箱"
      v-model="data.mail"
      required
    ></cus-input>
    <cus-input
      style="top: 73%"
      class="inputjntm1"
      :path="PhoneNumber"
      content="请更改手机号"
      required
      ></cus-input>
    <cus-button class="btn" style="bottom: 62px;" content="保存更改" :click="saveProfile"></cus-button>
    <cus-button class="btn" style="bottom: 12px;" content="退出登录" :click="logout"></cus-button>
  </div>
</template>

<style scoped>
.CommonAdminCenter {
  border-radius: 16px;
  background: rgb(255, 255, 255);
  box-shadow: 2px 2px lightgray;
  z-index: 1;
  position: absolute;
  width: 430px;
  height: 550px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.jntm1 {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 10px;
  font-family: 阿里巴巴普惠体;
  font-size: 24px;
  font-weight: 550;
  letter-spacing: 0%;
  text-align: center;
}

.inputjntm1 {
  z-index: 3;
  position: absolute;
  left: 61px;
}
.btn {
  z-index: 3;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
}
.disabled-input1 {
  pointer-events: none;
  background-color: #f9f9f9;
  opacity: 0.6;
}
</style>
