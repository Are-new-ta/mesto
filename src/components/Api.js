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
    }).then(this._checkServerResponse);
  }

  //получаем данные юзера
  getUserProfile() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkServerResponse);
  }

  //меняем аватарку
  changeAvatar(avatarLink) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatarLink}`,
      })
    }).then(this._checkServerResponse);
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
    }).then(this._checkServerResponse);
  }

  //добавляем карточку
  addNewCard(name, link) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
    }).then(this._checkServerResponse);
  }

  //удаляем карточку
  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkServerResponse);
  }

  //снимаем лайк с карточки
  deleteLikeCard(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkServerResponse);
  }

  //добавляем лайк карточке
  addLikeCard(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(this._checkServerResponse);
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}