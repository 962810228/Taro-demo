import Taro from '@tarojs/taro'
import './index.less'

interface Props {
  path: string
  className: string
}

const GaSVG: Taro.FunctionComponent<Props> = ({ className, path }: Props) => {
  return (
    <svg className={`icon-svg ${className}`} aria-hidden='true'>
      <use xlinkHref={path} />
    </svg>
  )
}

export default GaSVG
