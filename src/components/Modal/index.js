import React from 'react';
import propTypes from 'prop-types';
import { Button } from '../Button';
import { Container, Footer, Overlay } from './style';

export function Modal({ danger }) {
  return (
    <Overlay>
      <Container>
        <h1>titulo do modal</h1>
        <p>conteudo do modal</p>
        <Footer>
          <Button className="cancel">cancelar</Button>
          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: propTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
