import { Cabecario, Contatos, FormularioLogin } from './components'
import './login.sass'

export const Login = () => {
  return (
    <div className="login_principal">
      <div className="login_esquerdo">
        <Cabecario />
        <FormularioLogin />
        <div className="login_esquerdo_contatos">
          <Contatos />
        </div>
        <div className="informacoes_direitos">
            <p>Todos os Direitos Reservados &copy; | 2024</p>
        </div>
      </div>
      <div className="login_direito">

      </div>
    </div>
  )
}
