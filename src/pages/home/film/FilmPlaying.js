/**
 * FilmPlaying 页面 --> home 页面子组件
 */

// 加载 react
import React from 'react';
import {Link} from 'react-router';

// css
import '../../../assets/css/home/filmplaying.css';


// define
class FilmPlaying extends React.Component {
  //
  constructor() {
    super();
    // 初始化数据
    this.state = {
      filmPlayingList: []
    };
  }

  //
  render() {
    return (
      <ul className='film-playing'>
        {
          this.state.filmPlayingList.map(item => {
            return (
              <li key={item.id}>
                <Link to={{pathname: '/detail/' + item.id}}>
                  <img src={item.img} alt='未找到图片' className='playing-image' />
                  <div className='playing-desc'>
                    <span className='playing-title'>{item.nm}</span>
                    <span className='playing-cat'>类型: {item.cat}</span>
                    <span className='playing-casts'>主演: {item.star}</span>
                    <span className='playing-showInfo'>{item.showInfo}</span>
                  </div>
                </Link>
                <div className='playing-sc'>{item.sc === 0 ? item.wish + '❤️' : item.sc}</div>
                <button className='playing-buy'>{item.sc === 0 ? '预售' : '购票'}</button>
              </li>
            );
          })
        }
      </ul>
    );
  }

  //
  componentDidMount() {
    this.getFilmPlaying();
  }

  // 获取上映电影
  getFilmPlaying() {
    // 豆瓣 API
    // const url = `https://api.douban.com/v2/movie/in_theaters`;
    // const url = 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000';

    const url = '../../../../data/film-playing.json';
    // 获取
    fetch(url).then(
      // res => console.log('res数据', res)
      res => res.json()
    ).then(
      // data => console.log('data数据', data)
      data => this.setState({filmPlayingList: data.data.movies})
    ).catch(
      (error) => console.log('Cannot get data from ' + url, error)
    );
  }
}


// export
export default FilmPlaying;