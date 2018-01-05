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
import Film from "./pages/home/film/Film";
import FilmDetail from './pages/home/film/detail/FilmDetail';
import Cinema from "./pages/home/cinema/Cinema";
// order
import Order from './pages/order/Order';
// user
import User from './pages/user/User';
import Center from './pages/user/info/Center';
import Login from './pages/user/info/Login';
import LoginByName from './pages/user/info/login/LoginByName';
import LoginByPhone from './pages/user/info/login/LoginByPhone';
import Reg from './pages/user/info/Reg';
// city
import City from './pages/city/City';
// 404
import Error from './pages/common/Error';


// 配置路由
const RouterConfig = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      {/*默认访问 /home*/}
      <IndexRedirect to="/home" />
      <Route path='/home' component={Home}>
        {/*默认访问 /film*/}
        <IndexRedirect to="/home/film" />
        <Route path='film' component={Film} />
        <Route path='cinema' component={Cinema} />
      </Route>
      <Route path='/film-detail/:id' component={FilmDetail} />
      <Route path='/order' component={Order} />
      <Route path='/user' component={User}>
        {/*默认访问 /center*/}
        <IndexRedirect to="/user/center" />
        <Route path='center' component={Center} />
        <Route path='login' component={Login} >
          {/*默认访问 /name*/}
          <IndexRedirect to="/user/login/name" />
          <Route path='name' component={LoginByName} />
          <Route path='phone' component={LoginByPhone} />
        </Route>
        <Route path='reg' component={Reg} />
      </Route>
      <Route path='/city' component={City} />
      <Route path='*' component={Error} />
    </Route>
  </Router>
);


// 导出
export default RouterConfig;