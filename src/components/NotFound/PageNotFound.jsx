import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledBox, StyledLink, StyledTitle } from './PageNotFound.styled';

const PageNotFound = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const handleMouseMove = e => {
    const offsetX = (e.nativeEvent.offsetX / e.target.offsetWidth - 0.5) * 20;
    const offsetY = (e.nativeEvent.offsetY / e.target.offsetHeight - 0.5) * 20;

    setX(offsetX);
    setY(offsetY);
  };
  return (
    <StyledBox onMouseMove={handleMouseMove}>
      <StyledTitle
        style={{
          textShadow: `${x}px ${y}px 10px rgba(0, 0, 0, 0.8)`,
        }}
      >
        Error 404
        <br />
        Car not found
      </StyledTitle>
      <Link to={'/'}>
        You can go to <StyledLink>home page</StyledLink> to find your car
      </Link>
    </StyledBox>
  );
};

export default PageNotFound;
