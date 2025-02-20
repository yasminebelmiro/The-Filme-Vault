import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-evenly;
`;

export const Left = styled.div`
  width: 60%;
`;

export const Logo = styled.img`
  width: 60px;
  margin: 0 30px;
`;

export const NavLink = styled(Link)`
  color: var(--gray);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Perfil = styled.img`
  width: 50px;
  border-radius: 100%;
`;

export const Busca = styled.input`
  padding-right: 1rem;
  width: 200px;
  height: 40px;
  background: var(--gray);
  border: none;
  border-radius: 10px;
  padding-left: 1rem;


  &:focus {
    outline: none;
  }
`;

export const NavLinkStyled = styled(Link)`
  color: var(--gray);
  text-decoration: none;
  background-color: var(--blue-200);
  padding: 5px;
  width: 200px;
  text-align: center;
  border-radius: 10px;
  &:hover {
    text-decoration: underline;
  }
`;
