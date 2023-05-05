import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputContainer = styled.div`
  margin-top: 55px;
  margin-bottom: 40px;
  width: 100%;
  align-items: center;
  display: flex;

  input {
    width: 100%;
    border-radius: 25px;
    border: none;
    height: 50px;
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
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

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
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
