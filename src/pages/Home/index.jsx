import { FiPlus, FiSearch } from "react-icons/fi";

import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" $isactive />
        </li>
        <li>
          <ButtonText title="Front-end" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React Modal",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "modal" },
              ],
            }}
          />
          <Note
            data={{
              title: "Exemplo de Middleware",
              tags: [
                { id: "1", name: "express" },
                { id: "2", name: "nodejs" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
