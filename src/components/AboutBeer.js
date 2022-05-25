import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBeer.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
// import BeerContext from '../context/context';

function AboutBeer({ card }) {
  // const { isAdded, setIsAdded } = React.useContext(BeerContext);
  // const cardFavoriteClassName = `card__favorite ${isAdded && 'card__favorite_active'}`;

  // function handleClickFavorite() {
  //   setIsAdded(!isAdded);
  //   onFavoriteBtn(card, { id });
  // }

  return (
    <section className='beer'>
      <Link to='/'>
        <button className='beer__home'>Назад</button>
      </Link>
      <div className='beer__container'>
        <div className='surface-0 text-center'>
          <div className='mb-3 font-bold text-2xl'>
            <span className='text-blue-600'>Детальное описание пива</span>
          </div>
        </div>
        <div className='beer__details'>
          <button
            className='beer__favorite'
            type='button'
            aria-label='кнопка фаворита'
            onClick={console.log('click')}
          ></button>
          <div className='beer__image' style={{ backgroundImage: `url(${card.image_url})` }} />
          <div className='beer__text-container'>
            <h3 className='beer__title'>
              <span className='beer__text_bold'>Name: </span>
              {card.name}
            </h3>
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
