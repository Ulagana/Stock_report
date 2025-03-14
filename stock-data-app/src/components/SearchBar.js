import React from 'react';

const SearchBar = ({ symbol, setSymbol, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;