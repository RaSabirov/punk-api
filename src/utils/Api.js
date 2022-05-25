class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _errorHandler = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Возникла ошибка: ${res.status}`);
  };

  // Получаем карточки с сервера
  getInitialBeer() {
    return fetch(`${this._url}/beers/?page=1&per_page=12`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._errorHandler);
  }
}

export const api = new Api({
  url: 'https://api.punkapi.com/v2',
  headers: {
    'content-type': 'application/json',
  },
});
