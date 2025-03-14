import React from 'react';

const StockTable = ({ data }) => {
  if (!data) return <p>No data available.</p>;

  return (
    <table className="stock-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Price</td>
          <td>{data.regularMarketPrice}</td>
        </tr>
        <tr>
          <td>Market Cap</td>
          <td>{data.marketCap}</td>
        </tr>
        <tr>
          <td>PE Ratio</td>
          <td>{data.trailingPE}</td>
        </tr>
        <tr>
          <td>52 Week High</td>
          <td>{data.fiftyTwoWeekHigh}</td>
        </tr>
        <tr>
          <td>52 Week Low</td>
          <td>{data.fiftyTwoWeekLow}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StockTable;