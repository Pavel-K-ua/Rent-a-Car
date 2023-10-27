import Card from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'redux/operations';
import { selectCars, selectFavorites, selectLoading } from 'redux/selectors';
import { StyledCatalog } from './Catalog.styled';
import { Modal } from 'components/Modal/Modal';
import Filter from 'components/Filter/Filter';

const Catalog = () => {
  const [limit, setLimit] = useState(5);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentCar, setCurrentCar] = useState();
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

  const handleOpenModal = car => {
    setIsOpenModal(!isOpenModal);
    setCurrentCar(car);
  };

  return (
    <>
      <div>
        Catalog
        <Filter handleChange={handleChange} />
        {loading && <h2>Loading</h2>}
        <StyledCatalog>
          {cars.map(car => (
            <Card key={car.id} car={car} handleOpenModal={handleOpenModal} />
          ))}
        </StyledCatalog>
        {cars.length && cars.length >= limit ? (
          <button onClick={onLoadMore}>Load more</button>
        ) : null}
      </div>
      {isOpenModal && <Modal close={handleOpenModal} car={currentCar}></Modal>}
    </>
  );
};

export default Catalog;
