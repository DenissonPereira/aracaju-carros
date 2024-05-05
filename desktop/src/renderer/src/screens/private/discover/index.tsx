import { Menu, MostrarCarrosPrincipal } from '@renderer/components'

import './discover.sass'

export function Discover(): JSX.Element {
  return (
    <div className="home_principal">
      <div className="home_menu">
        <Menu />
      </div>
      <div className="discover_direito">
        <MostrarCarrosPrincipal />
      </div>
    </div>
  )
}
