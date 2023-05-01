import styled from 'styled-components';
import colors from '../../assets/styles/themes/default';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  color: ${colors.colors.primary.dark};
  background-color: ${colors.colors.primary.lighter};
  width: 90px;
  height: 21px;
  border-radius: 3px;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
`;
