/**
 * 顶层组件
 */

// 引入 react
import React from 'react';

// 全局 css 引入
import '../assets/css/common.css';
// 组件
import Nav from './common/Nav';


// App 组件
class App extends React.Component {
  //
  render() {
    return (
      <div>
        {this.props.children}
        <Nav />
      </div>
    );
  }
}


// 导出 App
export default App;