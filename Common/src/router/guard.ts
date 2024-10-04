import type { RouteLocationNormalizedGeneric } from 'vue-router'

export const loginGuard = (
  to: RouteLocationNormalizedGeneric,
  _: RouteLocationNormalizedGeneric,
  next: Function
) => {
  console.log(to)
  if (!to.name) next({ name: 'index' })
  // 检查
  else if (to.name in ['login', 'register', 'index'] || document.cookie.match('user_id'))
    next({ name: 'login' })
  else next()
}
