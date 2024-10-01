
// Author:陈曦
// Descripiton: 超级管理员 可视化 大屏 12个月反馈柱形图
// CreatedAT：2024.10.1 13：30
// Latest：2024.10.1 19：28
// NB:
// 1.在工作文件夹需要 npm install echarts --save (好像直接远程仓库搞不了？？)
// 2.在main.js 加上：
// import * as echarts from 'echarts';  // 导入整个 ECharts 模块
// app.config.globalProperties.$echarts = echarts;

<template>
    <div class="bar1-component">
      <!-- ECharts 图表的容器，确保透明背景 -->
      <div id="echarts-container" class="chart-container"></div>
    </div>
</template>

<script>
// 导入 ECharts 库
import * as echarts from 'echarts';

export default {
  name: 'FankuiMonthBar', // 组件名称
  mounted() {
    // 当组件挂载时初始化图表
    this.initChart();
  },
  methods: {
    initChart() {
      // 获取 DOM 容器
      const chartDom = document.getElementById('echarts-container');
      const myChart = echarts.init(chartDom);

      // 图表的配置项
      const option = {
        title: {
          text: '',
          textStyle: {
            color: '#FFFFFF',
          },
        },
        tooltip: {},
        legend: {
          data: ['反馈数'],
          right: '10%',
          itemWidth: 20,
          itemHeight: 20,
          icon: 'rect', // 正方形图例
          textStyle: {
            color: '#FFFFFF',
            fontSize: 16, // 字体大小与 bar2 的相同
          },
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLine: {
            lineStyle: {
              color: '#FFFFFF',
            },
          },
          axisLabel: {
            color: 'rgb(91, 98, 112)', // 设置 x 轴标签的颜色为 rgb(91, 98, 112)
            interval: 0, // 显示所有标签
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#FFFFFF',
            },
          },
          axisLabel: {
            color: 'rgb(91, 98, 112)', // 设置 y 轴标签的颜色为 rgb(91, 98, 112)
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgb(91, 98, 112)', // 设置虚线颜色为 rgb(91, 98, 112)
              type: 'dotted', // 将虚线样式改为点线
            },
          },
        },
        series: [{
          name: '反馈数',
          type: 'bar',
          data: [350, 420, 380, 490, 315, 470, 450, 320, 410, 460, 345, 375],
          barCategoryGap: '20%',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1, // 渐变从上到下
              colorStops: [
                { offset: 0, color: '#248CF3' }, // 渐变起始蓝色
                { offset: 1, color: '#000000' }, // 渐变终点黑色
              ],
            },
          },
        }],
      };

      // 使用配置项渲染图表
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.bar1-component {
  position: absolute;
  width: 505px; /* 统一宽度 */
  height: 264.52px; /* 统一高度 */
  left: 135px; /* 与 bar2 对齐 */
  top: 136.5px;
  background-color: transparent;
}

.chart-container {
  width: 100%;
  height: 100%;
}
</style>
