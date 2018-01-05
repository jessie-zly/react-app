/**
 * 注册页面 --> User 子组件
 */

// 引入 react
import React from 'react';
import {hashHistory} from "react-router";

// 引入 css
import '../../../assets/css/user/info/reg.css';


//  Reg 组件
class Reg extends React.Component {
  //
  render() {
    return (
      <div className="reg-container">
        <ul className='reg-user-nav'>
          <li className='user-nav-back' onClick={() => {this.props.router.go(-1)}}>⇦</li>
          <li className='user-nav-login'>用户注册</li>
          <li className='user-nav-reg' onClick={() => {hashHistory.push('/user/login')}}>登录</li>
        </ul>
        <ul className="reg-main">
          <li>
            <label>账号：</label>
            <input type="text" className="reg-username" placeholder="用户名/手机/Email" required />
          </li>
          <li>
            <label>密码：</label>
            <input type="password" className="reg-password" placeholder="请输入密码" required="required" />
          </li>
          <li>
            <label>确认：</label>
            <input type="password" className="reg-confirm" placeholder="请输入密码" required="required" />
          </li>
          <li>
            <input type="submit" value="确认注册" className="reg-sub" onClick={() => {hashHistory.push('/user/login')}} />
          </li>
        </ul>
      </div>
    )
  }
}


// 导出
export default Reg;