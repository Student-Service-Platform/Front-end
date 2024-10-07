/**
 * @author: 杨龙辉
 * @description: 登录认证api封装
 * CreatedAt: 2024.10.3 15:05
 * Latest: 2024.10.3 15:05
 */

import request from '../request'


/**
 * @description 添加管理
 * @param user 
 */
export const postAddAdmin = (user: {
  admin_id: string,
  username: string,
  password: string,
  mail_auth: boolean,
  phone: string,
  mail: string
}) => {
  return request.post("superadmin/workbench",user)
}

/**
 * @description 删除用户
 * @param userID 
 */
export const delAdmin = (userID:string)=>{
  return request.delete("superadmin/workbench?UserID="+userID)
}

/**
 * @description 获取被标记的信息列表 
 * @param page 
 * @param limit 
 */
export const getRubbish = (page:Number,limit:Number)=>{
  return request.get(`superadmin/workbench?page=${page}&limit=${limit}`)
}

/**
 * @description 对可疑信息操作
 * @param id 
 * @param action 
 */
export const putRubbish = (id:Number, action:Number)=>{
  return request.put(`superadmin/workbench?id=${id}&action=${action}`)
}

/**
 * @description 获取对应用户
 * @param type admin/other
 * @param page 
 * @param limit 
 */
export const getAllUser = (type:String,page:Number,limit:Number) => {
  return request.get(`superadmin/U&A?type=${type}&page=${page}&limit=${limit}`)
}