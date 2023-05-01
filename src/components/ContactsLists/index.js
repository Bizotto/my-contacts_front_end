import { Container, Header, Line, ListContainer } from './styles';
import arrow from '../../assets/images/arrow.svg';
import ListContacts from '../ListContacts';
import { mock } from '../../utils/mockContacts';

export default function ContactsList() {
  const numberContacts = mock.length;

  return (
    <Container>
      <Header>
        <strong>{numberContacts} Contatos</strong>
        <a href="/">Novo contato</a>
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
