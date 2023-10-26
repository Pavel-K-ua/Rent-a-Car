import Card from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'redux/operations';
import { selectCars, selectLoading } from 'redux/selectors';
import { StyledCatalog } from './Catalog.styled';
import { Modal } from 'components/Modal/Modal';
import Filter from 'components/Filter/Filter';

const Catalog = () => {
  const [limit, setLimit] = useState(5);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentCar, setCurrentCar] = useState();
  // const [makeFilter, setMakeFilter] = useState();
  // const [selected, setSelected] = useState(null);

  // const handleChange = selectedOption => {
  //   setSelected(selectedOption);
  // };
  // console.log(selected.value);

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
    setIsOpenModal(!isOpenModal);
    setCurrentCar(car);

    // setCurrentId(id);
  };
  console.log(currentCar);

  // const onMakeFilter = filteredMake => {
  //   setMakeFilter(filteredMake);
  // };

  return (
    <>
      <div>
        Catalog
        <Filter />
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
