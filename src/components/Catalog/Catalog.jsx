import Card from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'redux/operations';
import { selectCars, selectLoading } from 'redux/selectors';
import { StyledCatalog } from './Catalog.styled';
import { Modal } from 'components/Modal/Modal';

const Catalog = () => {
  const [limit, setLimit] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  console.log(cars);
  console.log(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertsThunk(limit));
    console.log(limit);
  }, [dispatch, limit]);

  const onLoadMore = () => {
    setLimit(prev => prev + 5);
  };

  const handleOpenModal = car => {
    setIsOpen(!isOpen);
    // setCurrentImg(img);
    // setCurrentId(id);
  };

  return (
    <>
      <div>
        Catalog
        {loading && <h2>Loading</h2>}
        <StyledCatalog>
          {cars.map(car => (
            <Card key={car.id} {...car} handleOpenModal={handleOpenModal} />
          ))}
        </StyledCatalog>
        {cars.length && cars.length >= limit ? (
          <button onClick={onLoadMore}>Load more</button>
        ) : null}
      </div>
      {isOpen && (
        <Modal close={handleOpenModal}>
          <div>Children</div>
        </Modal>
      )}
    </>
  );
};

export default Catalog;
