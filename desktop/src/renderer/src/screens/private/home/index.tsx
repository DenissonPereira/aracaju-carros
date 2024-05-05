import { Menu } from '@renderer/components'
import Image from '../../../assets/images/home.png'

import './home.sass'

export function Home(): JSX.Element {
  return (
    <div className="home_principal">
      <div className="home_menu">
        <Menu />
      </div>
      <div className="home_direito">
        <img src={Image} alt="image" className="home_image_direita" />
      </div>
    </div>
  )
}
