import styled from 'styled-components';
import { Link } from 'react-router-dom';
import noImg from '../Card/noCarImg.jpg';

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalStyled = styled.div`
  max-width: 541px;
  max-height: 722px;
  padding: 40px;
  border-radius: 24px;
  background: #fff;
  position: relative;
`;
export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  padding: 0;
  transition: scale 0.1s;
  &:hover {
    scale: 110%;
  }
`;
export const StyledModalImgWrapper = styled.div`
  min-height: 230px;
  max-height: 248px;
  width: 461px;
  background-color: lightgrey;
  background-image: url(${props => props.$url}), url(${noImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const StyledModalLink = styled(Link)`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  transition: background-color 0.1s;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const StyledModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  span {
    color: #3470ff;
  }
  margin-bottom: 8px;
`;

export const StyledModalFirstDescWrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 4px;
`;
export const StyledModalSecondDescWrapper = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

export const StyledModalDesc = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  margin-right: 6px;

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

export const StyledModalDescription = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 14px;
`;

export const StyledModalAccess = styled.p`
  color: #121417;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-bottom: 8px;
`;
export const StyledModalAccsesWrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 4px;
`;

export const StyledModalFuncWrapper = styled.div`
  display: flex;
  margin-bottom: 14px;
`;
export const StyledModalRentCondWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  gap: 8px;
`;
export const StyledModalMillPriceWrapper = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

export const StyledModalConditions = styled.p`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;

  span {
    color: #3470ff;
    font-weight: 600;
  }
`;
