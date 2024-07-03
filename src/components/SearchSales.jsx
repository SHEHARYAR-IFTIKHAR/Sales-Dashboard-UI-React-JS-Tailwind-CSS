import React from "react";

const SearchSales = ({ filterValue, setFilterValue, brand, plceh }) => {
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <h3 className="text-xl font-medium">{brand}</h3>
      <input
        className="w-full xsm:px-4 md:px-6 xsm:h-[2.5rem] md:h-[3.5rem] dark:border-none dark:text-gray-300 dark:bg-gray-700 border border-gray-400 rounded xsm:text-lg md:text-xl"
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder={plceh}
      />
    </div>
  );
};

export default SearchSales;
