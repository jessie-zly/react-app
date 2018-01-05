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
      <div className='order'>
        {/*Title begin*/}
        <Title title={this.state.title} router={this.props.router}/>
        {/*Title end*/}
        <div className="order-show">暂无订单信息~~</div>
        <ul className="order-list">

          {/*<li className="order-list-info">*/}
            {/*<div className="list-cash"> ¥ {12}</div>*/}
            {/*<div className="order-info">*/}
              {/*<div className="info-time">*/}
                {/*<p>2017-12-28</p>*/}
                {/*<span>10:55</span>*/}
              {/*</div>*/}
              {/*<div className="info-desc">*/}
                {/*<span>{666}</span>*/}
                {/*<p>上海宝山大光明影城</p>*/}
                {/*<p>座位 x {5}</p>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</li>*/}

        </ul>
      </div>
    )
  }

}


// 导出
export default Order;