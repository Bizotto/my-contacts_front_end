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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <a href="/">
            <img src={trash} alt="trash" />
          </a>
        </div>
      </Container>
    );
  });
}
