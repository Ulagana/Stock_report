import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const StockChart = ({ history }) => {
  if (!history) return <p>No chart data available.</p>;

  const data = {
    labels: history.map((entry) => entry.date),
    datasets: [
      {
        label: 'Stock Price',
        data: history.map((entry) => entry.close),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default StockChart;