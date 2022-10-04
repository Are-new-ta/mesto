export default class Card {
  constructor(item, template, selectors, serverToken, handleCardClick, { openPopupDeleteCard }, { handleRevomeLike }, { handleAddLike }) {
    this._name = item.name;
    this._link = item.link;
    this._id = item.id;
    this._ownerId = item.ownerId;
    this._likes = item.likes;
    this._template = template;
    this._serverToken = serverToken;

    this._handleCardClick = handleCardClick;
    this.openPopupDeleteCard = openPopupDeleteCard;
    this._handleAddLike = handleAddLike;
    this._handleRevomeLike = handleRevomeLike;

    this._likeCounter = selectors.cardLikeCounter;
    this._imageCard = selectors.imageCard;
    this._titleCard = selectors.cardTitle;
    this._buttonLike = selectors.likeButton;
    this._buttonAcviveLike = selectors.likeBtnActive;
    this._buttonDelete = selectors.deleteButton;
    this._buttonActiveLike = selectors.likeBtnActive;
    this._templateCard = selectors.templateCard;
    this._selectorCard = selectors.card;
  }

  //находим в темплейте элемент с нужным селектором и возвращаем его
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateCard)
      .content
      .querySelector(this._selectorCard)
      .cloneNode(true);
    return cardElement;
  }

  //метод для лайка
  _likeCard() {
    this._myLike = this._likes.filter((item) => { item._userId === this._serverToken });
    if (this._myLike.length > 0) {
      this._likeButton.classList.add(this._buttonAcviveLike)
    } else if (this._myLike.length === 0) {
      this._likeButton.classList.remove(this._buttonAcviveLike)
    }
  }

  //delete card
  _deleteCard() {
    const deleteButton = this._element.querySelector(this._buttonDelete);
    deleteButton.addEventListener('click', () => {
      this.openPopupDeleteCard(this._id, this._element);
    });
  }

  //открытие изображения на карточке
  _openCardImage() {
    const cardImage = this._element.querySelector(this._imageCard);
    cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _setHandlerLikes() {
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains(this._buttonAcviveLike)) {
        this._handleRevomeLike(this._id, this._likeButton, this._likeCounter, this._buttonAcviveLike);
      } else {
        this._handleAddLike(this._id, this._likeButton, this._likeCounter, this._buttonAcviveLike);
      }
    })
  }

  //удаления значка удаления
  _removeIconDelete() {
    if (this._ownerId !== this._serverToken) {
      this._element.querySelector(this._buttonDelete).remove();
    }
  }

  //создание/отрисовка карточки
  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(this._buttonLike);
    this._likeCounter = this._element.querySelector(this._likeCounter);
    const cardImage = this._element.querySelector(this._imageCard);
    const cardTitle = this._element.querySelector(this._titleCard);
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
    this._likeCounter.textContent = this._likes.length;
    this._removeIconDelete();
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeCard();
    this._deleteCard();
    this._openCardImage();
    this._setHandlerLikes();
  }

}

// export { Card };





