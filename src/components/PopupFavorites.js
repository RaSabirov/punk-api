import React from 'react';
import './PopupFavorites.css';

function PopupFavorites({ isOpen, onClose, items = [] }) {
  return (
    <div className={`favorite ${isOpen && 'favorite_is-opened'}`}>
      <div className='favorite__field'>
        <button className='favorite__close' type='button' aria-label='close' onClick={onClose} />
        <h2 className='favorite__title'>Избранные товары</h2>
        {items.map((obj) => (
          <>
            <div className='favorite__item'>
              <img className='favorite__img' src='https://images.punkapi.com/v2/6.png' alt='item' />
              <div className='favorite__text-container'>
                <div className='favorite__name'>{obj.name}</div>
                <div className='favorite__abv'>{obj.abv}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default PopupFavorites;
