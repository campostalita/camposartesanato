import React from "react";
import Logo from "../../img/logo.png";
import styled from "styled-components";
import { mediaQ } from '../../ui/MediaQuery';

const Back = styled.div`
  background-size: 100% 100%;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #FDC3C2;
  display: flex;
  justify-content: center;
  align-items: center;

   ${mediaQ.mobile} {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
`;

const LogoBg = styled.div`
  width: 50vw;
  height: 80vh;
  
  color: #653332;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaQ.mobile} {
    width: 80vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
  `;

const LogoStyle = styled.img`
  width: 50%;
   margin: 15px;  

   ${mediaQ.mobile} {
    width: 40%;
  } 
`;

const Slogan = styled.div`
width: 60vw;
font-size: 20px;
font-weight: bold;
color: #653332;
padding: 0px 40px 0px 40px;
line-height: 1.6;
text-align: center;

${mediaQ.mobile} {
  height: 56vh;
  font-size: 10px;
  font-weight: bold;
  line-height: 1.6;
  text-align: center;
  } 
`;  

const Initial = () => {
    return(
  <Back>
    <LogoBg>
      <LogoStyle src={Logo} alt="Logo Campos Artesanato"/>
       <h3>Feito com carinho para você!</h3>
    </LogoBg>

    <Slogan>
      A Campos Artesanato nasceu com a finalidade de ajudar amigos em pequenos consertos e soluções práticas confeccionados em tecidos. Cada produto é feito pensando no cliente, colocando muito amor e carinho durante sua produção.
    </Slogan>
  </Back>
 )}

export default Initial;
