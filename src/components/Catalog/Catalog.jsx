import Card from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'redux/operations';
import { selectCars, selectLoading } from 'redux/selectors';
import {
  StyledCatalog,
  StyledCatalogWrap,
  StyledLoadMore,
} from './Catalog.styled';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

const Catalog = () => {
  const [limit, setLimit] = useState(12);
  const [selected, setSelected] = useState({ label: 'All', value: '' });

  const handleChange = selectedOption => {
    setSelected(selectedOption);
  };

  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      limit: limit,
      make: selected.value,
    };
    dispatch(fetchAdvertsThunk(data));
  }, [dispatch, limit, selected]);

  const onLoadMore = () => {
    setLimit(prev => prev + 12);
  };

  return (
    <>
      <StyledCatalogWrap>
        {loading && <Loader />}
        <Filter handleChange={handleChange} />

        <StyledCatalog>
          {cars.map(car => (
            <Card key={car.id} car={car} />
          ))}
        </StyledCatalog>
        {cars.length && cars.length >= limit ? (
          <StyledLoadMore onClick={onLoadMore}>Load more</StyledLoadMore>
        ) : null}
      </StyledCatalogWrap>
    </>
  );
};

export default Catalog;
