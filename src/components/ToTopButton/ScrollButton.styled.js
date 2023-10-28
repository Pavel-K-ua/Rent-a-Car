import styled from 'styled-components';

export const Button = styled.div`
  opacity: ${props => props.$opacity};
  position: fixed;
  bottom: 8vh;
  right: 2vw;
  height: 20px;
  font-size: 3rem;
  z-index: 100;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;
