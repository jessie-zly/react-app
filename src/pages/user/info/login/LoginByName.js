/**
 * LoginByName 页面 --> login 子组件
 */

// 引入 react
import React from 'react';
import {hashHistory} from 'react-router';
// css
import '../../../../assets/css/user/info/login/loginByName.css';


// LoginByName 组件
class LoginByName extends React.Component {
  //
  render() {
    return (
      <div className='loginByName'>
        <div className='loginByName-name'>
          <input type="text" className="loginByName-name-ipt" placeholder="账户名/手机号/Email" />
        </div>
        <div className='loginByName-divide'/>
        <div className='loginByName-pw'>
          <input type="password" className="loginByName-pw-ipt" placeholder="请输入您的密码" />
        </div>
        <div className='login-sub'>
          <input type="submit" value="确认登录" className="login-sub-ipt" onClick={() => {hashHistory.push('/user')}} />
        </div>
        <div className='loginByName-jump'>
          <span className='loginByName-jump-reg' onClick={() => {hashHistory.push('/user/reg')}}>立即注册</span>
          <span className='loginByName-jump-forget' onClick={() => {hashHistory.push('/user/forget')}}>找回密码</span>
        </div>
      </div>
    );
  }
}


// 导出
export default LoginByName;