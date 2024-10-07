<!--
Author: 杨龙辉
Description: 导航栏
CreatedAt: 2024.10.2 18:50
Latest: 2024.10.2 18:50
-->

<script lang="ts">
import home from '@/assets/home.png'
import userIcon from '@/assets/User.png'
import router from '@/router';

export default {
  data() {
    return {
      home: home,
      userIcon: userIcon,
      userID: '',
      router:router.currentRoute
    }
  },
  mounted() {
    this.reload()
  },
  watch:{
    router(){
      this.reload()
      console.log("re")
    }
  },
  methods:{
    reload() {
      const id = this.$cookies.get("user_id")
    if (id)
      this.userID = id
    else
      this.userID = ""
    }
  }
}
</script>

<template>
  <div class="navRoot">
    <div class="navIcon">
      <img :src="home" />
      <span>学生综合服务系统</span>
    </div>
    <input class="navSearch" v-if="false" />
    <div class="navUser" v-if="userID">
      <span>{{ userID }}</span>
      <img :src="userIcon" />
    </div>
  </div>
</template>

<style>
.navRoot {
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 5;
  height: 62px;
  background: rgb(28, 30, 32);
}
.navIcon {
  left: 4.92%;
  position: absolute;
  height: 24px;
  top: 19px;
}
.navIcon > img {
  left: 0;
  top: 0;
  position: absolute;
  width: 24px;
  height: 24px;
}
.navIcon > span {
  left: 30px;
  position: absolute;
  top: -6px;
  width: 199px;
  height: 42px;
  color: rgb(255, 255, 255);
  font-family: 思源黑体;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0px;
  text-align: left;
}
.navUser {
  right: 4%;
  position: absolute;
  height: 24px;
  top: 19px;
}
.navUser > img {
  right: 0;
  top: 0;
  position: absolute;
  width: 24px;
  height: 24px;
}
.navUser > span {
  right: 36px;
  position: absolute;
  top: -6px;
  height: 42px;
  color: rgb(255, 255, 255);
  font-family: 思源黑体;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0px;
  text-align: left;
}
</style>
