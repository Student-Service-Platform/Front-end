/**
 * @author: 杨龙辉
 * @description: 登录认证api封装
 * CreatedAt: 2024.10.3 15:03
 * Latest: 2024.10.3 15:03
 */

import request from "../request"

/**
 * @description 管理员获取处理历史
 * @param admin_id 管理员id
 * @param limit 限制
 * @param offset 偏移
 */
export const getHistory = (admin_id: string,limit: number,offset: number)=>{
    return request.get(`admin/history?admin_id=${admin_id}&limit=${limit}&offset=${offset}`)
}

/**
 * @description 修改个人主页
 * @param name 修改的条目
 * @param userID 修改者的学号/账号
 * @param value 修改的值
 */
export const putAdminProfile = (name:string, userID:string ,value:string)=>{
    return request.put("admin/profile/"+name,{
        "user_id": userID,
        value
    })
}

/**
 * @description 获取个人信息
 * @param userID 请求者的学号/账号
 */
export const getProfile = (userID:string)=>{
    return request.get("admin/profile?user_id="+userID)
}