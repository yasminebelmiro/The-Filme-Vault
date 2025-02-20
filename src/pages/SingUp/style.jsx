import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue-100);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 70%;
  height: 70%;
  background-color: rgb(0, 0, 0, 20%);
  display: flex;
  margin: 4% 0;
  border-radius: 40px;
`;

export const Left = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: var(--gray);
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const GoogleButton = styled.button`
  width: 50%;
  height: 40px;
  border: none;
  background-color: var(--blue-300);
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 1.5rem;
  border-radius: 20px;
`;

export const Text = styled.p`
  color: var(--gray);
  margin-bottom: 1.5rem;
`;

export const Strong = styled.strong`
  color: var(--gray);
  text-decoration: underline;
  margin-bottom: 1.5rem;
  margin-top: 0.8rem;
  color: white;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 48%;
  height: 40px;
  margin-bottom: 0.8rem;
  border: none;
  border-radius: 20px;
  padding-left: 1rem;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: var(--blue-200);
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 0.8rem;
`;

export const Checkbox = styled.input`
  margin: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
