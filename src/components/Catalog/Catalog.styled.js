import styled from 'styled-components';

export const StyledCatalogWrap = styled.div`
  padding-bottom: 20px;
`;

export const StyledCatalog = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  column-gap: 28px;
  row-gap: 50px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-bottom: 100px;
`;

export const StyledLoadMore = styled.button`
  display: block;
  margin: 0 auto;
  background: transparent;
  color: #3470ff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  transition: scale 0.1s;
  &:hover {
    scale: 110%;
  }
`;
