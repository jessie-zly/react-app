/**
 * user 页面中的 nav 公共组件
 */

// 引入 react
import React from 'react';
import {Link} from 'react-router';

// 引入 css
import '../../assets/css/user/user-nav.css';

// define
class UserNav extends React.Component {
  render() {
    return (
      <ul className='user-nav'>
        <li onClick={()=>{this.props.router.go(-1)}}>返回</li>
        <li className='user-nav-login'><Link to='/user/login'>登录</Link></li>
        <li className='user-nav-reg'><Link to='/user/reg'>注册</Link></li>
      </ul>
    )
  }
}


// 导出
export default UserNav;