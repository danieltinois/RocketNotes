import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} required />

        <Input placeholder="E-mail" type="text" icon={FiMail} required />

        <Input placeholder="Senha" type="password" icon={FiLock} required />

        <Button title="Cadastrar" type="submit" />

        <Link to="/">Entrar em uma conta existente</Link>
      </Form>
    </Container>
  );
}
