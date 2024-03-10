import React, { useState } from 'react';

const PDP = ({ product, onBack }) => {
  const [showModal, setShowModal] = useState(false);
  const [showFavoritesMessage, setShowFavoritesMessage] = useState(false);
  const [showBuyNowMessage , setShowBuyNowMessage] = useState(false);
  const [selectedQuantity , setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  const handleFavorites = () => {
    setShowFavoritesMessage(true);
    setTimeout(() => setShowFavoritesMessage(false), 2000);
  };

  const handleBuyNow = () => {
    setShowBuyNowMessage(true);
    setTimeout(() => setShowBuyNowMessage(false), 2000);
  }

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  }

  return (
    <div className='container-pdp'>
      <div className='pdp-button'>
        <button className='back' onClick={onBack}>
          <i className="fa fa-long-arrow-left"></i>
          <span className="hover-text">Back</span>
        </button>
        <button className='favorites' onClick={handleFavorites}>
          <i className="fa fa-heart"></i>
          <span className="hover-text">Wishlist</span>
        </button>
      </div>
      <div className='pdp-page'>
        <div className='pdp-img'>
          <img src={product.image} alt={product.title} />
        </div>
        <hr />
        <div className='pdp-info'>
          <div className='pdp-title'>{product.title ? product.title : 'No title available'}</div>
          <p className='pdp-rating'>Rating: <strong>{product.rating ? `${product.rating.split(' ')[0]}/${product.rating.split(' ')[3]}` : 'No rating available'}</strong></p>
          <p>Price: <strong>{product.price ? `${product.price.split(' ')[0]}${product.price.split(' ')[2] ? ` - ${product.price.split(' ')[2]}` : ''}` : 'N/A'}</strong></p>
          <p>Shipping: <strong>{product.shipping ? product.shipping.split(' ')[0] : 'N/A'}</strong></p>
          <div className='qty-selector'>
            <label for="qty" className='qty-label'>Quantity :</label>
            <select id="qty" className='qty' onChange={handleQuantityChange} value={selectedQuantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className='shop-buttons'>
            <button className='cart-button' onClick={handleAddToCart}>
              <i className="fa fa-shopping-cart"></i>
              Add To Cart
            </button>
            <button className='buy-now' onClick={handleBuyNow}>Buy Now</button>
          </div>
          <a href={product.url} target="_blank" rel="noopener noreferrer" className='ebay-link'>View on eBay</a>
        </div>
      </div>
      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <div>{selectedQuantity} Products Added to Cart</div>
          </div>
        </div>
      )}
      {showFavoritesMessage && (
        <div className="modal-container">
          <div className="modal">
            <div>{selectedQuantity} Products Added to Wishlist</div>
          </div>
        </div>
      )}
      {showBuyNowMessage && (
        <div className="modal-container">
          <div className="modal">
            <div>Excellent Choice</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDP;
