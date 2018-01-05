/**
 * Home 页面
 */

// 引入 react
import React from 'react';
import {Link} from 'react-router';
// 引入 css
import '../../assets/css/home/home.css';


// define
const Home = (props) => (
  <div className='home'>
    <div className='home-pos'>
      <div className='home-title'>狗眼电影</div>
      <ul className='home-nav'>
        <li><Link to="/home/film" activeClassName='home-active'> 影片</Link></li>
        <li><Link to="/home/cinema" activeClassName='home-active'>影院</Link></li>
      </ul>
      <div className='home-underline' />
    </div>
    {props.children}
    <div className='home-box' />
  </div>
);

// 导出
export default Home;