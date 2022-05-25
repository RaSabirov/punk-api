import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Card from './Card';
import './Main.css';
import searchImg from '../images/search.svg';
import BeerContext from '../context/context';

function Main({ cards, onFavoriteBtn, onCardClick }) {
  const [searchValue, setSearchValue] = useState('');
  const { cartItems } = React.useContext(BeerContext);
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <main className='content'>
      <section className='cards'>
        <div className='search-container'>
          <div className='search-block'>
            <input
              className='search__input'
              placeholder='Поиск...'
              onChange={onChangeSearchInput}
              value={searchValue}
            />
            <img className='search__img' src={searchImg} alt='логотип поиска' />
          </div>
        </div>

        <div className='surface-0 text-center'>
          <div className='mb-3 font-bold text-2xl'>
            <span className='text-blue-500'>
              {searchValue ? `Поиск по запросу:'${searchValue}'` : 'Список всего ассортимента'}
            </span>
            <p>Кликните на карточку, чтобы открыть детальное описание</p>
          </div>
        </div>
        <ul className='card'>
          {cards
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((card) => (
              <Card
                key={card.id}
                card={card}
                onCardClick={onCardClick}
                onFavoriteBtn={onFavoriteBtn}
                favorited={cartItems.some((i) => i.id === card.id)}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
