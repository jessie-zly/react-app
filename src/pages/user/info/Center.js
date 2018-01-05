/**
 * Center 页面 --> User 子组件, User 默认访问页面
 */

// react 加载
import React from 'react';
import {hashHistory} from 'react-router';
// import define
import Title from '../../common/Title';
import Footer from '../../common/Footer';
// css
import '../../../assets/css/user/info/center.css';


// User 组件
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: '个人中心',
    };
  }

  //
  render() {
    return (
      <div className='center'>
        {/*Title begin*/}
        <Title title={this.state.title} router={this.props.router} />
        {/*Title end*/}

        <div className='center-nothing'>
          还没有电影票,赶紧去
          <span className='center-redirect' onClick={() => {hashHistory.push('/home')}}>首页</span>逛逛 ~~
        </div>

        {/*Footer begin*/}
        <Footer />
        {/*Footer end*/}
      </div>
    );
  }
}


// 导出
export default User;