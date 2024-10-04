/**
 * @author: 杨龙辉
 * @description: 登录认证api封装
 * CreatedAt: 2024.10.3 15:05
 * Latest: 2024.10.3 15:05
 */

import request from '../request'

export const postAddAdmin = (
  adminID: String,
  name: String,
  password: String,
  mail: String,
  phone: String
) => {
  return request.post('superadmin/appadmin', {
    admin_id: adminID,
    name,
    password,
    mail,
    phone
  })
}

export const delUser = (userID: String) => {
  return request.delete(`superadmin/deluser?user_id=${userID}`)
}

export const delAdmin = (userID: String) => {
  return request.delete(`superadmin/deluser?admin_id=${userID}`)
}

// export const
