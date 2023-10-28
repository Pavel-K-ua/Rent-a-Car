import styled from 'styled-components';
import img from './day_0088.jpg';

export const StyledTitle = styled.h1`
  font-size: 46px;
  margin-bottom: 10px;
`;

export const StyledBox = styled.div`
  width: 100lvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom -40px right 2px;
`;

export const StyledLink = styled.span`
  text-decoration: underline;
  color: orange;
  font-weight: bold;
`;
