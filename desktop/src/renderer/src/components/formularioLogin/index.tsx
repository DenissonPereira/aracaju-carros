import { useAracajuCarrosContext } from '@renderer/context'
import { loginService } from '@renderer/services/auth/login'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaEyeSlash } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'

import './formulario.sass'

export function FormularioLogin(): JSX.Element {
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [tipo, setTipo] = useState<string>('password')
  const [visivel, setVisivel] = useState<boolean>(false)

  const { setUsuario } = useAracajuCarrosContext()

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const mudarVisibilidade = () => {
    if (visivel === false) {
      setVisivel(true)
      setTipo('text')
    } else {
      setVisivel(false)
      setTipo('password')
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function handleLogin() {
    event?.preventDefault()
    const data = await loginService(email, senha, setUsuario)
    console.log(data)

    if (data.status) {
      navigate('/home')
    } else {
      alert(data)
    }
  }

  return (
    <div className="formulario_login_principal">
      <form onSubmit={handleLogin} className="formulario_login">
        <div className="formulario_login_email">
          <FaUser />
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input_login"
            required
          />
        </div>
        <div className="formulario_login_email">
          <div className="div_olho" onClick={mudarVisibilidade}>
            {visivel ? <IoEyeSharp /> : <FaEyeSlash />}
          </div>
          <input
            type={tipo}
            placeholder="Senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="input_login"
            required
          />
        </div>
        <div className="formulario_login_senha_checkbox">
          <input type="checkbox" name="check" id="checkbox" className="checkbox_login" required />
          <p>
            Ao informar seus dados e seguir para a próxima etapa, você automaticamente concorda com
            nossa <a href="">Política de Privacidade</a> e com os <a href="">Termos de Uso</a>.
          </p>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
