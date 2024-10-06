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
    "user_id": username,
    "is_admin": false,
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
  return request.post('auth/login', {
    "user_id": username,
    "is_admin": true,
    password
  })
  // cookie处理与页面跳转由后端完成
}

/**
 * @description 注册
 * @param user_id 学号
 * @param username 用户名
 * @param password 密码
 * @param mail_auth 邮箱
 * @param phone 手机号码
 */
export const authRegister = (user_id: string,username: string,password: string,mail_auth: boolean,phone: string) => {
    return request.post('auth/reg', {
      user_id,
      username,
      password,
      mail_auth,
      phone
    })
  }
