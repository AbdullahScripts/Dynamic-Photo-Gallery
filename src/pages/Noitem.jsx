import React from 'react';
import './Noitem.css'
import searchPic from '../assests/detective-1424831_1280.png'
const NoItems = () => {
  return (
    <div className="no-items">
      <p>No items found.</p>
      
        <div className="item-img-card"><img src={searchPic} alt="search" /></div>
        <div className="text-item">Please search for images</div>
      
    </div>
  );
};

export default NoItems;
