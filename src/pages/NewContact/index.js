import { Container } from './styles';
import { ContactForm } from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
  return (
    <Container>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </Container>
  );
}
