/**
 * LoginByName 页面 --> login 子组件
 */

// 引入 react
import React from 'react';
import {hashHistory} from 'react-router';
// css
import '../../../../assets/css/user/info/login/loginByName.css';


// LoginByName 组件
class LoginByName extends React.Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      username: '', // 用户名
      password: '', // 密码
      bUsername: false,
      bPassword: false,
    };
    // bind this
    this.checkUsername=this.checkUsername.bind(this); // 用户名
    this.checkPassword = this.checkPassword.bind(this); // 密码
    this.checkForm = this.checkForm.bind(this); // 表单验证
  }
  //
  render() {
    return (
      <div className='loginByName'>
        <div className='loginByName-name'>
          <input type="text" className="loginByName-name-ipt" placeholder="账户名/手机号/Email"
            onChange={this.checkUsername} value={this.state.username} />
        </div>
        <div className='loginByName-divide'/>
        <div className='loginByName-pw'>
          <input type="password" className="loginByName-pw-ipt" placeholder="请输入您的密码"
            onChange={this.checkPassword} value={this.state.password} />
        </div>
        <div className='loginByName-divide'/>
        <div className='login-sub'>
          <input type="submit" value="确认登录" className="login-sub-ipt"
            onClick={this.checkForm} />
        </div>
        <div className='loginByName-jump'>
          <span className='loginByName-jump-reg' onClick={() => {hashHistory.push('/user/reg')}}>立即注册</span>
          <span className='loginByName-jump-forget' onClick={() => {hashHistory.push('/user/forget')}}>找回密码</span>
        </div>
        <div className='loginByName-foot'>
          <span className='loginByName-foot-desc'>© 狗眼电影 客服电话：</span>
          <span className='loginByName-foot-phone'>400-670-5335</span>
        </div>
      </div>
    );
  }
  //
  checkUsername(ev) {
    this.setState({username: ev.target.value});
  }

  //
  checkPassword(ev) {
    this.setState({password: ev.target.value});
  }
  //
  checkForm(ev) {
    //
    if (/^1[3|4|5|7|8]\d{9}$/.test(this.state.username) ||
      /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.state.username) ||
      /^[a-zA-Z0-9_-]{4,16}$/.test(this.state.username)) {
      this.setState({bUsername: true});
    } else {
      this.setState({bUsername: false});
    }
    //
    if (111) {
      this.setState({bPassword: true});
    } else {
      this.setState({bPassword: false});
    }
    //
    if (this.state.bUsername && this.state.bPassword) {
      hashHistory.push('/user')
    }else {
      // 提示信息
      alert('用户名或密码有误,请从新输入!');
      ev.preventDefault();
    }
  }
}


// 导出
export default LoginByName;