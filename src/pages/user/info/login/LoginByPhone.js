/**
 * LoginByPhone 页面 --> login 子组件
 */

// 引入 react
import React from 'react';


// LoginByPhone 组件
class LoginByPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '用户注册',
    }
  }

  //
  render() {
    return (
      <div className="loginByPhone">

        login by phone ...

      </div>
    );
  }
}


// 导出
export default LoginByPhone;