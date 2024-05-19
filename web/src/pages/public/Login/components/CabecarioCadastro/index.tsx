import Cadastro from '../../../../../assets/images/cadastro.png'

import './cabecario.sass'
import './cabecarioResponsividade.sass'

export const CabecarioCadastro = () => {
  return (
    <div className='cabecario_cadastro_principal'>
        <figure>
            <img src={Cadastro} alt="Cadastro" />
        </figure>
    </div>
  )
}
