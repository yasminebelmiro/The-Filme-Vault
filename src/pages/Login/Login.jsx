import React from "react";
import { Header } from "../../components/Header/Header";
import image from "../../assets/image-front.png";
import {
  Container,
  GoogleButton,
  Image,
  Input,
  Left,
  Right,
  Text,
  Title,
  Button,
  Strong,
  LoginContainer,
  Form,
} from "./style";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Container>
      <Header />
      <LoginContainer>
        <Left>
          <Image src={image} alt="" />
        </Left>
        <Right>
          <Form action="">
            <Title>Login</Title>
            <GoogleButton>
              Entrar com
              <FcGoogle size={25} style={{ "margin-left": "10px" }} />
            </GoogleButton>
            <Text>ou entre com email</Text>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Button>Entrar</Button>
            <Strong>Esqueci minha senha.</Strong>
            <Text>
              Não tem conta?{" "}
              <Link to={`/singup`}>
                <Strong>Cadastre-se</Strong>
              </Link>
            </Text>
          </Form>
        </Right>
      </LoginContainer>
    </Container>
  );
};

export default Login;
