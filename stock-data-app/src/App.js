import React, { useState } from 'react';
import StockTable from './components/StockTable';
import StockChart from './components/StockChart';
import SearchBar from './components/SearchBar';
import DownloadButton from './components/DownloadButton';
import { fetchStockData } from './api'; // Import the fetchStockData function
import './App.css';

function App() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchStockData(symbol); // Use the fetchStockData function
    setStockData(data);
  };

  return (
    <div className="App">
      <h1>Stock Data App</h1>
      <SearchBar symbol={symbol} setSymbol={setSymbol} handleSearch={handleSearch} />

      {stockData && (
        <>
          <StockTable data={stockData} />
          <StockChart history={stockData.historical} />
          <DownloadButton data={stockData} />
        </>
      )}
    </div>
  );
}

export default App;