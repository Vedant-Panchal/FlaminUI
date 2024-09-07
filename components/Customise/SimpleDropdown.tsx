import React from 'react';

interface SimpleDropdownProps {
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
}

const SimpleDropdown: React.FC<SimpleDropdownProps> = ({ options, onSelect }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <select onChange={handleChange} className="bg-gray-800 text-white p-2 rounded">
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SimpleDropdown;
