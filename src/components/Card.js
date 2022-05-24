import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import BeerContext from '../context/context';

function Card({ card, onCardClick, onFavoriteBtn, favorited = false }) {
  const { name, abv, image_url, id } = card;
  // const { isAdded, setIsAdded } = React.useContext(BeerContext);
  const [isAdded, setIsAdded] = React.useState(favorited);
  const cardFavoriteClassName = `card__favorite ${isAdded && 'card__favorite_active'}`;

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
      <Link to='/about'>
        <img className='card__photo' src={image_url} alt={name} onClick={handleCardClick} />
        <div className='card__text-container'>
          <h2 className='card__name'>{name}</h2>
          <p className='card__abv'>ABV: {abv}%</p>
        </div>
      </Link>
    </li>
  );
}

export default Card;
