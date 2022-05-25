import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';
import BeerContext from '../../context/context';

function Card({ id, card, onCardClick, onFavoriteBtn, favorited = false }) {
  const { isAdded, setIsAdded } = React.useContext(BeerContext);
  const cardFavoriteClassName = `card__favorite ${favorited && 'card__favorite_active'}`;

  function handleClickFavorite() {
    setIsAdded(!isAdded);
    onFavoriteBtn(card, { id });
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
      <NavLink to={'about/'}>
        <img className='card__photo' src={card.image_url} alt={card.name} onClick={handleCardClick} />
        <div className='card__text-container'>
          <h2 className='card__name'>{card.name}</h2>
          <p className='card__abv'>ABV: {card.abv}%</p>
        </div>
      </NavLink>
    </li>
  );
}

export default Card;
