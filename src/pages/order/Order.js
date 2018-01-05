/**
 * Order 组件
 */

// 引入 react
import React from 'react';
import Title from '../common/Title';


// Order 组件
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '影票详情'
    };
  }

  //
  render() {
    return (
      <div>
        {/*Title begin*/}
        <Title title={this.state.title} router={this.props.router}/>
        {/*Title end*/}

      </div>
    )
  }

}


// 导出
export default Order;