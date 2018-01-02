/**
 * 公共组件 Nav
 */

// 引入 react
import React from 'react';
import {Link} from 'react-router';


// define
class Nav extends React.Component{
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/home"> 首页</Link></li>
          <li><Link to="/user">我的</Link></li>
          <li><Link to="/order">订单</Link></li>
        </ul>
      </div>
    );
  }
}

// export
export default Nav;