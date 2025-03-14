// const fetchStockData = async (symbol) => {
//   const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY';
//   const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data['Global Quote'];
//   } catch (error) {
//     console.error('Error fetching stock data:', error);
//     return null;
//   }
// };

export const fetchStockData = async (symbol) => {
  const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY'; // Replace with your Alpha Vantage API key
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data['Global Quote'];
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};