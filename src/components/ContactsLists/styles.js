import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  .sort-button {
    background: transparent;
    border: none;
    align-items: center;
    display: flex;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      margin-right: 8px;
      font-weight: bold;
    }
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 2px;
  margin-top: 22px;
  background: ${({ theme }) => theme.colors.gray.light};
  opacity: 0.2;
  border-radius: 1px;
`;
