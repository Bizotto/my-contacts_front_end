import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';
import Routes from '../../Routes';
import CreateGlobalStyle from '../../assets/styles/global';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <Header />
          <Routes />
        </Container>
        <CreateGlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
