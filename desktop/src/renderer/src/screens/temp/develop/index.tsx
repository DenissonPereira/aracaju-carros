import { Menu } from '@renderer/components'

import './develop.sass'

export function Develop(): JSX.Element {
  return (
    <div className="home_principal">
      <div className="home_menu">
        <Menu />
      </div>
      <div className="develop_direito">
        <h1>Tela em construção!</h1>
      </div>
    </div>
  )
}
