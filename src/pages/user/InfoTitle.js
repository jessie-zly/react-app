/**
 * InfoTitle 页面 --> Login/Reg 顶部标题栏
 */

// react 加载
import React from 'react';


// User 组件
const InfoTitle = (props) => (
  <div className='info-title'>
    <span className='title-back' onClick={() => {props.router.go(-1)}}>⇦</span>
    <span className='title-name'>{props.name}</span>
  </div>
);


// 导出
export default InfoTitle;