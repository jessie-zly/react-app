/**
 * Title 组件 --> 顶部标题栏
 */

// 引入 react
import React from 'react';
// css
import '../../assets/css/common/title.css';


// define -->
const Title = (props)=>(
  <div className='title'>
    <div className='title-nav'>
      <span className='title-back' onClick={() => {props.router.go(-1)}}>⇦</span>
      <span className='title-name'>{props.title}</span>
    </div>
  </div>
);


// 导出
export default Title;