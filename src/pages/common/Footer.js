/**
 * Footer 页面 --> 底部公共组件
 */

// react 加载
import React from 'react';
import {hashHistory} from 'react-router';
// css
import '../../assets/css/common/footer.css';


// Footer 组件
const Footer = () => (
  <div className='footer'>
    <ul className='footer-nav'>
      <li className='footer-film' onClick={() => {hashHistory.push('/home')}}>影片</li>
      <li className='footer-cinema' onClick={() => {hashHistory.push('/home/cinema')}}>影院</li>
      <li className='footer-my' onClick={() => {hashHistory.push('/user')}}>我的</li>
      <li className='footer-client' onClick={() => {hashHistory.push('/client')}}>客户端下载</li>
    </ul>
    <div className='footer-user'>
      <span>Jessie</span>
      <span onClick={()=>{hashHistory.push('/user/login')}}>退出</span>
      <span>城市:上海</span>
    </div>
    <div className='footer-info'>
      <div className='footer-links'>
        <span className='footer-links-name'>友情链接:</span>
        <span className='footer-links-pro'>狗眼专业版</span>
        <span className='footer-links-div'>|</span>
        <span className='footer-links-web'>狗团网</span>
      </div>
      <div className='footer-tel'>
        <span className='footer-tel-desc'>© 狗眼电影 客服电话: </span>
        <span className='footer-tel-num'>1010-1010</span>
      </div>
      <div className='footer-p'>
        <span className='footer-p-num'>京ICP备100000000号-1</span>
        <span className='footer-p-name'>京公网安备11011101101100号</span>
      </div>
      <div className='footer-company'>
        <span>北京狗眼文化传媒有限公司</span>
      </div>
    </div>
  </div>

);


// 导出
export default Footer;