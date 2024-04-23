

import { FormularioLogin } from './components'
import './login.sass'

export const Login = () => {
  return (
    <div className="login_principal">
      <div className="login_esquerdo">
        <FormularioLogin />
      </div>
      <div className="login_direito">

      </div>
    </div>
  )
}
