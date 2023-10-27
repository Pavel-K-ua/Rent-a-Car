import styled from 'styled-components';

export const StyledCard = styled.li`
  display: flex;
  width: 274px;
  min-height: 426px;
  flex-direction: column;
  position: relative;
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  padding: 0;
  background: transparent;
  transition: scale 0.1s;
  &:hover {
    scale: 110%;
  }
`;

export const StyledImgWrapper = styled.div`
  min-height: 268px;
  width: 274px;
  background-color: grey;
  background-image: url(${props => props.$url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const StyledBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  /* padding: 12px 98px; */
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  /* font-family: Manrope; */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #fff;
  line-height: 20px; /* 142.857% */
  transition: background-color 0.1s;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #121417;
  padding-right: 8px;
  /* font-family: Manrope; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  span {
    color: #3470ff;
  }
  margin-bottom: 8px;
`;
export const StyledFirstDescWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;
export const StyledSecondDescWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

export const StyledDesc = styled.p`
  color: rgba(18, 20, 23, 0.5);
  display: inline-block;
  /* white-space: nowrap; */
  text-overflow: clip;
  max-width: 140px;
  max-height: 18px;
  /* font-family: Manrope; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  margin-right: 6px;
  /* &:not(:last-child)  */

  &::after {
    padding-left: 6px;
    content: '|';
    color: rgba(18, 20, 23, 0.1);
  }
  &:last-child::after {
    padding-left: 0;
    content: '';
  }
`;
