import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

import Profile from './Profile/index'
import Orders from './Orders/index'
import Links from './Links/index'

type myState = {
  detail: {
    id: string
    openId: string
    mobilePhone: string
    nickName: string
  }
  showBindPhone: boolean
}

interface MyStateProps {
  props: myState
}

class MyPage extends Component<MyStateProps> {
  config = {
    navigationBarTitleText: '我的'
  }
  constructor(props: any) {
    super(props);
    this.state = {
      detail: {
        id: '',
        openId: '',
        mobilePhone: '',
        nickName: '',
      },
      showBindPhone: false
    };
  }

    componentDidMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentDidCatchError() {
    }

  render() {
    const { detail, showBindPhone }: any = this.state;
    console.log('detail', detail);
    console.log('showBindPhone', showBindPhone);
    return (
      <View className='my-page'>
          <Profile />
          <Orders />
          <Links />
      </View>
    );
  }
}

export default MyPage
