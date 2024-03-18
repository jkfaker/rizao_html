// 1,如果本地无token，直接跳转到登录页
// 2,如果服务器返回result.data.msg为"NOT_LOGIN",跳转到登录页面
// 2，登录成功后，保存token到本地，跳转到/manage/goods.html

const token = localStorage.getItem('token');
if (!token) {
  location.href = '../manage/login.html';
}