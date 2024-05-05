import { Menu } from '@renderer/components'

import './errorScreen.sass'

export function ErrorScreen(): JSX.Element {
  return (
    <div className="home_principal">
      <div className="home_menu">
        <Menu />
      </div>
      <div className="error_screen_direito">
        <h1>NOT FOUND</h1>
      </div>
    </div>
  )
}
