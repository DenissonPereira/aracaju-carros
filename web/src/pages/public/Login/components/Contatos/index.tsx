import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

import './contatos.sass'

export const Contatos = () => {
  return (
    <div className="contatos_principal">
        <div className="informacoes_contatos">
            <div className="contatos_telefone">
                <FaPhoneSquareAlt />
                <p>(79) 9 98897-X785</p>
            </div>
            <div className="conta_email_suporte">
                <IoMailSharp />
                <p>aracajucarroappx@suport.com</p>
            </div>
        </div>
    </div>
  )
}
