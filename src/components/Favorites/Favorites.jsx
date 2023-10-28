import Card from 'components/Card/Card';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { StyledFavLink, StyledFavWrap } from './Favorites.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      <div>
        <StyledFavWrap>
          {!favorites.length ? (
            <p>
              You can add car to favorites in{' '}
              <StyledFavLink to="/catalog">Catalog</StyledFavLink>
            </p>
          ) : null}
          {favorites.map(car => (
            <Card key={car.id} car={car} />
          ))}
        </StyledFavWrap>
      </div>
    </>
  );
};

export default Favorites;
