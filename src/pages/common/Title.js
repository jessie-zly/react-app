/**
 * Title 组件 --> 顶板标题栏
 */

// 引入 react
import React from 'react';
// css
import '../../assets/css/common/title.css';


// define -->
// class Title extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//
//   //
//   render() {
//     return (
//       <div className='title'>
//         <div className='title-nav'>
//           <span className='title-back' onClick={() => {this.props.router.go(-1)}}>⇦</span>
//           <span className='title-name'>{this.props.title}</span>
//         </div>
//       </div>
//
//     )
//   }
// }

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