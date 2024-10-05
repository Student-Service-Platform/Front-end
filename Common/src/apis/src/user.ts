/**
 * @author 杨龙辉
 * @description: 定义request体
 * createdAt: 2024.10.2 21:00
 * latest: 2024.10.2 21:00
 */

import request from '../request'

/**
 * @description 修改个人主页
 * @param name 修改的条目
 * @param userID 修改者的学号/账号
 * @param value 修改的值
 */
export const putProfile = (name: string, new_value: string) => {
  return request.put('user/profile/', {
    object: name,
    new_value
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
 * @description 获取反馈
 * @param limit 限制获取的条数
 * @param offset 偏移量
 */
export const getProfeedbacks = (limit: number, offset: number) => {
  return request.get(`user/profile?limit=${limit}&offset=${offset}`)
}

/**
 * @description 上传反馈
 * @param userID 用户ID
 * @param post post相关参数
 *      title: string,
 *      category: number,
 *      is_urgent: boolean,
 *      if_anonymous: boolean,
 *      description: string
 */
export const postFeedback = (
  userID: string,
  post: {
    title: string
    category: number
    is_urgent: boolean
    if_anonymous: boolean
    description: string
  }
) => {
  return request.post('user/feedback', {
    student_id: userID,
    title: post.title,
    category: post.category,
    is_urgent: post.is_urgent,
    if_anonymous: post.if_anonymous,
    description: post.description
  })
}

/**
 * @description 评分
 * @param requestID 反馈的id
 * @param grade 给出的评价分
 */
export const postRate = (requestID: number, grade: number) => {
  return request.post('user/rate', {
    request_id: requestID,
    grade
  })
}
