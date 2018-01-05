/**
 * LoginByName 页面 --> login 子组件
 */

// 引入 react
import React from 'react';
import {hashHistory} from 'react-router';


// LoginByName 组件
class LoginByName extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '用户登录',
    }
  }

  //
  render() {
    return (
      <div className="loginByName">

       login by name ...


        <ul className="login-main">
        <li>
        <label>账号:</label>
        <input type="text" className="login-username" placeholder="请输入账户" />
        </li>
        <li>
        <label>密码:</label>
        <input type="password" className="login-password" placeholder="请输入密码" />
        </li>
        <li>
        <label><input type="checkbox" className="login-remember" />记住密码</label>
        <a href="javascript:;" className="login-forget" onClick={() => {hashHistory.push('')}}>忘记密码？</a>
        </li>
        <li><input type="submit" value="确认登录" className="login-sub" onClick={()=>{hashHistory.push('/user')}}/></li>
        </ul>

      </div>
    );
  }
}


// 导出
export default LoginByName;