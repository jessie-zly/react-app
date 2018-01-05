// import
import React from 'react';
import {hashHistory, Link} from 'react-router';
import Comment from "./comment/Comment";

// css
import '../../../../assets/css/home/film/detail/filmdetail.css';


// define
class FilmDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {
        star: '',
      },
      comment: {
        hcmts: [],
        cmts: [],
      },
    };
    // bind this
    this.getFilmDetail = this.getFilmDetail.bind(this);
  }

  //
  render() {
    // define
    const movie = this.state.movie;
    //
    return (
      <div className='film-detail'>
        <div className='detail-nav'>
          <span className='detail-back' onClick={() => {
            this.props.router.go(-1)
          }}>⇦</span>
          <span className='detail-name'>{movie.nm}</span>
        </div>
        <div className='detail-info'>
          <img src={movie.img} alt="图片未找到" className='detail-img' />
          <div className='detail-desc'>
            <div className='detail-nm'>{movie.nm}</div>
            <div className='detail-sc'>{movie.sc === 0 ? movie.wish + '人想看️' : movie.sc}</div>
            <div className='detail-cat'>{movie.cat}</div>
            <div className='detail-ver'>{movie.ver}</div>
            <div className='detail-src'>{movie.src}/{movie.dur}分钟</div>
            <div className='detail-rt'>{movie.rt}</div>
          </div>
        </div>
        <div className='detail-tic'>
          <button className='detail-buy'>立即购票</button>
          <div dangerouslySetInnerHTML={{__html: movie.dra}} className='detail-content' />
        </div>
        <div className='detail-show'>
          <dl className='detail-show-all'>
            <dt className='detail-show-dir'>
              <img src={movie.img} alt="图片未找到" className='show-img' />
              <span className='dir-name'>{movie.dir}</span>
              <span className='dir-title'>导演</span>
            </dt>
            
            TODO

            {
              movie.star.split(' ').map((item, index) => {
                return (
                  <dd className='detail-show-star' key={index}>
                    <img src={movie.img} alt="图片未找到" className='show-img' />
                    <span className='star-name'>{item}</span>
                    <span className='star-title'>演员</span>
                  </dd>
                )
              })
            }
          </dl>
          <div className='detail-show-total' onClick={() => {
            hashHistory.push(`/film-detail/${this.props.params.id}/credits`)
          }}>
            <span className='detail-show-total-credits'>全体演职人员</span>
            <span className='detail-show-total-arrow'>➯</span>
          </div>
        </div>
        <Comment id={this.props.params.id} />
      </div>
    );
  }

  // 初始化数据
  componentDidMount() {
    this.getFilmDetail();
  }

  // 获取数据
  getFilmDetail() {
    // 猫眼movie 详情 API   http://m.maoyan.com/movie/247948.json  --> 247948 = id
    const url = `/data/detail/${this.props.params.id}.json`;
    //
    fetch(url).then(
      res => res.json()
    ).then(
      data => this.setState({
        movie: data.data.MovieDetailModel,
      })
    ).catch(
      error => console.log('Can not get data from ' + url, error)
    )
  }
}


// export
export default FilmDetail;
