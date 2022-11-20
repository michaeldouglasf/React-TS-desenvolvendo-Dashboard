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
        <MenuItemLink href="/dashboard">
         <MdDashboard/>
          DashBoard
        </MenuItemLink>
    
        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward/>
          Entradas
        </MenuItemLink>
      
        <MenuItemLink href="/list/exit-balance">
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
