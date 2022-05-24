import React from 'react';
import './Card.css';
// import likeBtn from '../images/like-active-btn.svg';
// import unlikeBtn from '../images/like-btn.svg';

function Card({ card, onCardClick, onFavoriteBtn }) {
  const { name, abv, image_url } = card;
  const [isFavorite, setIsFavorite] = React.useState('');
  const cardFavoriteClassName = `card__favorite ${isFavorite && 'card__favorite_active'}`;

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
    onFavoriteBtn(card);
  }

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className='card__item'>
      <button
        className={cardFavoriteClassName}
        type='button'
        aria-label='кнопка фаворита'
        onClick={handleClickFavorite}
      ></button>
      <img className='card__photo' src={image_url} alt={name} onClick={handleCardClick} />
      <div className='card__text-container'>
        <h2 className='card__name'>{name}</h2>
        <p className='card__abv'>ABV: {abv}%</p>
      </div>
    </li>
  );
}

export default Card;
