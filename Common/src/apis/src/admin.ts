/**
 * @author: 杨龙辉
 * @description: 登录认证api封装
 * CreatedAt: 2024.10.3 15:03
 * Latest: 2024.10.3 15:03
 */

import request from '../request'

/**
 * @description 管理员获取处理历史
 * @param admin_id 管理员id
 * @param limit 限制
 * @param offset 偏移
 */
export const getHistory = (admin_id: string, limit: number, offset: number) => {
  return request.get(`admin/history?admin_id=${admin_id}&limit=${limit}&offset=${offset}`)
}

/**
 * @description 修改个人主页
 * @param name 修改的条目
 * @param userID 修改者的学号/账号
 * @param value 修改的值
 */
export const putAdminProfile = (name: string, value: string) => {
  return request.put('user/profile/', {
    object: name,
    new_value: value
  })
}

/**
 * @description 获取个人信息
 * @param userID 请求者的学号/账号
 */
export const getProfile = (userID: string) => {
  return request.get('user/profile?user_id=' + userID)
}

/**
 * @description 获取未处理反馈
 * @param page 页数
 * @param limit 限制
 */
export const getUnFeedbacks = (page:number, limit:number) => {
  return request.get(`feedback/select?limit=${limit}&page=${page}&status=0`)
}
/**
 * @description 获取处理过的反馈
 * @param page 页数
 * @param limit 限制
 */
export const getProFeedbacks = (page:number, limit:number) => {
  return request.get(`feedback/select?page=${page}&limit=${limit}&status=1`)
}

/**
 * @description 获取处理过的反馈
 * @param page 页数
 * @param limit 限制
 */
export const getSpamFeedbacks = (page:number, limit:number) => {
  return request.get(`feedback/select?page=${page}&limit=${limit}&rubbish=0`)
}

/**
 * @description 获取评分
 * @param grade 评分
 */
export const getAdminGrade = (grade: number) => {
    return request.get('admin/grade?grade=' + grade)
}
