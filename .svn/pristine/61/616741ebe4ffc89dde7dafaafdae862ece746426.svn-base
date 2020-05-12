import Cookies from 'js-cookie';

// 判断是否有用户信息
const getUserInfo = () => {
    var info = Cookies.get('userInfo');
    if(!info){
      return {isLogin: false};
    }
    var userInfo = JSON.parse(info);
    var isLogin = Object.keys(userInfo).length > 0 ? true : false;
    if(isLogin){
      userInfo.isLogin = true;  //已经登录成功，有用户信息
    }else{
      userInfo.isLogin = false;
    }
    return userInfo
  }
  
  //设置cookie
  const setCookoes = (key, value) => {
    Cookies.set(key, value);
  }
  
  //获取cookie
  const getCookoes = (key) => {
    let data = Cookies.get(key);
    if(data) return JSON.parse(data);
    return false;
  }

  

export {
    getUserInfo,
    setCookoes,
    getCookoes
  }