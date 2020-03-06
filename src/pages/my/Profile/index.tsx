import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

import { GaSVG } from '../../../components'

interface MyProfileProps {
    detail: {
        id: string
        openId: string
        mobilePhone: string
        nickName: string
    }
}

class Profile extends Component<any, MyProfileProps> {
    constructor(props: any) {
        super(props)
        this.state = {
            detail: {
                id: '',
                openId: '',
                mobilePhone: '',
                nickName: '',
            },
        }
    }

    render() {
        const {
            detail,
        } = this.state

        return (
          <View className='head-wrap'>
              <GaSVG className='head-img' path='#icontouxiag' />
              {
                  detail.nickName &&
                  <View className='nickname'>{detail.nickName}</View>
              }
              <View className='phone'>绑定手机</View>
          </View>
        )
    }
}

export default Profile
