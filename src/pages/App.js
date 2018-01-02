/**
 * 顶层组件
 */

// 引入 react
import React from 'react';
import {Link} from 'react-router';

// 组件引入
// import User from './User/User';
// import Home from './Home/Home';

// App 组件
class App extends React.Component {
  //
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/user">user</Link></li>
        </ul>
        <h3>App组件~~</h3>
        {this.props.children}
      </div>
    );
  }
}


// 导出 App
export default App;