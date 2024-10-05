export const resetpwd = 
(
    user_id: string,
    mail_auth: string,
    password: string,
    newpassword: string
) => {
    return request.post('resetpwd', {
      user_id,
      mail_auth,
      password,
      newpassword
    })
  }