// Author:陈曦
// Descripiton: 超级管理员 可视化 大屏 管理员排行榜
// CreatedAT：2023.10.1 13：30
// Latest：2024.10.1 19：28
// NB:
// 1.在工作文件夹需要 npm install echarts --save (好像直接远程仓库搞不了？？)
// 2.在main.js 加上：
// import * as echarts from 'echarts';  // 导入整个 ECharts 模块
// app.config.globalProperties.$echarts = echarts;



<template>
    <div class="bar2-component">
      <!-- 管理员排行榜图例 -->
      <div class="legend-container">
        <div class="legend-icon"></div>
        <span class="legend-text">管理员排行榜</span>
      </div>
  
      <!-- 管理员评分与处理反馈数的表格 -->
      <table class="admin-table">
        <tr>
          <th class="table-header">排名</th>
          <th class="table-header">管理员用户名</th>
          <th class="table-header">评分</th>
          <th class="table-header">已处理反馈数</th>
        </tr>
        <tr v-for="(admin, index) in adminList" :key="index">
          <td class="table-data white-text">
            <!-- 仅对1-3名进行圆圈样式处理 -->
            <span v-if="index < 3" class="rank-circle">{{ admin.rank }}</span>
            <span v-else>{{ admin.rank }}</span>
          </td>
          <td class="table-data white-text">{{ admin.username }}</td>
          <td class="table-data white-text">{{ admin.score }}</td>
          <td class="table-data blue-text">{{ admin.feedbackCount }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FamKuiRankBar',
    data() {
      return {
        // 管理员数据
        adminList: [
          { rank: 1, username: 'admin0', score: 4.7, feedbackCount: 467 },
          { rank: 2, username: 'admin2', score: 4.6, feedbackCount: 423 },
          { rank: 3, username: 'admin4', score: 4.4, feedbackCount: 411 },
          { rank: 4, username: 'admin1', score: 4.2, feedbackCount: 199 },
          { rank: 5, username: 'admin7', score: 4.0, feedbackCount: 223 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .bar2-component {
    position: absolute;
    width: 505px;
    height: 264.52px;
    left: 135px;
    top: 479px;
    background-color: transparent;
    display: flex;
    flex-direction: column; /* 垂直布局 */
  }
  
  /* 管理员排行榜图例样式 */
  .legend-container {
    display: flex;
    align-items: center;
    justify-content: flex-end; /* 图例在右边 */
    margin-bottom: 10px;
  }
  
  .legend-icon {
    width: 20px;
    height: 20px;
    background: linear-gradient(to bottom, #248CF3, #000000); /* 渐变从蓝色到黑色 */
    margin-right: 10px; /* 小正方形在文字前面 */
  }
  
  .legend-text {
    color: white;
    font-size: 16px; /* 与bar1的反馈数字体大小相同 */
    text-align: right; /* 字体右对齐 */
  }
  
  /* 表格样式 */
  .admin-table {
    width: 100%; /* 表格占满宽度 */
    border-collapse: collapse;
  }
  
  .table-header {
    color: rgb(91, 98, 112);
    text-align: center;
    padding: 8px;
  }
  
  .table-data {
    padding: 8px;
    text-align: center;
    position: relative;
  }
  
  /* 白色字体 */
  .white-text {
    color: white;
  }
  
  /* 蓝色字体 */
  .blue-text {
    color: #248CF3;
  }
  
  /* 排名前1-3的圆圈样式 */
  .rank-circle {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(to bottom, #248CF3, #000000); /* 渐变从蓝色到黑色 */
    color: white;
    line-height: 40px;
    text-align: center;
    font-size: 16px; /* 圆圈内字体大小 */
    font-weight: bold;
  }
  </style>
  