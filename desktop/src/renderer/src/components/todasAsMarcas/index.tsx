import { useAracajuCarrosContext } from '@renderer/context'

import './todasAsMarcas.sass'

export function TodasAsMarcas(): JSX.Element {
  const { usuario, marcas } = useAracajuCarrosContext()
  return (
    <div className="todas_as_marcas_principal">
      <h1 className="todas_as_marcas_h1">
        {usuario.nome}, aqui estão todas as marcas e a quantidade de carros no estoque!
      </h1>
      <div className="todas_as_marcas_grid">
        {marcas.map((item) => (
          <div key={item.id} className="todas_as_marcas_grid_unica">
            <img src={item.imagem} alt="" />
            <h2>{item.nome}</h2>
            <div className="todas_as_marcas_quantidade">
              <h3>Quantidade: </h3>
              <span className={item.quantidade == '0' ? 'semCarros' : 'temCarros'}>
                {item.quantidade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
