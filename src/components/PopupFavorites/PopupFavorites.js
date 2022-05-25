import React from 'react';
import './PopupFavorites.css';

function PopupFavorites({ isOpen, onClose, items = [] }) {
  return (
    <div className={`favorite ${isOpen && 'favorite_is-opened'}`}>
      <div className='favorite__field'>
        <button className='favorite__close' type='button' aria-label='close' onClick={onClose} />
        <h2 className='favorite__title'>Избранные товары</h2>

        {items.map((obj) => (
          <div key={obj.id}>
            <div className='favorite__item'>
              <button className='favorite-btn favorite-btn_active' type='button' aria-label='кнопка фаворита'></button>
              <div className='favorite__img' style={{ backgroundImage: `url(${obj.image_url})` }} />
              <div className='favorite__text-container'>
                <div className='favorite__text'>{obj.name}</div>
                <div className='favorite__text'>Содержание алкоголя: {obj.abv}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopupFavorites;
