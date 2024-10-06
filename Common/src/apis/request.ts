/**
 * Author: 杨龙辉
 * Description: 定义request体
 * CreatedAt: 2024.10.2 20:12
 * Latest: 2024.10.2 20:58
 */

import axios from 'axios'
import type { AxiosInstance } from 'axios'


const service: AxiosInstance = axios.create({
  baseURL: `/api/`,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem('token') || '' // 添加认证
  }
})

//响应拦截器
service.interceptors.response.use(
  (res) => {
    return Promise.resolve(res)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
