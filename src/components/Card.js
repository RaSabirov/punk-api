import React from 'react';
import './Card.css';
// import likeBtn from '../images/like-active-btn.svg';
// import unlikeBtn from '../images/like-btn.svg';

function Card({ card }) {
  const { name, abv, image_url } = card;

  return (
    <li className='card__item'>
      <button className='card__likebtn' type='button' aria-label='кнопка фаворита'></button>
      <img className='card__photo' src={image_url} alt={name} />
      <div className='card__text-container'>
        <h2 className='card__name'>{name}</h2>
        <p className='card__abv'>ABV: {abv}%</p>
      </div>
    </li>
  );
}

export default Card;
