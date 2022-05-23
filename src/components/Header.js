import React, { useState } from 'react';
import headerLogo from '../images/beer.svg';
import './Header.css';
import { InputText } from 'primereact/inputtext';

function Header() {
  const [value, setValue] = useState('');

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <img className='header__logo' src={headerLogo} alt='Логотип пива' />
        <h2>Tasty beer</h2>
      </div>
      <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' />
    </header>
  );
}

export default Header;
