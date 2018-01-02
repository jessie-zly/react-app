/**
 * 路由模块
 */

// 加载组件
import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRedirect,
} from 'react-router';

// 引入自定义组件
import App from './pages/App';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
// import List from './pages/order/List';
// user
import User from './pages/user/User';
import Login from './pages/user/Login';
import Reg from './pages/user/Reg';
// 404
import Error from './pages/common/Error';


// 配置路由
const RouterConfig = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      {/*默认访问 /home*/}
      <IndexRedirect to="/home" />
      <Route path='/home' component={Home} />
      <Route path='/order' component={Order} />
      {/*<Route path='/list' component={List} />*/}
      <Route path='/user' component={User}>
        <Route path='login' component={Login} />
        <Route path='reg' component={Reg} />
      </Route>
      <Route path='*' component={Error} />
    </Route>
  </Router>
);


// 导出
export default RouterConfig;