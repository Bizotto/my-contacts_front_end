import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  margin-top: 48px;
  width: 100%;

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
