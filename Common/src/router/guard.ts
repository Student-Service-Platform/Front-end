import { postUser } from '@/apis/src/guard'
import type { RouteLocationNormalizedGeneric } from 'vue-router'
import cookies from "vue-cookies";

export const UserGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: Function
) => {
  postUser().then(res=>{
    if (res.data.code == 200401) { // 登录信息无效或未登录
      localStorage.clear()
      cookies.remove("user_id")
      next({name: "login"})
    } else if (res.data.code == 200403) {
        alert("无权访问")
        next(from)
      }
    else next()
  }).catch(err=>{
    console.log(err)
    localStorage.clear()
    cookies.remove("user_id")
    next({name: "login"})
  })
}
