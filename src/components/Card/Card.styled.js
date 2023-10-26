import styled from 'styled-components';

export const StyledCard = styled.li`
  display: flex;
  width: 274px;
  /* height: 426px; */
  flex-direction: column;
  background-color: lightgrey;
`;

export const StyledImgWrapper = styled.div`
  height: 268px;
  width: 274px;

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
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #121417;

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
