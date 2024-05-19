import { useState } from "react";
import { FaUser, FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

import './formularioLogin.sass'
import { loginService } from "../../../../../services/auth/login";
import { useNavigate } from "react-router-dom";
import { useAracajuCarrosContext } from "../../../../../context";

export const FormularioLogin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [tipo, setTipo] = useState<string>('password');
  const [visivel, setVisivel] = useState<boolean>(false);

  const { setUsuario } = useAracajuCarrosContext();

  const mudarVisibilidade = () => {
    if (visivel === false) {
      setVisivel(true);
      setTipo('text');
    } else {
      setVisivel(false);
      setTipo('password');
    }
  }

  async function handleLogin() {
    event?.preventDefault();
    const data = await loginService(email, senha, setUsuario);
    console.log(data);

    if (data.status) {
      navigate('/home');
    } else {
      alert(data);
    }
  }

  return (
    <div className="formulario_login_principal">
      <form onSubmit={handleLogin}  className="formulario_login">
        <div className="formulario_login_email">
          <FaUser />
          <input 
            type="email"
            placeholder="E-mail"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input_login"
            required
          />
        </div>
        <div className="formulario_login_email">
          <div className="div_olho" onClick={mudarVisibilidade}>
            {visivel ? <IoEyeSharp /> : <FaEyeSlash />}
          </div>
          <input
            type={tipo}
            placeholder="Senha"
            id="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            className="input_login"
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
