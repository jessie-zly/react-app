/**
 * User 页面
 */

// react 加载
import React from 'react';


// User 组件
const User = (props) => (
  <div className='user'>
    {props.children}
  </div>
);


// 导出
export default User;