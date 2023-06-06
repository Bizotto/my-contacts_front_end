import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Img } from './styles';
import arrow from '../../assets/images/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <Img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>
      <strong>{title}</strong>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
