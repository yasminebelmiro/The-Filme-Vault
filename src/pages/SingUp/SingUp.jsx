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
  Row,
  Checkbox,
} from "./style";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const SingUp = () => {
  return (
    <Container>
      <Header />
      <LoginContainer>
        <Left>
          <Image src={image} alt="" />
        </Left>
        <Right>
          <Form action="">
            <Title>Cadastrar</Title>
            <GoogleButton>
              Cadastrar com
              <FcGoogle size={25} style={{ marginLeft: "10px" }} />
            </GoogleButton>
            <Text>ou cadastre com email</Text>
            <Input type="text" placeholder="Nome completo" />
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Button>Cadastrar</Button>
            <Row>
              <Checkbox type="checkbox" />
              <Text>
                Aceitar os <Strong>termos e condições</Strong>
              </Text>
            </Row>
            <Text>
              Já tem conta?{" "}
              <Link to={`/login`}>
                <Strong>Entrar</Strong>
              </Link>
            </Text>
          </Form>
        </Right>
      </LoginContainer>
    </Container>
  );
};

export default SingUp;
