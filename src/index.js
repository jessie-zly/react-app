/**
 * react-app 入口文件
 */

// 引入系统模块
import React from 'react';
import ReactDom from 'react-dom';

// 引入路由
import RouterConfig from './Router.Config';


// 渲染 DOM
ReactDom.render(
  <RouterConfig />,
  document.querySelector('#app')
);
