export interface ICarros {
  id: number
  marca: string
  modelo: string
  ano: string
  descricao: string
  preco: string
  quilometragem: string
  disponibilidade: string
  imagem1: string
  imagem2: string
  imagem3: string
  imagem4: string
  tipo: string
}

export interface IModelos {
  id: number
  modelo: string
}

export interface IUsuario {
  id: number
  contato: number
  tipo: string
  nome: string
  sobrenome: string
  cpf: string
  endereco: string
  email: string
  senha: string
  foto: string
}

export interface IMarcas {
  id: number
  nome: string
  quantidade: string
  imagem: string
}
