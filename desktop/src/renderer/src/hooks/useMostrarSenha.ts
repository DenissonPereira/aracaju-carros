import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const UseMostrarSenha = () => {
  const [tipo, setTipo] = useState<string>('password')
  const [visivel, setVisivel] = useState<boolean>(false)

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

  return { mudarVisibilidade, tipo, setTipo, visivel, setVisivel }
}
