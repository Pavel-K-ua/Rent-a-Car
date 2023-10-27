import Card from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'redux/operations';
import { selectCars, selectLoading } from 'redux/selectors';
import { StyledCatalog } from './Catalog.styled';
import Filter from 'components/Filter/Filter';

const Catalog = () => {
  const [limit, setLimit] = useState(5);
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
    setLimit(prev => prev + 5);
  };

  return (
    <>
      <div>
        Catalog
        <Filter handleChange={handleChange} />
        {loading && <h2>Loading</h2>}
        <StyledCatalog>
          {cars.map(car => (
            <Card
              key={car.id}
              car={car}
            />
          ))}
        </StyledCatalog>
        {cars.length && cars.length >= limit ? (
          <button onClick={onLoadMore}>Load more</button>
        ) : null}
      </div>
    </>
  );
};

export default Catalog;
