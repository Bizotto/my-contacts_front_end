import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  width: 80%;
  border-radius: 4px;
  border: none;
  height: 50px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  transition: background-color 0.2s ease-in;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
`;
