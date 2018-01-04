/**
 * FilmComing 页面 --> home 页面子组件
 */

// 加载 react
import React from 'react';
import {Link} from 'react-router';

// css
import '../../../assets/css/home/cinema/cinema.css';


//
class Cinema extends React.Component {
  //
  constructor() {
    super();
    // 初始化数据
    this.state = {
      cinemaList: []
    };
  }

  //
  render() {
    return (
      <ul className='cinema'>
        <li className='cinema-box'></li>
        {
          this.state.cinemaList.map(item => {
            return (
              <li key={item.id}>
                <Link to={{pathname: '/cinemaDetail/' + item.id}}>
                  <div className='cinema-desc'>
                    <div className='cinema-info'>
                      <span className='cinema-nm'>{item.nm}</span>
                      <span className='cinema-sellPrice'>{item.sellPrice}元起</span>
                    </div>
                    <div className='cinema-dis'>
                      <span className='cinema-addr'>{item.addr}</span>
                      <span className='cinema-distance'>{item.distance}m</span>
                    </div>
                    <div className='cinema-seat'>
                      <span>座</span>
                      <span className='cinema-imax'>{item.imax === 0 && 'IMAX'}</span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }

  //
  componentDidMount() {
    this.getCinema();
  }

  // 获取上映电影
  getCinema() {
    // 猫眼影院信息 --> 根据ip段加载出本地影院
    // const url = 'http://m.maoyan.com/cinemas.json';
    const url = '../../../../data/cinema.json';
    // 获取
    fetch(url).then(
      // res => console.log('res数据', res)
      res => res.json()
    ).then(
      // data => console.log('data数据', data)
      data => this.setState({cinemaList: data.data.宝山区})
    ).catch(
      (error) => console.log('Cannot get data from ' + url, error)
    );
  }
}


//
export default Cinema;