import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 55px;
  margin-bottom: 24px;

  a {
    background: transparent;
    border: none;
    align-items: center;
    display: flex;
    text-decoration: none;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-left: 8px;
    font-weight: bold;
  }

  strong {
    color: #222;
    font-size: 24px;
  }
`;

export const Img = styled.img`
  transform: rotate(270deg);
`;
