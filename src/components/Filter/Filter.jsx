// import React, { useState } from 'react';
// import Select from 'react-select';
import { StyledSelect } from './Filter.styled';

const Filter = ({ handleChange }) => {
  const options = [
    { value: '', label: 'All' },
    { value: 'Buick', label: 'Buick' },
    { value: 'Volvo', label: 'Volvo' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
    { value: 'HUMMER', label: 'HUMMER' },
    { value: 'Subaru', label: 'Subaru' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Lincoln', label: 'Lincoln' },
    { value: 'GMC', label: 'GMC' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'MINI', label: 'MINI' },
    { value: 'Bentley', label: 'Bentley' },
    { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'Aston Martin', label: 'Aston Martin' },
    { value: 'Pontiac', label: 'Pontiac' },
    { value: 'Lamborghini', label: 'Lamborghini' },
    { value: 'Audi', label: 'Audi' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'Chrysler', label: 'Chrysler' },
    { value: 'Kia', label: 'Kia' },
    { value: 'Land', label: 'Land' },
  ];

  return (
    <div>
      <StyledSelect options={options} onChange={handleChange} />

      {/* <label>
        Pick a car:
        <select name="selectCar" defaultValue="">
          {selectCarOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label> */}
    </div>
  );
};

export default Filter;
