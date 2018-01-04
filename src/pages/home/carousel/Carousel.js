/**
 * Home 页面上的 carousel 组件
 */

// 加载模块
import React from 'react'
import ReactSwipe from 'react-swipe';

// 引入 css
import '../../../assets/css/home/carousel/carousel.css';


// define
class Carousel extends React.Component {
  render() {
    return (
      <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
        <div className='carousel-loop1'>JESSIE 1</div>
        <div className='carousel-loop2'>JESSIE 2</div>
        <div className='carousel-loop3'>JESSIE 3</div>
        <div className='carousel-loop4'>JESSIE 4</div>
        <div className='carousel-loop5'>JESSIE 5</div>
        <div className='carousel-loop6'>JESSIE 6</div>
      </ReactSwipe>
    );
  }
}


// export
export default Carousel;