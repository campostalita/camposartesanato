import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  background: #FF9899;
  width: 100vw;
  height: 8vh;
`;

const Title = styled.title`
  width: 100vw;
  height: 8vh;
  font-size: 20px;
  font-weight: bold;
  color: whitesmoke;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px 0px 5px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Title> Página Inicial . Sobre . Produtos</Title>
    </HeaderStyle>
  );
};

export default Header;
