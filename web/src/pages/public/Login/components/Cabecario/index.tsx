import BemVindo from '../../../../../assets/images/bemvindo.png'

import './cabecario.sass'

export const Cabecario = () => {
  return (
    <div className='cabecario_principal'>
        <figure>
            <img src={BemVindo} alt="Bem-vindo" />
        </figure>
    </div>
  )
}
