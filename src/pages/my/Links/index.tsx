import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { GaSVG } from '../../../components'

import './index.less'

const routes = [
    {
        name: '优惠券',
        path: '/my/coupons',
        requireLogin: true,
        icon: '#iconme_coupon',
    },
    {
        name: '收货地址管理',
        path: '/my/addresses',
        requireLogin: true,
        icon: '#iconme_address',
    },
    {
        name: '发票管理',
        path: '/invoice?routeFrom=my',
        requireLogin: true,
        icon: '#iconme_receipt',
    },
    {
        name: '券码兑换',
        path: null,
        requireLogin: true,
        icon: '#iconme_duihuan',
    },
    {
        name: '常见问题',
        path: '/my/faq',
        requireLogin: false,
        icon: '#iconme_question'
    },
    {
        name: '用户协议',
        path: '/my/user-agreement',
        requireLogin: false,
        icon: '#iconme_agreement'
    },
    {
        name: '联系客服',
        path: '',
        requireLogin: false,
        icon: '#iconme_customerservice'
    }
]

class Links extends Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    const info = [{ id: 0, array: routes.slice(0, 4) }, { id: 0, array: routes.slice(4, 7) }]
  
    return (
      <View className='my-list'>
        {
          info.map((item, index) => {
            return (
              <View className='block-box' key={index}>
                {
                  item.array.map((value, i) =>
                    <View className='item' key={i}>
                      <GaSVG className='icon' path={value.icon} />
                      <View className='title'>{value.name}</View>
                      <Image className='arrow' src={require('../../../images/my/arrow.png')} />
                    </View>
                  )
                }
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default Links
