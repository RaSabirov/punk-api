import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { api } from '../../utils/Api';
import BeerContext from '../../context/context';
import Header from '../Header/Header';
import './App.css';
import Main from '../Main/Main';
import AboutBeer from '../AboutBeer/AboutBeer';
import PopupFavorites from '../PopupFavorites/PopupFavorites';

function App() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const selectedCardLocalStorage = JSON.parse(localStorage.getItem('currentBeer') || '[]');

  const [isAdded, setIsAdded] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [cartItems, setCartItems] = React.useState(cartFromLocalStorage);
  const [isFavoriteOpenPopup, setIsFavoriteOpenPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(selectedCardLocalStorage);

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

  // Сохраняем состояние выбранной карточки в localStorage, чтобы при перезагрузке не было пустой информации
  React.useEffect(() => {
    localStorage.setItem('currentBeer', JSON.stringify(selectedCard));
  }, [selectedCard]);

  function handleCardClick(card) {
    setSelectedCard(card);
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
          <Route
            path='about'
            element={
              <AboutBeer
                card={selectedCard}
                onFavoriteBtn={handleClickToFavoriteBtn}
                favorited={cartItems.some((i) => i.id === selectedCard.id)}
              />
            }
          />
        </Routes>
        <PopupFavorites isOpen={isFavoriteOpenPopup} onClose={handleClosePopup} items={cartItems} />
      </BeerContext.Provider>
    </div>
  );
}

export default App;
