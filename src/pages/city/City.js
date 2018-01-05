/**
 * City 页面
 */

// react 加载
import React from 'react';
import {hashHistory} from 'react-router';
// import define
import Title from '../common/Title';
import Footer from '../common/Footer';
// css
import '../../assets/css/city/city.css';


// City 组件
class City extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: '选择城市',
    };
  }

  // TODO
  render() {
    return (
      <div className='city'>
        {/*Title begin*/}
        <Title title={this.state.title} router={this.props.router} />
        {/*Title end*/}

        <ul className='city-hot'>
          <li>热门城市</li>
          <li>北京</li>
          <li>上海</li>
          <li>广州</li>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>H</li>
          <li>H</li>
          <li>H</li>
          <li>H</li>
          <li>H</li>
          <li>H</li>
          <li>H</li>
          <li>H</li>
          <li>H</li>
          <li>H</li>
        </ul>

        {/*Footer begin*/}
        <Footer />
        {/*Footer end*/}
        <div className='city-box'/>
      </div>
    );
  }
}


// 导出
export default City;