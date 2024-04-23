import { Cabecario, Contatos, FormularioLogin } from './components'
import './login.sass'

export const Login = () => {

  const cadastrar = () => {

  }

  return (
    <div className="login_principal">
      <div className="login_esquerdo">
        <Cabecario />
        <FormularioLogin />
        <div className="login_esquerdo_contatos">
          <Contatos />
        </div>
        <div className="login_esquerdo_criar_conta">
          <p>Cadastre-se <a onClick={cadastrar}>aqui!</a></p>
          <p><a href="">Esqueci a senha</a></p>
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
