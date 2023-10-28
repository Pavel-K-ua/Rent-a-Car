import styled from 'styled-components';
import img from './Car-Hero_1920x800.webp';

export const StyledHomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${img});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
`;

export const StyledTitlesWrapper = styled.div``;
export const StyledTitle = styled.h1`
  text-align: center;
`;
export const StyledSubTitle = styled.h2`
  text-align: center;
`;
