// import React, { useState } from 'react';
import Select from 'react-select';

const Filter = ({ handleChange }) => {
  const options = [
    { value: '', label: 'All' },
    { value: 'Buick', label: 'Buick' },
    { value: 'Volvo', label: 'Volvo' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
  ];

  return (
    <div>
      <Select options={options} onChange={handleChange} />

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

// [
//   ('Buick',
//   'Volvo',
//   'HUMMER',
//   'Subaru',
//   'Mitsubishi',
//   'Nissan',
//   'Lincoln',
//   'GMC',
//   'Hyundai',
//   'MINI',
//   'Bentley',
//   'Mercedes-Benz',
//   'Aston Martin',
//   'Pontiac',
//   'Lamborghini',
//   'Audi',
//   'BMW',
//   'Chevrolet',
//   'Mercedes-Benz',
//   'Chrysler',
//   'Kia',
//   'Land')
// ];
