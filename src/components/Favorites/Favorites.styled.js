import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFavWrap = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  column-gap: 28px;
  row-gap: 50px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-top: 90px;
`;

export const StyledFavLink = styled(Link)`
  color: blue;
  text-decoration: underline;
  font-weight: bold;
  transition: scale 0.1s;
  &:hover {
    scale: 110%;
  }
`;
