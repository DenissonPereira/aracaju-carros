import { Menu } from '@renderer/components'

import './home.sass'

export function Home(): JSX.Element {
  return (
    <div className="home_principal">
      <div className="home_menu">
        <Menu />
      </div>
      <div className="home_direito">home</div>
    </div>
  )
}
