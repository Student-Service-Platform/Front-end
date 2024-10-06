<script lang="ts">
import CusInput from '@/ui/CusInput.vue'
import CusButton from '@/ui/CusButton.vue'
import CusColumn from '@/ui/CusColumn.vue'
import AugmentedReality from '@/assets/AugmentedReality.png'
import password from '@/assets/password.png'
import user from '@/assets/user.png'
import Mail from '@/assets/Mail.png'
import PhoneNumber from '@/assets/PhoneNumber.png'
import { getProfile, putProfile } from '@/apis/src/user'
import { onBeforeMount, ref } from 'vue'

export default {
   components: {
    CusButton,
    CusColumn,
    CusInput,
   },
   data() {
    return {
      AugmentedReality,
      password,
      user,
      Mail,
      PhoneNumber,
      data: {
        user_id: "",
        name: "",
        phone: "",
        mail: "",
        getProfile, 
        putProfile
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
   mounted() {
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
    logout(){
      this.$cookies.remove("user_id")
      localStorage.clear()
      this.$router.push("login")
    }
   }
   
}
</script>

<template>
  <header>
    <cus-column
      content="内容"
      :items="[
        { title: '用户中心', to: { name: 'user' } },
        { title: '反馈记录', to: { name: 'view' } },
        { title: '反馈提交', to: { name: 'record' } }
      ]"
      :default="0"
    ></cus-column>
  </header>
  <div class="UserCenter" v-if="loading">
    <h1 class="jntm">加载中。。。。</h1>
  </div>
  <div class="UserCenter" v-else>
    <h1 class="jntm">用户中心</h1>
    <cus-input
      style="top: 16%"
      class="inputjntm disabled-input"
      :path="AugmentedReality"
      content="用户ID"
      required
    ></cus-input>
    <cus-input
      style="top: 28%"
      class="inputjntm"
      :path="user"
      content="请更改用户名"
      required
    ></cus-input>
    <cus-input
      style="top: 40%"
      class="inputjntm"
      :path="password"
      content="请更改密码"
      required
    ></cus-input>
    <cus-input
      style="top: 52%"
      class="inputjntm"
      :path="Mail"
      content="请更改邮箱"
      required
    ></cus-input>
    <cus-input
      style="top: 64%"
      class="inputjntm"
      :path="PhoneNumber"
      content="请更改手机号"
      required
    ></cus-input>
    <cus-button class="save-btn-jntm" content="保存更改" @click="saveProfile"></cus-button>
    <cus-button class="tuichudenglu" content="退出登录" @click="logout"></cus-button>
</div>
</template>

<style scoped>
.UserCenter {
  border-radius: 16px;
  background: rgb(255, 255, 255);
  box-shadow: 2px 2px lightgray;
  z-index: 1;
  position: absolute;
  width: 430px;
  height: 500px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.jntm {
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

.inputjntm {
  z-index: 3;
  position: absolute;
  left: 61px;
}
.save-btn-jntm {
  z-index: 3;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 76%;
}
.tuichudenglu {
  z-index: 3;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 88%;
}
.disabled-input input {
  pointer-events: none;
  background-color: #f9f9f9;
  opacity: 0.6;
}
</style>
