// import
import React from 'react';
import {hashHistory} from 'react-router';

// css
import '../../../../../assets/css/home/film/detail/comment/comment.css';


// define
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        hcmts: [],
        cmts: [],
      },
    };
    // bind this
    this.getFilmComment = this.getFilmComment.bind(this);
  }

  //
  render() {
    // define
    const comment = this.state.comment;
    //
    return (
      <ul className='comment'>
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
                    <img src={item.avatarurl || '/src/assets/images/film-detail/user.png'} alt="图片未找到"
                      className='comment-user-info-img' />
                    <span className='comment-user-info-name'>{item.nickName}</span>
                  </div>
                  <div className='comment-user-command'>
                    <div className='comment-user-command-approve'>
                      <i className='comment-user-command-approve-img' />
                      <span className='comment-user-command-approve-count'>{item.approve}</span>
                    </div>
                    <div className='comment-user-command-reply'>
                      <i className='comment-user-command-reply-img' />
                      <span className='comment-user-command-reply-count'>{item.reply}</span>
                    </div>
                  </div>
                </div>
              </li>
            )
          })
        }
        <li className='comment-total'>
          <div
            className='comment-more'
            onClick={() => {
              hashHistory.push(`/film-detail/${this.props.id}/comment`)
            }}
          > 查看全部{comment.hcmts.length + comment.cmts.length}条短评
          </div>
        </li>
        <li className='comment-box' />
      </ul>
    );
  }

  // 初始化数据
  componentDidMount() {
    this.getFilmComment();
  }

  // 获取数据
  getFilmComment() {
    // 猫眼movie 详情 API   http://m.maoyan.com/movie/247948.json  --> 247948 = id
    const url = `/data/detail/${this.props.id}.json`;
    //
    fetch(url).then(
      res => res.json()
    ).then(
      data => this.setState({
        comment: data.data.CommentResponseModel
      })
    ).catch(
      error => console.log('Can not get data from ' + url, error)
    )
  }
}


// export
export default Comment;
