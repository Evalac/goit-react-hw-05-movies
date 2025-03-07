import { useEffect } from 'react';

const SPREADSHEET_ID = '1sLHvdXRDLZ2Wtv9z2x3HGiXftQBRcp3FVhTJtQNt2Zw'; // Твій ID таблиці
const API_KEY = 'AIzaSyCx0izkQkyHslcXt1tdSH29d3ukXTrrnDc';
const RANGE = 'A2:E'; // Діапазон для зчитування товарів

function TestPage(params) {
  async function fetchProducts() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const products = data.values.map(row => ({
        id: row[0],
        name: row[1],
        price: row[2],
        image: row[3],
        description: row[4],
      }));
      return products;
    } catch (error) {
      console.error('Помилка отримання даних:', error);
    }
  }
  useEffect(() => {
    fetchProducts()
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }, []);

  return <p>TESTPAGE</p>;
}

export default TestPage;
