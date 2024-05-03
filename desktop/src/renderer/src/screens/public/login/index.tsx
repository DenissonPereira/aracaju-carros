import { FormularioLogin } from '@renderer/components'
import BemVindo from '../../../assets/images/bemvindo.png'

import './login.sass'

export function Login(): JSX.Element {
  return (
    <div className="login_principal">
      <div className="login_esquerdo">
        <img src={BemVindo} alt="BemVindo" />
        <FormularioLogin />
      </div>
      <div className="login_direito"></div>
    </div>
  )
}
