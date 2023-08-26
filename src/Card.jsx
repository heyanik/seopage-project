import React from 'react';
import "./Card.css" // Import your CSS file for styling
import CardBox from './CardBox';

const Card = () => {
  return (
    <div className="card">
      <div className='card_head'>
      <h2>Card Title</h2>
      <p>0</p>
      </div>
      <div className="card-content">
        {/* Add scrollable content here */}
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>




      </div>
    </div>
  );
};

export default Card;