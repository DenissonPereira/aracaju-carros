// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function formatarNumero(numeroString: string): string {
  const numeroFloat = parseFloat(numeroString.replace(',', '.'))
  const numeroFormatado = numeroFloat.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return numeroFormatado
}
