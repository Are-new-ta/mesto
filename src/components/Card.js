export default class Card {
  constructor({ item, selectors, userId, handleCardClick, openPopupDeleteCard, handleAddLike, handleRevomeLike }) {
    this._name = item.name;
    this._link = item.link;
    this._id = item._id;
    this._ownerId = item.owner._id;
    this._likes = item.likes;
    this._userId = userId;

    this._handleCardClick = handleCardClick;
    this.openPopupDeleteCard = openPopupDeleteCard;
    this._handleAddLike = handleAddLike;
    this._handleRevomeLike = handleRevomeLike;

    this._likeCounterSelector = selectors.cardLikeCounter;
    this._imageCardSelector = selectors.imageCard;
    this._titleCardSelector = selectors.cardTitle;
    this._buttonLikeSelector = selectors.likeButton;
    this._buttonActiveLikeSelector = selectors.likeBtnActive;
    this._buttonDeleteSelector = selectors.deleteButton;
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


  // проверяем поставлен лайк или нет
  isLiked() {
    const isLiked = this._likes.some(user => user._id === this._userId);
    return isLiked;
  }

  _likeCard() {
    if (this.isLiked()) {
      this._likeButton.classList.add(this._buttonActiveLikeSelector);
    } else {
      this._likeButton.classList.remove(this._buttonActiveLikeSelector);
    }
  }

  //Counter
  _setLikesCounter() {
    if (this.isLiked()) {
      this._handleRevomeLike(this._id, this._likeButton);
    } else {
      this._handleAddLike(this._id, this._likeButton);
    }
  }

  setCounter(likes) {
    this._likeCounter.textContent = likes.length;
    this._likes = likes;
  }

  //удаления значка удаления
  _removeIconDelete() {
    const deleteButton = this._element.querySelector(this._buttonDeleteSelector);
    if (this._ownerId == this._userId) {
      deleteButton.classList.remove('card__delete_hidden');
    } else {
      deleteButton.classList.add('card__delete_hidden');
    }
  }

  //создание/отрисовка карточки
  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(this._buttonLikeSelector);
    this._likeCounter = this._element.querySelector(this._likeCounterSelector);
    const imageCard = this._element.querySelector(this._imageCardSelector);
    const cardTitle = this._element.querySelector(this._titleCardSelector);
    imageCard.src = this._link;
    imageCard.alt = this._name;
    cardTitle.textContent = this._name;
    this._likeCounter.textContent = this._likes.length;
    this._removeIconDelete();
    this.isLiked();
    this._likeCard()
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector(this._imageCardSelector).addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._likeButton.addEventListener('click', () => {
      this._setLikesCounter()
    });

    const deleteButton = this._element.querySelector(this._buttonDeleteSelector);
    deleteButton.addEventListener('click', () => {
      this.openPopupDeleteCard(this._id, this._element);
    });
  }

}


