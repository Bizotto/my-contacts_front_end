import { Container, InputContainer } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" width="201" />
      <InputContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputContainer>
    </Container>
  );
}
