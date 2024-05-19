import React, { useState } from "react"
import { FcBusinessman, FcSelfie, FcPhone, FcUnlock, FcLock, FcViewDetails, FcSignature, FcFeedback } from "react-icons/fc";

import './formularioCadastro.sass'

export const FormularioCadastro = () => {

  const [email, setEmail] = useState<string>('')
  const [nome, setNome] = useState<string>('')
  const [sobrenome, setSobrenome] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [contato, setContato] = useState<string>('')
  const [foto, setFoto] = useState<string>('')

  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false)

  const verSenha = () => {
    if (mostrarSenha === false) {
      setMostrarSenha(true)
    } else {
      setMostrarSenha(false)
    }
  }

  async function cadastrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={cadastrar}>
        <div className="cadastro">
          <FcFeedback />
          <input
            type="email"
            name="email"
            id="email_id"
            className="input_cadastro"
            placeholder="Digite seu e-mail aqui"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="cadastro">
          <FcSignature />
          <input
            type="text"
            name="nome"
            id="nome_id"
            className="input_cadastro"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="cadastro">
          <FcBusinessman />
          <input
            type="text"
            name="sobrenome"
            id="sobrenome_id"
            className="input_cadastro"
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>
        <div className="cadastro">
          <FcViewDetails />
          <input
            type="text"
            name="cpf"
            id="cpf_id"
            className="input_cadastro"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div className="cadastro_senha">
          <div className="cadastro_ver_senha" onClick={verSenha}>
            {mostrarSenha ? <FcUnlock /> : <FcLock />}
          </div>
          <input
            type={mostrarSenha ? "text" : "password"}
            name="senha"
            id="senha_id"
            className="input_cadastro"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div className="cadastro">
          <FcPhone />
          <input
            type="text"
            name="contato"
            id="contato_id"
            className="input_cadastro"
            placeholder="Contato"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            required
          />
        </div>
        <div className="cadastro">
          <FcSelfie />
          <input
            type="text"
            name="foto"
            id="foto_id"
            className="input_cadastro"
            placeholder="Url da foto"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            required
          />
        </div>
        <div className="formulario_login_senha_checkbox">
          <input 
            type="checkbox" 
            name="check"
            id="checkbox"
            className="checkbox_login"
            required
          />
          <p>Ao informar seus dados e seguir para a próxima etapa, você automaticamente concorda com nossa <a href="">Política de Privacidade</a> e com os <a href="">Termos de Uso</a>.</p>
        </div>
      </form>
    </div>
  )
}
