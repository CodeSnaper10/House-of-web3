import React, { useState } from 'react';

const PLP = ({ apiData, onProductClick }) => {
  const [numDisplayed, setNumDisplayed] = useState(6);

  const displayNextProducts = () => {
    setNumDisplayed(numDisplayed + 6);
  };

  return (
    <div>
      <h1 className='header'>eBay Products</h1>
      <div className='plp-container'>
        <div className='plp-page'>
          {apiData.results.slice(0, numDisplayed).map((item, index) => (
            <div className='plp-product' key={index}onClick={() => onProductClick(item)}>
              <img src={item.image} alt={item.title} className='product-img'/>
              <div className='product-title'>{item.title ? item.title : 'No title available'}</div>
                <p className='product-rating'>Rating: <strong>{item.rating ? `${item.rating.split(' ')[0]}/${item.rating.split(' ')[3]}` : 'No rating available'}</strong></p>
              <p className='product-price'>Price: <strong>{item.price ? `${item.price.split(' ')[0]}${item.price.split(' ')[2] ? ` - ${item.price.split(' ')[2]}` : ''}` : 'N/A'}</strong></p>
              <p className='product-shipping'>Shipping: <strong>{item.shipping ? item.shipping.split(' ')[0] : 'N/A'}</strong></p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className='ebay-link'>View on eBay</a>
            </div>
          ))}
        </div>
      </div>
      {apiData.results.length > numDisplayed && (
        <button onClick={displayNextProducts} className='view-button'>View More</button>
      )}
    </div>
  );
};

export default PLP;
