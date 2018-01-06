/**
 * 注册页面 --> User 子组件
 */

// 引入 react
import React from 'react';
import Title from '../../common/Title';
// 引入 css
import '../../../assets/css/user/info/reg.css';


//  Reg 组件
class Reg extends React.Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      title: '用户注册',
    };
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
          <input type="number" className='reg-phone-ipt' placeholder="请输入您的手机号" />
        </div>

        <div className='reg-check'>
          <input type="checkbox" className='reg-check-ipt' id='reg-check-input'/>
          <label className='reg-check-label' htmlFor='reg-check-input'>
            <span className='reg-check-understand'>我已阅读并同意</span>
            <span className='reg-check-agree'>《美团网用户协议》</span>
          </label>
        </div>

        <div className='reg-btn'>
          <input type="button" className='reg-btn-send' value="获取验证码" onClick={() => {alert('Code: 001122')}} />
        </div>

        <div className='reg-foot'>
          <span className='reg-foot-desc'>© 狗眼电影 客服电话：</span>
          <span className='reg-foot-phone'>400-670-5335</span>
        </div>
      </div>
    )
  }
}


// 导出
export default Reg;