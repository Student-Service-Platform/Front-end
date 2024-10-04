/**
 * @author: 杨龙辉
 * @description: 登录认证api封装
 * CreatedAt: 2024.10.2 20:40
 * Latest: 2024.10.2 20:40
 */
import request from '../request'

/**
 * @description 学生登录
 * @param username 学号
 * @param password 密码
 */
export const authLogin = (username: string, password: string) => {
  return request.post('auth/login', {
    username,
    password
  })
  // cookie处理与页面跳转由后端完成
}

/**
 * @description 管理员登录
 * @param username 账号
 * @param password 密码
 */
export const authAdmin = (username: string, password: string) => {
  return request.post('auth/adminlogin', {
    username,
    password
  })
  // cookie处理与页面跳转由后端完成
}
