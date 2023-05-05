// import react from 'react';
import { Container, Header, Img, InputContainer } from './styles';
import arrow from '../../assets/images/arrow.svg';

export default function CreateContact() {
  return (
    <Container>
      <Header>
        <button type="button" className="sort-button">
          <Img src={arrow} alt="Arrow" />
          <span>Voltar</span>
        </button>
        <strong>Novo contato</strong>
      </Header>

      <InputContainer>
        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input placeholder="Telefone" />
        <input placeholder="Categoria" />
        <button type="button" onClick={() => {}}>
          cadastrar
        </button>
      </InputContainer>
    </Container>
  );
}
