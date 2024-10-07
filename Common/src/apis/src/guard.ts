import request from '../request'

export const postUser = ()=>{
    return request.post("guard",{
        user_type: 1
    })
}
export const postAdmin = ()=>{
    return request.post("guard",{
        user_type: 2
    })
}
export const postSuper = ()=>{
    return request.post("guard",{
        user_type: 3
    })
}