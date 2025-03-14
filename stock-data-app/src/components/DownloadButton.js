import React from 'react';
import Papa from 'papaparse';

const DownloadButton = ({ data }) => {
  const handleDownload = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'stock_data.csv';
    link.click();
  };

  return (
    <button onClick={handleDownload} disabled={!data}>
      Download CSV
    </button>
  );
};

export default DownloadButton;