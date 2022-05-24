import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { api } from '../utils/Api';
import BeerContext from '../context/context';
import Header from './Header';
import './App.css';
import Main from './Main';
import AboutBeer from '../components/AboutBeer';
import PopupFavorites from './PopupFavorites';

function App() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const [isAdded, setIsAdded] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [cartItems, setCartItems] = React.useState(cartFromLocalStorage);
  const [isFavoriteOpenPopup, setIsFavoriteOpenPopup] = React.useState(false);

  const contextValue = {
    cartItems,
    isAdded,
    setIsAdded,
  };

  React.useEffect(() => {
    api
      .getInitialBeer()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => alert(`Ошибка загрузки данных с сервера: ${err}`));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function handleCardClick() {
    console.log('click card');
  }

  function handleOpenPopup() {
    setIsFavoriteOpenPopup(true);
  }

  function handleClosePopup() {
    setIsFavoriteOpenPopup(false);
  }

  function handleClickToFavoriteBtn(obj) {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== obj.id));
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  }

  return (
    <div className='wrapper'>
      <BeerContext.Provider value={contextValue}>
        <Header onClickFavoritePopup={handleOpenPopup} />
        <Routes>
          <Route
            path='/'
            element={<Main cards={cards} onCardClick={handleCardClick} onFavoriteBtn={handleClickToFavoriteBtn} />}
          />
          <Route path='about' element={<AboutBeer />} />
        </Routes>
        <PopupFavorites isOpen={isFavoriteOpenPopup} onClose={handleClosePopup} items={cartItems} />
      </BeerContext.Provider>
    </div>
  );
}

export default App;
