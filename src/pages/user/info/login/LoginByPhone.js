/**
 * LoginByPhone 页面 --> login 子组件
 */

// 引入 react
import React from 'react';
import {hashHistory} from "react-router";
// css
import '../../../../assets/css/user/info/login/loginByPhone.css';


// LoginByPhone 组件
class LoginByPhone extends React.Component {
  //
  render() {
    return (
      <div className='loginByPhone'>
        <div className='loginByPhone-name'>
          <input type="number" className="loginByPhone-name-ipt" placeholder="请输入手机号" />
          <input type="button" className="loginByPhone-name-send" value="发送验证码" onClick={() => {alert('Code: 001122')}} />
        </div>
        <div className='loginByPhone-divide'/>
        <div className='loginByPhone-code'>
          <input type="number" className="loginByPhone-code-ipt" placeholder="请输入短信验证码" />
          </div>
        <div className='loginByPhone-divide'/>
        <div className='login-sub'>
          <input type="submit" value="确认登录" className="login-sub-ipt" onClick={() => {hashHistory.push('/user')}} />
        </div>
        <div className='loginByPhone-jump'>
          <span className='loginByPhone-jump-reg' onClick={() => {hashHistory.push('/user/reg')}}>立即注册</span>
          <span className='loginByPhone-jump-forget' onClick={() => {hashHistory.push('/user/forget')}}>找回密码</span>
        </div>
        <div className='loginByPhone-foot'>
          <span className='loginByPhone-foot-desc'>© 狗眼电影 客服电话：</span>
          <span className='loginByPhone-foot-phone'>400-670-5335</span>
        </div>
      </div>
    );
  }
}


// 导出
export default LoginByPhone;