import { Menu, TodasAsMarcas } from '@renderer/components'

import './marcas.sass'

export function Marcas(): JSX.Element {
  return (
    <div className="home_principal">
      <div className="home_menu">
        <Menu />
      </div>
      <div className="marcas_direito">
        <TodasAsMarcas />
      </div>
    </div>
  )
}
