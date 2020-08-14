import React from "react";
import { HeaderStyle, Title } from "./style"

const Header = () => {
  return (
    <HeaderStyle>
      <Title> Página Inicial . Sobre . Produtos</Title>
    </HeaderStyle>
  );
};

export default Header;

// Essa parte é pra qdo for arrumar os links, colocar esse efeito neles
//  transition: opacity .3s;

//  &:hover,
//  &: focus {
//    opacity: .5
//  }