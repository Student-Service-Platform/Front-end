/**
 * @description: 定义request体
 * createdAt: 2024.10.2 21:00
 * latest: 2024.10.2 21:00
 */

import request from "../request";

/**
 * @author: 杨龙辉
 * @description 修改个人主页
 * @param name 修改的条目
 * @param userID 修改者的学号/账号
 * @param value 修改的值
 */
export const putProfile = (name:string, userID:string ,value:string)=>{
    return request.put("user/profile/"+name,{
        "user_id": userID,
        value
    })
}

/**
 * @author: 杨龙辉
 * @description 获取个人信息
 * @param userID 请求者的学号/账号
 */
export const getProfile = (userID:string)=>{
    return request.get("user/profile?user_id="+userID)
}

/**
 * @author: 杨龙辉
 * @description 获取反馈
 * @param limit 限制获取的条数
 * @param offset 偏移量
 */
export const getFeedbacks = (limit:number, offset:number)=>{
    return request.get(`user/profile?limit=${limit}&offset=${offset}`)
}

/**
 * @author: 杨龙辉
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
    userID:string, 
    post: {
        title: string,
        category: number,
        is_urgent: boolean,
        if_anonymous: boolean,
        description: string
    })=>{
    return request.post("user/",{
        "student_id": userID,
        "title": post.title,
        "category": post.category,
        "is_urgent": post.is_urgent,
        "if_anonymous": post.if_anonymous,
        "description": post.description
    })
}

/**
 * @author: 杨龙辉
 * @description 回复反馈
 * @param id 原帖id 可选
 * @param userID 回复者id
 * @param reply 回复内容
 */
export const postReply = (id:string,userID:string,reply:string)=>{
    return request.post(`feedback/${id}/reply`,{
        "user_id": userID,
        reply
    })
}

/**
 * @author: 杨龙辉
 * @description 评分
 * @param requestID 反馈的id
 * @param grade 给出的评价分
 */
export const postRate = (requestID:number, grade:number)=>{
    return request.post("user/rate",{
        "request_id": requestID,
        grade
    })
}

