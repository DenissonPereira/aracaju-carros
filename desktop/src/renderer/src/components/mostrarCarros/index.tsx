import { useAracajuCarrosContext } from '@renderer/context'
import './mostrarCarros.sass'
import { UseMostrarCarros } from '@renderer/hooks'
import { formatarNumero } from '@renderer/utils'

export function MostrarCarrosPrincipal(): JSX.Element {
  const { modelos } = useAracajuCarrosContext()

  const { mudarNumero, carrosFiltrados, selectedItem, numero } = UseMostrarCarros()

  return (
    <div className="mostrar_Carros_principal">
      <div className="mostrar_carros_por_tipos">
        {modelos.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => mudarNumero(item)}
              className={selectedItem && numero == item.id ? 'btn_selecionado' : 'btn_geral'}
            >
              {item.modelo}
            </button>
          </div>
        ))}
      </div>
      <div className="mostrar_carros_da_categoria">
        {carrosFiltrados.map((item) => (
          <div key={item.id} className="mostrar_carros_completo">
            <img src={item.imagem1} alt={item.modelo} />
            <div className="mostrar_carros_descricao">
              <p>{item.modelo}</p>
              <p>Valor: {formatarNumero(item.preco)}</p>
              <p className={item.disponibilidade === 'Em estoque' ? 'temEstoque' : 'naoTemEstoque'}>
                {item.disponibilidade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
