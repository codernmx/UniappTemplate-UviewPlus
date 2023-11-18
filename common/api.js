const {http} = uni.$u


// 员工注册
export const userRegister = (params, config = {}) => http.post('/api/user/register', params, config)
