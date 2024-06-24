axios.interceptors.request.use(config => {
  // 请求拦截
  // config.headers['Content-Type'] = 'application/json'
  const token = localStorage.getItem('token');
  // token && (config.headers.Authorization = `Bearer ${token}`);
  token && (config.headers.token = token);
  return config;
}, error => {
  // 请求失败处理
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // 响应拦截
  if (response.status === 200 && response.data) {
    const result = response.data;
    if (result.msg == 'NOT_LOGIN') {
      location.href = '../user/login.html';
    }
    return result;
  }
})