import styled from 'styled-components';

export const Header = styled.header`
  margin-top: 55px;
  margin-bottom: 24px;
  .sort-button {
    background: transparent;
    border: none;
    align-items: center;
    display: flex;
    margin-top: 8px;
    margin-bottom: 24px;
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
