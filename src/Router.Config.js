/**
 * 路由模块
 */

// 加载组件
import React from 'react';
import {Router, Route, IndexRoute, browserHistory, Redirect, Link} from 'react-router';

// 引入自定义组件
import App from './pages/App';
import Home from './pages/home/Home';
import User from './pages/user/User';
import Login from './pages/user/Login';
import Reg from './pages/user/Reg';

import Error from './pages/common/Error';


// 配置路由
const RouterConfig = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/home' component={Home} />
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