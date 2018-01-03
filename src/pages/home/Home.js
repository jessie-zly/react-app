/**
 * Home 页面
 */

// 引入 react
import React from 'react';

// 引入 Carousel
import Carousel from './carousel/Carousel';


// define
class Home extends React.Component {
  render() {
    return (
      <div>
        <span>狗眼电影</span>
        <Carousel />
      </div>
    )
  }
}


// 导出
export default Home;