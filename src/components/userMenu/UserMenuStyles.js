import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderLink = styled(NavLink)`
  padding: 5px;
  margin-left: 5px;
  max-height: 30px;
  border-radius: 6px;
  border-width: 0px;
  background-color: red;
  color: white;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    background-color: #ff8800;
  }
`;
