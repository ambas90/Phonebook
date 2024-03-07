import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
  padding: 5px;
  margin-right: 5px;
  height: 30px;
  border-radius: 6px;
  border-width: 0px;
  background-color: #ff9900;
  color: white;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    background-color: #ff8800;
  }
`;
