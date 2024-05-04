import { Menu } from '@renderer/components'
import { IoMailSharp } from 'react-icons/io5'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { RiUserSearchFill } from 'react-icons/ri'
import { useAracajuCarrosContext } from '@renderer/context'
import { logoutService } from '@renderer/services/auth/logout'

import './perfil.sass'

export function Perfil(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const sair = () => {
    logoutService()
    window.location.reload()
  }
  const { usuario } = useAracajuCarrosContext()
  return (
    <div className="perfil_principal">
      <div className="home_menu">
        <Menu />
      </div>
      <div className="home_direito">
        <div className="perfil_cabecario">
          <div className="perfil_com_imagem">
            <img src={usuario.foto} alt="foto" />
            <div className="perfil_cabecario_info">
              <h1>
                {usuario.nome} {usuario.sobrenome}
              </h1>
              <h2>+55 {usuario.contato}</h2>
              <h2>{usuario.tipo}</h2>
            </div>
          </div>
          <div className="perfil_outras_info">
            <h1>Minha conta</h1>
            <div className="perfil_dados">
              <IoMailSharp />
              <p>Email: {usuario.email}</p>
            </div>
            <div className="perfil_dados">
              <FaMapMarkerAlt />
              <p>Meu endereço: {usuario.email}</p>
            </div>
            <div className="perfil_dados">
              <RiUserSearchFill />
              <p>CPF: {usuario.cpf}</p>
            </div>
          </div>
          <button onClick={sair}>Sair</button>
        </div>
      </div>
    </div>
  )
}
