export default class Api {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  //получаем данные по ссылке
  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => this._checkServerResponse(res));
  }

  //получаем данные юзера
  getUserProfile() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => this._checkServerResponse(res));
  }

  //меняем аватарку
  changeAvatar(avatarLink) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatarLink}`,
      })
    })
      .then((res) => this._checkServerResponse(res));
  }

  //меняем данные пользователя
  changeUserProfile(userName, userJob) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: `${userName}`,
        about: `${userJob}`
      })
    })
      .then((res) => this._checkServerResponse(res));
  }

  //добавляем карточку
  addNewCard(popupNameCard, popupLink) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: `${popupNameCard}`,
        link: `${popupLink}`
      })
    })
      .then((res) => this._checkServerResponse(res));
  }


  //удаляем карточку
  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => this._checkServerResponse(res));
  }

  //закомментрила, чтобы добраться до сути ошибки,
  //снимаем лайк с карточки
  deleteLikeCard(id) {
    return fetch(`${this._url}cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => this._checkServerResponse(res));
  }

  //добавляем лайк карточке
  addLikeCard(id) {
    return fetch(`${this._url}cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then((res) => this._checkServerResponse(res));
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}


