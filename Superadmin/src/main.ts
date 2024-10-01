import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import * as echarts from 'echarts';  // 导入整个 ECharts 模块
app.config.globalProperties.$echarts = echarts;
