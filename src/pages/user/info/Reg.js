/**
 * 注册页面 --> User 子组件
 */

// 引入 react
import React from 'react';
import Title from '../../common/Title';
// 引入 css
import '../../../assets/css/user/info/reg.css';
// js
// import util from '../../../assets/js/util';


//  Reg 组件
class Reg extends React.Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      title: '用户注册',
      checked: true,
      phoneNum: '',
      active: false,
    };
    //
    this.checkPhone=this.checkPhone.bind(this);
    this.checkSelect=this.checkSelect.bind(this);
    this.sendCode=this.sendCode.bind(this);
  }

  //
  render() {
    return (
      <div className='reg'>
        {/*Title begin*/}
        <Title title={this.state.title} router={this.props.router} />
        {/*Title end*/}

        <div className='reg-step'>
          <span className='reg-step-first active'>输出手机号</span>
          <span className='reg-step-arrow'>⇨</span>
          <span className='reg-step-second'>输入验证码</span>
          <span className='reg-step-arrow'>⇨</span>
          <span className='reg-step-third'>设置密码</span>
        </div>

        <div className='reg-phone'>
          <input type="number" className='reg-phone-ipt' placeholder="请输入您的手机号"
            onInput={this.checkPhone} value={this.state.phoneNum}/>
        </div>

        <div className='reg-check'>
          <input type="checkbox" className='reg-check-ipt' id='reg-check-input' checked={this.state.checked}
          onChange={this.checkSelect}/>
          <label className='reg-check-label' htmlFor='reg-check-input'>
            <span className='reg-check-understand'>我已阅读并同意</span>
            <span className='reg-check-agree'>《美团网用户协议》</span>
          </label>
        </div>

        <div className='reg-btn'>
          <input type="button" className={this.state.active ? 'reg-btn-send active' : 'reg-btn-send'} value="获取验证码"
            onClick={this.sendCode} />
        </div>

        <div className='reg-foot'>
          <span className='reg-foot-desc'>© 狗眼电影 客服电话：</span>
          <span className='reg-foot-phone'>400-670-5335</span>
        </div>
      </div>
    )
  }
  // 监听手机号
  checkPhone(ev) {
    let val = ev.target.value;
    this.setState({phoneNum: val});
    // 手机号验证
    if ((/^1[3|4|5|7|8]\d{9}$/.test(val)) && this.state.checked) {
      return this.setState({active: true});
    }else {
      return  this.setState({active: false});
    }
  }
  // 监听勾选框
  checkSelect(ev) {
    this.setState({checked: !this.state.checked});
    // 勾选框验证
    if ((/^1[3|4|5|7|8]\d{9}$/.test(this.state.phoneNum)) && this.state.checked !== true) {
      return this.setState({active: true});
    } else {
      return this.setState({active: false});
    }
  }
  // 验证码发送
  sendCode(ev) {
    // 验证是否按钮是否点亮
    if ((/^1[3|4|5|7|8]\d{9}$/.test(this.state.phoneNum)) && this.state.checked === true) {
      const code = [];
      for (let i = 0; i <= 5; i++) {
        code[i] = Math.floor(Math.random() * 10);
      }
      // 发送验证码
      alert('验证码为:' + code.join(''));
    } else {
      return false;
    }
  }
}


// 导出
export default Reg;