import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;
export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 24px;
  position: absolute;
  width: 100%;
  max-width: 450px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  h1 {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 24px;
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .cancel {
    font-size: 16px;
    margin-right: 8px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray.light};
  }
`;
