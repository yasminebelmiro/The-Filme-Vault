import React, { useState } from "react";

import logo from "../../assets/logo.png";
import {
  Left,
  Right,
  Busca,
  NavLink,
  Logo,
  Perfil,
  Container,
  NavLinkStyled,
} from "./style";

export const Header = () => {
  const [isAuthenticed, setIsAuthenticed] = useState();
  return (
    <Container>
      <Left>
        <Logo src={logo} lt="" />
      </Left>
      {isAuthenticed ? (
        <Right>
          <Busca type="text" placeholder="Buscar filme" />
          <NavLink>Home</NavLink>
          <NavLink>Notificações</NavLink>
          <NavLink>Listas</NavLink>
          <Perfil
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEU2U3PfBorpAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC  "
            alt=""
          />
        </Right>
      ) : (
        <Right>
          <NavLink>Home</NavLink>
          <NavLinkStyled>Cadastrar</NavLinkStyled>
          <NavLinkStyled to={"/login"}>Entrar</NavLinkStyled>
        </Right>
      )}
    </Container>
  );
};
