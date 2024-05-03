import { FaTachometerAlt, FaHome, FaStar } from 'react-icons/fa'
import { MdBrowserUpdated } from 'react-icons/md'
import { IoCarSport } from 'react-icons/io5'
import { FaHammer } from 'react-icons/fa6'
import { useAracajuCarrosContext } from '@renderer/context'

import './menu.sass'

export function Menu(): JSX.Element {
  const { usuario } = useAracajuCarrosContext()
  return (
    <div>
      <div className="home_menu_logo">
        <FaTachometerAlt />
        <h1>Aracaju Carros</h1>
      </div>
      <div className="home_menu_icones">
        <div className="icone">
          <FaHome />
          <p>Home</p>
        </div>
        <div className="icone">
          <FaStar />
          <p>Discover</p>
        </div>
        <div className="icone">
          <IoCarSport />
          <p>Marcas</p>
        </div>
        {usuario.tipo === 'admin' && (
          <div className="icone">
            <MdBrowserUpdated />
            <p>Updates</p>
          </div>
        )}
        <div className="icone">
          <FaHammer />
          <p>Develop</p>
        </div>
      </div>
      <div className="home_menu_perfil">
        <div className="home_menu_perfil_ola">
          <h1>Olá, {usuario.nome}!</h1>
        </div>
        <div className="home_menu_perfil_entrar">
          <img src={usuario.foto} alt="foto_perfil" />
          <button>Ver perfil</button>
        </div>
      </div>
    </div>
  )
}
