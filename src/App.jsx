import './App.css';
import React, { useState, useEffect } from 'react';
import PLP from './PLP';
import PDP from './PDP';

export default function App() {
  const [currentPage, setCurrentPage] = useState('PLP');
  const [apiData, setApiData] = useState({ results: [] });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://ebay-search-result.p.rapidapi.com/search/iphone';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '73e1864bb1msh876644e6ba79155p17d47ejsn2ffca3de5ba7',
          'X-RapidAPI-Host': 'ebay-search-result.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setApiData(result);
        setIsLoading(false);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('PDP');
  };

  const handleBackToPLP = () => {
    setCurrentPage('PLP');
  };

  return (
    <div>
      {isLoading ? (
      <div className='loader-container'>
        <div className='loader'></div>
      </div>
      ) : (
        <>
          {currentPage === 'PLP' && (
            <PLP apiData={apiData} onProductClick={handleProductClick} />
          )}
          {currentPage === 'PDP' && (
            <PDP product={selectedProduct} onBack={handleBackToPLP} />
          )}
        </>
      )}
    </div>
  );
}
