import React from 'react';
import {
  StyledBtn,
  StyledCard,
  StyledDesc,
  StyledFirstDescWrapper,
  StyledHeaderWrapper,
  StyledImgWrapper,
  StyledSecondDescWrapper,
} from './Card.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { toggleFavorite } from 'redux/slice';

const Card = ({ car, handleOpenModal }) => {
  const favorites = useSelector(selectFavorites);
  const isFavorite = item => favorites.includes(item);
  console.log(favorites);
  console.log(isFavorite());
  const dispatch = useDispatch();

  const handleToggleFavorite = item => {
    console.log(item);
    dispatch(toggleFavorite(item));
  };
  return (
    <StyledCard key={car.id}>
      <button onClick={() => handleToggleFavorite(car)}>
        {isFavorite(car) ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
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

      <StyledBtn onClick={() => handleOpenModal(car)}>Learn more</StyledBtn>
    </StyledCard>
  );
};

export default Card;

//   {
//     id: 9582,
//     year: 2008,
//     make: 'Buick',
//     model: 'Enclave',
//     type: 'SUV',
//     img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg',
//     description:
//       'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
//     fuelConsumption: '10.5',
//     engineSize: '3.6L V6',
//     accessories: ['Leather seats', 'Panoramic sunroof', 'Premium audio system'],
//     functionalities: [
//       'Power liftgate',
//       'Remote start',
//       'Blind-spot monitoring',
//     ],
//     rentalPrice: '$40',
//     rentalCompany: 'Luxury Car Rentals',
//     address: '123 Example Street, Kiev, Ukraine',
//     rentalConditions:
//       "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//     mileage: 5858,
//     },
