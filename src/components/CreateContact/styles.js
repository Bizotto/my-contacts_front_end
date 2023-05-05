import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

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

export const InputContainer = styled.div`
  padding-top: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    border: 2px solid;
    margin-bottom: 16px;
    width: 75%;
    border-radius: 4px;
    border: none;
    height: 50px;
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &:focus {
      border: 2px solid #5061fc;
      outline: none;
      box-shadow: 0px 0px 5px 0px #5061fc;
    }

    &::placeholder {
      color: #bcbcbc;
    }
  }
  button {
    text-transform: uppercase;
    color: #fff;
    background: #cccccc;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    width: 80%;
    border-radius: 4px;
    border: none;
    height: 50px;

    &:hover {
      transition: all 0.2s ease-in;
      background-color: #34495e;
      cursor: pointer;
    }
  }
`;

export const Img = styled.img`
  transform: rotate(270deg);
`;
