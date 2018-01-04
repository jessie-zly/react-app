// import
import React from 'react';
import {hashHistory} from 'react-router';

// css
import '../../../assets/css/home/film/filmdetail.css';


// define
class FilmDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      comment: {
        hcmts: [],
        cmts: [],
      },
    }
  }

  //
  render() {
    //
    const movie = this.state.movie;
    const comment = this.state.comment;
    //
    return (
      <div className='film-detail'>
        <div className='detail-nav'>
          <span className='detail-back' onClick={()=>{this.props.router.go(-1)}}>⇦</span>
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
          <div dangerouslySetInnerHTML={{__html: movie.dra}} className='detail-content'/>
        </div>
        <div className='detail-show'>
          <dl className='detail-show-all'>
            <dt className='detail-show-dir'>
              <img src={movie.img} alt="图片未找到" className='show-img'/>
              <span className='dir-name'>{movie.dir}</span>
              <span className='dir-title'>导演</span>
            </dt>
            {/*<dd className='detail-show-star'>{movie.star}</dd>*/}
            <dd className='detail-show-star'>
              <img src={movie.img} alt="图片未找到" className='show-img'/>
              <span className='star-name'>泰勒·斯威夫特</span>
              <span className='star-title'>演员</span>
            </dd>
          </dl>
          <div className='detail-show-total' onClick={()=>{hashHistory.push('/film-detail/credit')}}>
            <span className='detail-show-total-credits'>全体演职人员</span>
            <span className='detail-show-total-arrow'>➯</span>
          </div>
        </div>

        <ul className='detail-comment'>
          <li className='comment-title'>短评</li>
          {
            comment.hcmts.map(item => {
              return (
                <li key={item.id} className='comment-info'>
                  <div className='comment-rate'>
                    <span className='comment-score'>{"★★★★★☆☆☆☆☆".slice(5 - item.score, 10 - item.score)}</span>
                    <span className='comment-time'>{item.time}</span>
                  </div>
                  <div className='comment-content'>{item.content}</div>
                  <div className='comment-user'>
                    <div className='comment-user-info'>
                      <img src={item.avatarurl} alt="图片未找到" className='comment-user-info-img'/>
                      <span className='comment-user-info-name'>{item.nickName}</span>
                    </div>
                    <div className='comment-user-command'>
                      <span className='comment-user-command-approve'>{item.approve}</span>
                      <span className='comment-user-command-reply'>{item.reply}</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
          <li className='comment-box'/>
        </ul>
      </div>
    );
  }

  //
  componentDidMount() {
    this.getFilmDetail();
  }

  //
  getFilmDetail() {
    // 猫眼movie 详情 API   http://m.maoyan.com/movie/247948.json  --> 247948 = id
    const url = `../../../../data/detail.json`;
    //
    fetch(url).then(
      res => res.json()
    ).then(
      data => this.setState({
        movie: data.data.MovieDetailModel,
        comment: data.data.CommentResponseModel,
      })
    ).catch(
      error => console.log('Can not get data from ' + url, error)
    )
  }
}


// export
export default FilmDetail;
