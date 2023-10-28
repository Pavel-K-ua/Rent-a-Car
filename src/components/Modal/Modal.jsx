import { useEffect } from 'react';
import {
  ModalStyled,
  OverlayStyled,
  StyledCloseBtn,
  StyledModalAccess,
  StyledModalAccsesWrapper,
  StyledModalConditions,
  StyledModalDesc,
  StyledModalDescription,
  StyledModalFirstDescWrapper,
  StyledModalFuncWrapper,
  StyledModalHeaderWrapper,
  StyledModalImgWrapper,
  StyledModalLink,
  StyledModalMillPriceWrapper,
  StyledModalRentCondWrapper,
  StyledModalSecondDescWrapper,
} from './Modal.Styled';
export const Modal = ({ close, car }) => {
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
        <StyledCloseBtn onClick={() => close()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledCloseBtn>
        <StyledModalImgWrapper $url={car.img}></StyledModalImgWrapper>
        <StyledModalHeaderWrapper>
          <p>
            {car.make} <span>{car.model}</span>, {car.year}
          </p>
          <p>{car.rentalPrice}</p>
        </StyledModalHeaderWrapper>

        <StyledModalFirstDescWrapper>
          <StyledModalDesc>{car.address.split(',')[1]}</StyledModalDesc>
          <StyledModalDesc>{car.address.split(',')[2]}</StyledModalDesc>
          <StyledModalDesc>Id:{car.id}</StyledModalDesc>
          <StyledModalDesc>Year:{car.year}</StyledModalDesc>
          <StyledModalDesc>Type:{car.type}</StyledModalDesc>
        </StyledModalFirstDescWrapper>
        <StyledModalSecondDescWrapper>
          <StyledModalDesc>
            Fuel Consumption:{car.fuelConsumption}
          </StyledModalDesc>
          <StyledModalDesc>Engine Size:{car.engineSize}</StyledModalDesc>
        </StyledModalSecondDescWrapper>
        <StyledModalDescription>{car.description}</StyledModalDescription>
        <StyledModalAccess>Accessories and functionalities:</StyledModalAccess>
        <StyledModalAccsesWrapper>
          {car.accessories.map(item => (
            <StyledModalDesc key={item}>{item}</StyledModalDesc>
          ))}
        </StyledModalAccsesWrapper>
        <StyledModalFuncWrapper>
          {car.functionalities.map(item => (
            <StyledModalDesc key={item}>{item}</StyledModalDesc>
          ))}
        </StyledModalFuncWrapper>
        <StyledModalAccess>Rental Conditions: </StyledModalAccess>
        <StyledModalRentCondWrapper>
          {car.rentalConditions.split('\n').map(item => (
            <StyledModalConditions key={item}>{item}</StyledModalConditions>
          ))}
        </StyledModalRentCondWrapper>
        <StyledModalMillPriceWrapper>
          <StyledModalConditions>
            Mileage: <span>{new Intl.NumberFormat().format(car.mileage)}</span>
          </StyledModalConditions>
          <StyledModalConditions>
            Price: <span>{car.rentalPrice}</span>
          </StyledModalConditions>
        </StyledModalMillPriceWrapper>
        <StyledModalLink to="tel:+380730000000">Rental car</StyledModalLink>
      </ModalStyled>
    </OverlayStyled>
  );
};
