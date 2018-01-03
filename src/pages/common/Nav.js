/**
 * 公共组件 av
 */

// 引入 react
import React from 'react';
import {Link} from 'react-router';

// 引入 css
import '../../assets/css/nav/nav.css';


// define
class Nav extends React.Component {
  //
  render() {
    return (
      <ul className="nav">
        <li className="nav-home">
          <Link to="/home/film"> 首页</Link>
        </li>
        <li className="nav-order">
          <Link to="/order">订单</Link>
        </li>
        <li className="nav-my">
          <Link to="/user">我的</Link>
        </li>
      </ul>
    );
  }
}


// export
export default Nav;