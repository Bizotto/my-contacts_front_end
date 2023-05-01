import { ThemeProvider } from 'styled-components';
import CreateGlobalStyle from '../../assets/styles/global';
import { Container } from './styles';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';
import ContactsList from '../ContactsLists';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Header />
        <ContactsList />
      </Container>
      <CreateGlobalStyle />
    </ThemeProvider>
  );
}

export default App;
