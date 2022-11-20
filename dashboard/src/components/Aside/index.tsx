import React, { useState } from "react";

import {
  Container,
  LogoImg,
  MenuContainer,
  Header,
  MenuItemLink,
  Title,
} from "./styles";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp

} from 'react-icons/md'
import logoImg from "../../../public//assets/logo.svg";
const Aside = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo-Minha-Carteira" />
        <Title>Minha Carteira</Title>
      </Header>
     
      <MenuContainer>
        <MenuItemLink href="#">
         <MdDashboard/>
          DashBoard
        </MenuItemLink>
    
        <MenuItemLink href="#">
          <MdArrowUpward/>
          Entradas
        </MenuItemLink>
      
        <MenuItemLink href="#">
          <MdArrowDownward/>
          Saidas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp/>
          Sair
        </MenuItemLink>
      </MenuContainer>

    </Container>
  );
};

export default Aside;
