/**
 * Author: 杨龙辉
 * Description: 登录认证api封装
 * CreatedAt: 2024.10.2 20:40
 * Latest: 2024.10.2 20:40
 */
import request from "../request"

/**
 * @author: 杨龙辉
 * @description 学生登录
 * @param username 学号
 * @param password 密码
 */
export const authLogin = (username: string, password:string) => {
    return request.post("auth/auth/login",{
        username,
        password
    }).then(response=>{
        // 储存token
        localStorage.setItem("token",response.data.token)
    })
    // cookie处理与页面跳转由后端完成
}

/**
 * @author: 杨龙辉
 * @description 管理员登录
 * @param username 账号
 * @param password 密码
 */
export const authAdmin = (username: string, password:string) => {
    return request.post("auth/auth/adminlogin",{
        username,
        password
    }).then(response=>{
        // 储存token
        localStorage.setItem("token",response.data.token)
    })
    // cookie处理与页面跳转由后端完成
}