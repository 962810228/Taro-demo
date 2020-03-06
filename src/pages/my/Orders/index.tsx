import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { GaSVG } from '../../../components'
import './index.less'


const order = {
    title: '我的订单',
    describe: '查看全部',
    orderStatus: [
        {
            id: '1',
            text: '待发货',
            path: '/my/orders?index=1',
            icon: '#icondaifahuo'
        }, {
            id: '2',
            text: '待收货',
            path: '/my/orders?index=2',
            icon: '#icondaishouhuo'
        }, {
            id: '3',
            text: '已完成',
            path: '/my/orders?index=3',
            icon: '#iconyiwancheng'
        }, {
            id: '4',
            text: '退货单',
            path: '/my/service-orders',
            icon: '#icontuihuodan'
        },
    ]
}

class Orders extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }
  
  render() {
    return (
      <View className='head-order'>
        <View className='top'>
          <Text className='title' style={{ paddingLeft: '15px' }}>{order.title}</Text>
          <View className='check-more' style={{ paddingRight: '15px' }}>
            <Text>{order.describe}</Text>
            <Image className='arrow' src={require('../../../images/my/arrow.png')} />
          </View>
        </View>
        <View className='main'>
          {
            order.orderStatus.map(item => {
              return (
                <View className='order-status' key={item.id}>
                  <GaSVG className='icon' path={item.icon} />
                  <Text className='text'>{item.text}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Orders
