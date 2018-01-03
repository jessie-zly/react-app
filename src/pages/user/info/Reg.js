/**
 * 注册页面 --> User 子组件
 */

// 引入 react
import React from 'react';


// 引入 UserNav 组件
import UserNav from '../UserNav';

// 引入 css
import '../../../assets/css/user/reg.css';


//  Reg 组件
class Reg extends React.Component {
  //
  render() {
    return (
      <div className="reg-container">
        {/*<UserNav />*/}
        <section className="main">
          <form>
            <ul>
              <li>
                <label>账户名称：</label>
                <input type="text" id="username" placeholder="请输入账户" required />
              </li>
              <li>
                <label>登录密码：</label>
                <input type="password" id="password" placeholder="请输入密码" required="required" />
              </li>
              <li>
                <label>确认密码：</label>
                <input type="password" id="againpassword" placeholder="请输入密码" required="required" />
              </li>
              <li><input type="submit" value="确认注册" id="btn_sub" /></li>
            </ul>
          </form>
        </section>
      </div>
    )
  }

  //
  componentDidMount() {

  }
}


// 导出
export default Reg;