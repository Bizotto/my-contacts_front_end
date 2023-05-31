import { PropTypes } from 'prop-types';
import { Header, Img } from './styles';
import arrow from '../../assets/images/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Header>
      <button type="button" className="sort-button">
        <Img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </button>
      <strong>{title}</strong>
    </Header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
