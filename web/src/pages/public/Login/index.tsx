import { useState } from 'react'
import { Cabecario, CabecarioCadastro, Contatos, FormularioCadastro, FormularioLogin } from './components'

import './styles'

export const Login = () => {

  const [login, setLogin] = useState<boolean>(true)
  const cadastrar = () => {
    if (login === true) {
      setLogin(false)
    } else {
      setLogin(true)
    }
  }

  return (
    <div className="login_principal">
      <div className="login_esquerdo">
        {login ? <Cabecario /> : <CabecarioCadastro />}
        {login ? <FormularioLogin /> : <FormularioCadastro />}
        <div className="login_esquerdo_contatos">
          <Contatos />
        </div>
        <div className="login_esquerdo_criar_conta">
          <button className='btn_cadastrar' onClick={cadastrar}>{login ? 'Cadastre-se' : 'Voltar'}</button>
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
