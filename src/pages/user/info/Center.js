/**
 * UserCenter 页面
 */

// react 加载
import React from 'react';
import {hashHistory} from 'react-router';
//
import Title from '../../common/Title';


// User 组件
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: '我的订单',
    };
  }

  //
  render() {
    return (
      <div className='user'>
        {/*Title begin*/}
        <Title title={this.state.title} router={this.props.router} />
        {/*Title end*/}
        <button className='user-outer' onClick={()=>{hashHistory.push('/user/login')}}>退出</button>
      </div>
    );
  }
}


// 导出
export default User;