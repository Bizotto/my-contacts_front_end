import { Link } from 'react-router-dom';
import ListContacts from '../../components/ListContacts';
import {
  Container,
  Header,
  Line,
  ListContainer,
  InputContainer,
} from './styles';
import arrow from '../../assets/images/arrow.svg';
import { mock } from '../../utils/mockContacts';

export default function Home() {
  const numberContacts = mock.length;

  return (
    <Container>
      <InputContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputContainer>
      <Header>
        <strong>{numberContacts} Contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <Line />
      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <ListContacts />
      </ListContainer>
    </Container>
  );
}
