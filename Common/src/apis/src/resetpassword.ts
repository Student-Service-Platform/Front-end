export const resetpwd = 
(
    student_id: string,
    mail_auth: string,
    password: string,
    user_id: string
) => {
    return request.post('resetpwd', {
        student_id,
        mail_auth,
        password,
        user_id,
    })
  }
