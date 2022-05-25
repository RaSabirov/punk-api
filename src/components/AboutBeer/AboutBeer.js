import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBeer.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import BeerContext from '../../context/context';

function AboutBeer({ id, card, onFavoriteBtn, favorited = false }) {
  const { isAdded, setIsAdded } = React.useContext(BeerContext);

  const cardFavoriteClassName = `beer__favorite ${favorited && 'beer__favorite_active'}`;

  function handleClickFavorite() {
    setIsAdded(!isAdded);
    onFavoriteBtn(card, { id });
  }

  return (
    <section className='beer'>
      <Link to='/'>
        <button className='beer__home'></button>
      </Link>
      <div className='beer__container'>
        <div className='surface-0 text-center'>
          <div className='mb-3 font-bold text-2xl'>
            <span className='text-blue-600'>Детальное описание пива</span>
          </div>
        </div>
        <div className='beer__details'>
          <button
            className={cardFavoriteClassName}
            type='button'
            aria-label='кнопка фаворита'
            onClick={handleClickFavorite}
          ></button>
          <div className='beer__image' style={{ backgroundImage: `url(${card.image_url})` }} />
          <div className='beer__text-container'>
            <p className='beer__text'>
              <span className='beer__text_bold'>Name: </span>
              {card.name}
            </p>
            <p className='beer__text'>
              <span className='beer__text_bold'>ABV: </span>
              {card.abv}%
            </p>
            <p className='beer__text'>
              <span className='beer__text_bold'>First brewed: </span>
              {card.first_brewed}
            </p>
            <p className='beer__text'>
              <span className='beer__text_bold'>IBU: </span>
              {card.ibu}
            </p>
            <p className='beer__text'>
              <span className='beer__text_bold'>EBC: </span>
              {card.ebc}
            </p>
            <p className='beer__description'>
              <span className='beer__text_bold'>Description: </span>
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBeer;
