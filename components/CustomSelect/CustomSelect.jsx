import React, { useState } from 'react';
import './customSelect.css';

const CustomSelect = ({handleCategorySelected, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Todos');

  const handleOptionClick = (category) => {
    setSelectedOption(category.title);
    setIsOpen(false);
    handleCategorySelected(category.id)
  };

  return (
    <div className='selectWrapper' onClick={() => setIsOpen(!isOpen)}>
      <div className='selectedOption'>
        {selectedOption}
        {/* Icono de flecha hacia abajo  */}
        <span className='icon'>&#9660;</span>
      </div>
      {isOpen && (
        <ul className='optionList'>
          {categories.map((category) => (
            <li
              key={category.id}
              className='option'
              onClick={() => handleOptionClick(category)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
