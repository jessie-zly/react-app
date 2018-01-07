/**
 * LoginByPhone 页面 --> login 子组件
 */

// 引入 react
import React from 'react';
import {hashHistory} from "react-router";
// css
import '../../../../assets/css/user/info/login/loginByPhone.css';
import util from "../../../../assets/js/util";


// LoginByPhone 组件
class LoginByPhone extends React.Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: '', // 手机号
      active: false, // 发送验证码按钮
      code: '', // 验证码内容存储
      inputCode: '', // 验证码确认
    };
    // bind this
    this.checkPhoneNum=this.checkPhoneNum.bind(this); // 手机号验证
    this.send = this.send.bind(this); // 验证码发送
    this.changeInputCode = this.changeInputCode.bind(this); // 验证码输入
    this.checkCode = this.checkCode.bind(this); // inputCode 验证
  }
  //
  render() {
    return (
      <div className='loginByPhone'>
        <div className='loginByPhone-name'>
          <input type="number" className="loginByPhone-name-ipt" placeholder="请输入手机号"
            onInput={this.checkPhoneNum} value={this.state.phoneNum}/>
          <input type="button"
            value="发送验证码"
            className={this.state.active ? 'loginByPhone-name-send active' : 'loginByPhone-name-send'}
            onClick={this.send} />
        </div>
        <div className='loginByPhone-divide'/>
        <div className='loginByPhone-code'>
          <input type="number" className="loginByPhone-code-ipt" placeholder="请输入短信验证码"
            value={this.state.inputCode} onChange={this.changeInputCode}/>
          </div>
        <div className='loginByPhone-divide'/>
        <div className='login-sub'>
          <input type="submit" value="确认登录" className="login-sub-ipt"
            onClick={this.checkCode} />
        </div>
        <div className='loginByPhone-jump'>
          <span className='loginByPhone-jump-reg' onClick={() => {hashHistory.push('/user/reg')}}>立即注册</span>
          <span className='loginByPhone-jump-forget' onClick={() => {hashHistory.push('/user/forget')}}>找回密码</span>
        </div>
        <div className='loginByPhone-foot'>
          <span className='loginByPhone-foot-desc'>© 狗眼电影 客服电话：</span>
          <span className='loginByPhone-foot-phone'>400-670-5335</span>
        </div>
      </div>
    );
  }
  // 监听手机号
  checkPhoneNum(ev) {
    let val = ev.target.value;
    this.setState({phoneNum: val});
    // 手机号验证
    if (/^1[3|4|5|7|8]\d{9}$/.test(val)) {
      return this.setState({active: true});
    } else {
      return this.setState({active: false});
    }
  }
  // 验证码发送
  send(ev) {
    // 发送按钮是否点亮
    if (this.state.active) {
      // 随机 code
      const code = util.sendCode();
      // code 更新
      this.setState({code});
      // 发送
      alert('验证码为:' + code);
    } else {
      ev.preventDefault();
    }
  }
  // 监听验证码输入
  changeInputCode(ev){
    // 更新 inputCode
    this.setState({inputCode: ev.target.value});
  }
  // inputCode 验证
  checkCode(ev) {
    if (this.state.inputCode !== '' && this.state.code !== '') {
      if (this.state.inputCode === this.state.code) {
        hashHistory.push('/user');
      } else {
        // 提示信息
        alert('验证码输入有误,请从新输入!');
        ev.preventDefault();
      }
    } else {
      alert('手机号或者验证码不能为空!');
    }
  }
}


// 导出
export default LoginByPhone;