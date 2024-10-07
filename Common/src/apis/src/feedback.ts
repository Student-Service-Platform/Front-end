/**
 * @author: 杨龙辉
 * @description: 登录认证api封装
 * CreatedAt: 2024.10.3 14:43
 * Latest: 2024.10.3 14:43
 */

import request from '../request'

/**
 * @description 筛选并获取反馈 ok
 * @param rubbish 分组 0垃圾 >=1还不是垃圾
 * @param limit 限制
 * @param page 偏移
 * @param status 状态 0未处理 >=1已处理
 */
export const getFeedbacks = (
  limit: number,
  page: number,
  status: boolean,
  rubbish: number
) => {
  return request.get(
    `feedback/select?status=${status}&limit=${limit}&page=${page}&rubbish=${rubbish}`
  )
}

/**
 * @description 获取指定反馈 ok
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

/**
 * @description 评分 ok
 * @param id 原帖id 可选
 * @param grade 评分
 * @param grade_content 评价
 */
export const putEvaluation = (id: string, grade:boolean, grade_content:string) => {
  return request.put(`feedback/${id}/evaluation`,{
    grade,
    grade_content
  })
}

