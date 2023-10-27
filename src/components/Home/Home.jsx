import React, { useState } from 'react';
import {
  StyledHomeWrapper,
  StyledSubTitle,
  StyledTitle,
  StyledTitlesWrapper,
} from './Home.styled';

const Home = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const handleMouseMove = e => {
    const offsetX = (e.nativeEvent.offsetX / e.target.offsetWidth - 0.5) * 40;
    const offsetY = (e.nativeEvent.offsetY / e.target.offsetHeight - 0.5) * 40;

    setX(offsetX);
    setY(offsetY);
  };
  return (
    <StyledHomeWrapper
      onMouseMove={handleMouseMove}
      style={{
        textShadow: `${x}px ${y}px 20px rgba(0, 0, 0, 0.8)`,
      }}
    >
      <StyledTitlesWrapper>
        <StyledTitle>Rent a car in Kiev and throughout Ukraine</StyledTitle>
        <StyledSubTitle>Always the lowest prices for car rental</StyledSubTitle>
      </StyledTitlesWrapper>
    </StyledHomeWrapper>
  );
};

export default Home;
