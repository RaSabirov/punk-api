import React from 'react';
import Header from './Header';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import './App.css';
import Main from './Main';
import { api } from '../utils/Api';
import PopupFavorites from './PopupFavorites';
// import { Context } from '../context/context';

function App() {
  const [cards, setCards] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [isFavoriteOpenPopup, setIsFavoriteOpenPopup] = React.useState(false);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  // const [selectedCard, setSelectedCard] = React.useState(false);

  React.useEffect(() => {
    api
      .getInitialBeer()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => alert(`Ошибка загрузки данных с сервера: ${err}`));
  }, []);

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
    setFavoriteItems([...favoriteItems], obj);
  }

  return (
    <div className='wrapper'>
      <Header onClickFavoritePopup={handleOpenPopup} />
      <Main cards={cards} onCardClick={handleCardClick} onFavoriteBtn={handleClickToFavoriteBtn} />
      <PopupFavorites isOpen={isFavoriteOpenPopup} onClose={handleClosePopup} items={items} />
    </div>
  );
}

export default App;
