import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  max-width: 1680px;
  padding: 0 20px;
`;

export const OutletWrapper = styled.div`
  margin-left: 200px;
  padding: 1px 16px;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
  list-style: none;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const StyledLi = styled.li`
  color: black;
  @media only screen and (max-width: 768px) {
    float: left;
  }

  @media only screen and (max-width: 380px) {
    text-align: center;
    float: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 16px;
  display: block;

  &.active {
    background-color: #04aa6d;
    color: white;
  }
  &:hover:not(.active) {
    background-color: #555;
    color: white;
  }
`;
