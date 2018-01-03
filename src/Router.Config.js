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
// home
import Home from './pages/home/Home';
import FilmPlaying from "./pages/home/film/FilmPlaying";
import FilmComing from "./pages/home/film/FilmComing";
//
import Order from './pages/order/Order';
// import List from './pages/order/List';
// user
import UserCenter from './pages/user/UserCenter';
import Login from './pages/user/info/Login';
import Reg from './pages/user/info/Reg';
// 404
import Error from './pages/common/Error';


// 配置路由
const RouterConfig = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      {/*默认访问 /home*/}
      <IndexRedirect to="/home" />
      <Route path='/home' component={Home}>
        <Route path='playing' component={FilmPlaying} />
        <Route path='coming' component={FilmComing} />
      </Route>
      <Route path='/order' component={Order} />
      {/*<Route path='/list' component={List} />*/}
      <Route path='/user' component={UserCenter}>
        <Route path='login' component={Login} />
        <Route path='reg' component={Reg} />
      </Route>
      <Route path='*' component={Error} />
    </Route>
  </Router>
);


// 导出
export default RouterConfig;