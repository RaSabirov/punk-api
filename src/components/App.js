import React from 'react';
import Header from './Header';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import './App.css';
import Main from './Main';
import { api } from '../utils/Api';

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialBeer()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => alert(`Ошибка загрузки данных с сервера: ${err}`));
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <Main cards={cards} />
    </div>
  );
}

export default App;
