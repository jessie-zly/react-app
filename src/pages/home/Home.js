/**
 * Home 页面
 */

// 引入 react
import React from 'react';
import {hashHistory,Link} from 'react-router';

// 引入 css
import '../../assets/css/home/home.css';


// define
class Home extends React.Component {
  //
  render() {
    return (
      <div className='home'>
        <div className='home-title'>狗眼电影</div>
        <ul className='home-nav'>
          <li><Link to="/home/playing" activeClassName='home-active'> 正在热映</Link></li>
          <li><Link to="/home/coming" activeClassName='home-active'>即将上映</Link></li>
        </ul>
        <div className='home-underline'></div>
        {this.props.children}
      </div>
    )
  }
  //
  componentDidMount(){
    hashHistory.push('/home/playing');
  }
}


// 导出
export default Home;