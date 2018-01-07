/**
 * 登录页面 --> User 子组件
 */

// 引入 react
import React from 'react';
import {Link} from 'react-router';
// common page
import Title from '../../common/Title';
// css
import '../../../assets/css/user/info/login.css';


// Login 组件
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '用户登录',
      active: false,
    }
  }

  // TODO
  render() {
    return (
      <div className="login">
        {/*Title begin*/}
        <Title title={this.state.title} router={this.props.router} />
        {/*Title end*/}

        <div className="login-pos">
          <div className={this.state.active ? 'login-tip login-tip-active' : 'login-tip'}>手机动态码错误，请重新输入</div>
          <ul className='login-nav'>
            <li><Link to="/user/login/name" activeClassName='login-active'>美团账号登录</Link></li>
            <li><Link to="/user/login/phone" activeClassName='login-active'>手机验证登录</Link></li>
          </ul>
          <div className='login-underline' />
        </div>

        {/*show child router*/}
        {this.props.children}
      </div>
    );
  }
}


// 导出
export default Login;