import { useEffect } from 'react';
import { ModalStyled, OverlayStyled } from './Modal.Styled';
import { PropTypes } from 'prop-types';
import {
  StyledDesc,
  StyledFirstDescWrapper,
  StyledHeaderWrapper,
  StyledImgWrapper,
  StyledSecondDescWrapper,
} from 'components/Card/Card.styled';
import { Link } from 'react-router-dom';

export const Modal = ({ close, children, car }) => {
  console.log(car);
  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  return (
    <OverlayStyled onClick={onOverlayClick}>
      <ModalStyled>
        <button onClick={() => close()}>X</button>
        <StyledImgWrapper $url={car.img}></StyledImgWrapper>
        <StyledHeaderWrapper>
          <p>
            {car.make} <span>{car.model}</span>, {car.year}
          </p>
          <p>{car.rentalPrice}</p>
        </StyledHeaderWrapper>

        <StyledFirstDescWrapper>
          <StyledDesc>{car.address.split(',')[1]}</StyledDesc>
          <StyledDesc>{car.address.split(',')[2]}</StyledDesc>
          <StyledDesc>{car.rentalCompany}</StyledDesc>
          <StyledDesc>Premium</StyledDesc>
        </StyledFirstDescWrapper>
        <StyledSecondDescWrapper>
          <StyledDesc>{car.type}</StyledDesc>
          <StyledDesc>{car.model || car.make}</StyledDesc>
          <StyledDesc>{car.id}</StyledDesc>
          <StyledDesc>{car.functionalities[0]}</StyledDesc>
        </StyledSecondDescWrapper>

        <Link to="tel:9876543210">Rental car</Link>
      </ModalStyled>
    </OverlayStyled>
  );
};

Modal.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node,
};
