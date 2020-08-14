import React from "react";
import Logo from "../../img/logo.png";
import { Back, LogoBg, LogoStyle, Slogan } from './style'

const Initial = () => {
    return(
  <Back>
    <LogoBg>
      <LogoStyle src={Logo} alt="Logo Campos Artesanato"/>
       <h3>Feito com carinho para você!</h3>
    </LogoBg>

    <Slogan>
      A Campos Artesanato nasceu com a finalidade de ajudar amigos em pequenos consertos e soluções práticas confeccionadas em tecidos. Cada produto é feito pensando no cliente, colocando muito amor e carinho durante sua produção.
    </Slogan>
  </Back>
 )}

export default Initial;
