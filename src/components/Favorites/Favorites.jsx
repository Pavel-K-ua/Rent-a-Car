import Card from 'components/Card/Card';
import { StyledCatalog } from 'components/Catalog/Catalog.styled';
import { Modal } from 'components/Modal/Modal';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';

const Favorites = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentCar, setCurrentCar] = useState();
  const favorites = useSelector(selectFavorites);
  const isFavorite = item => favorites.includes(item);
  const handleOpenModal = car => {
    setIsOpenModal(!isOpenModal);
    setCurrentCar(car);
  };
  return (
    <>
      <div>
        Favorites
        <StyledCatalog>
          {favorites.map(car => (
            <Card key={car.id} car={car} handleOpenModal={handleOpenModal} />
          ))}
        </StyledCatalog>
      </div>
      {isOpenModal && <Modal close={handleOpenModal} car={currentCar}></Modal>}
    </>
  );
};

export default Favorites;
