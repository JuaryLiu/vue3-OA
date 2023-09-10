export const validateUsername = (rule,value, callback) => {
    if(value === '') {
        callback(new Error('用户名不能为空'))
    } else {
        callback()
    }
}


export const validatePassword = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('密码不能为空'))
    } else {
        callback()
      }
  }