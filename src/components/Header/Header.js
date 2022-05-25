import React from 'react';
import headerLogo from '../../images/beer.svg';
import './Header.css';

function Header({ onClickFavoritePopup }) {
  return (
    <header className='header'>
      <div className='header__logo-container'>
        <img className='header__logo' src={headerLogo} alt='Логотип пива' />
        <h2 className='header__title'>Tasty beer</h2>
      </div>
      <div className='header__favorite' onClick={onClickFavoritePopup}>
        <button className='header__favorite-btn' type='button' aria-label='кнопка избранное'></button>
        <h2 className='header__favorite-text'>Избранное</h2>
      </div>
    </header>
  );
}

export default Header;
