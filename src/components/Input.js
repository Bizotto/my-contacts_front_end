import styled from 'styled-components';

export const Input = styled.input`
  border: 2px solid #fff;
  margin-bottom: 16px;
  width: 75%;
  border-radius: 4px;
  border: none;
  height: 50px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: 0;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &:focus {
    border: 2px solid #5061fc;
    outline: none;
  }
`;
