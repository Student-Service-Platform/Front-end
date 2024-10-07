/**
 * @author: 杨龙辉
 * @description: 登录认证api封装
 * CreatedAt: 2024.10.3 14:43
 * Latest: 2024.10.3 14:43
 */

import request from '../request'

/**
 * @description 筛选并获取反馈
 * @param admin_id 用户id
 * @param category 分组
 * @param limit 限制
 * @param offset 偏移
 * @param status 状态
 */
export const getFeedbacks = (
  admin_id: string,
  category: number,
  limit: number,
  offset: number,
  status: boolean
) => {
  return request.get(
    `feedback?admin_id=${admin_id}&status=${status}&category=${category}&limit=${limit}&offset=${offset}`
  )
}

/**
 * @description 获取指定反馈
 * @param id 原帖id 可选
 * @param userID 回复者id
 */
export const getFeedback = (id: string) => {
  return request.get(`feedback/${id}`)
}

/**
 * @description 回复反馈 ok
 * @param id 原帖id 可选
 * @param userID 回复者id
 * @param reply 回复内容
 */
export const postReply = (id: string, content: string) => {
  return request.post(`feedback/${id}/reply`, {
    content
  })
}

/**
 * @description 接单 ok
 * @param id 原帖id 可选
 * @param userID 回复者id
 */
export const postFeedbackAdmin = (id: string, action: boolean) => {
  return request.put(`feedback/${id}/admin?action=${action}`)
}

/**
 * @description 举报垃圾信息 ok
 * @param id 原帖id 可选
 * @param userID 回复者id
 */
export const putFeedbackMark = (id: string, confirmation?: boolean) => {
  return request.put(`feedback/${id}/mark?confirmation=${confirmation}`)
}
