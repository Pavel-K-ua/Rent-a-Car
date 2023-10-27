import Card from 'components/Card/Card';
import { StyledCatalog } from 'components/Catalog/Catalog.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      <div>
        Favorites
        <StyledCatalog>
          {favorites.map(car => (
            <Card key={car.id} car={car} />
          ))}
        </StyledCatalog>
      </div>
    </>
  );
};

export default Favorites;
