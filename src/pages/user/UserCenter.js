/**
 * UserCenter 页面
 */

// react 加载
import React from 'react';
import {Link} from 'react-router';


// User 组件
class User extends React.Component {
  //
  render() {
    return (
      <div>
        {this.props.children}
        <ul>
          <li><Link to="/user/login">login</Link></li>
          <li><Link to="/user/reg">reg</Link></li>
        </ul>
      </div>
    );
  }
}


// 导出
export default User;