import styled, { css } from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: none;
  height: 50px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  transition: background-color 0.2s ease-in;
  font-weight: bold;
  padding: 0 16px;

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

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background-color: ${theme.colors.danger.light};
      }

      &:active {
        background-color: ${theme.colors.danger.dark};
      }
    `}
`;
