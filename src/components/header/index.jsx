import { FiLogOut } from "react-icons/fi";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/danieltinois.png" alt="Foto do usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>Daniel Tinois</strong>
        </div>
      </Profile>

      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
