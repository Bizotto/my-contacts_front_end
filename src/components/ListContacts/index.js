import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, ContactCard, Container, HeaderCard } from './styles';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import { mock } from '../../utils/mockContacts';

export default function ListContacts() {
  return mock.map((id) => {
    mock.find((item) => item.id === id);
    return (
      <Container>
        <ContactCard>
          <HeaderCard>
            <text>{id.name}</text>
            <Button href="/">INSTAGRAM</Button>
          </HeaderCard>

          <text style={{ color: '#BCBCBC' }}>{id.email}</text>
          <text style={{ color: '#BCBCBC' }}>{id.celular}</text>
        </ContactCard>
        <div>
          <Link to="/edit:123">
            <img src={edit} alt="Edit" />
          </Link>
          <a href="/">
            <img src={trash} alt="trash" />
          </a>
        </div>
      </Container>
    );
  });
}
