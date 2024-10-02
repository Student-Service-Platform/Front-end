<!--
// Author:韩磊
// Descripiton: 超级管理员 可视化 大屏 饼图
// CreatedAT：2024.10.1 10：00
// Latest：2024.10.2 16：30
// 需要npm install echarts --save
-->

<template>
  <div id="app1">
    <div id="main1"></div>
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';

export default {
  name: 'LargeScreenVisualizationPieChart',

  data() {
    return {

      pieChartData: [
        { value: 1, name: '学术与课程', itemStyle: { borderRadius: 10 } },
        { value: 1, name: '财务与奖学金', itemStyle: { borderRadius: 10 } },
        { value: 1, name: '餐饮与住宿', itemStyle: { borderRadius: 10 } },
        { value: 1, name: '技术与设施', itemStyle: { borderRadius: 10 } },
        { value: 1, name: '安全与行政', itemStyle: { borderRadius: 10 } },
        { value: 1, name: '其他', itemStyle: { borderRadius: 10 } }
      ]
    };
  },
  
  mounted() {
    const myChart = echarts.init(document.getElementById('main1'));
  
    myChart.setOption({
      tooltip: {
        trigger: 'item'
      },
      series: [{
        name: '统计结果', 
        type: 'pie',
        radius: ['50%', '60%'],
        data: this.pieChartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label: {
          show: true,
          formatter: '{b}: {d}%',
          color: '#fff'
        }
      }]
    });
  }
}
</script>

<style>
#main1 {
  transform: translate(-50%, -50%);
  position: absolute;
  width: 600px;
  height: 400px;
  top: 37%;
  left: 70%;
}
</style>