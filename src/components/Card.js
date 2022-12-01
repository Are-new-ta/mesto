export default class Card {
  constructor({ item, template, selectors, userToken, handleCardClick, openPopupDeleteCard, handleAddLike, handleRevomeLike }) {
    this._name = item.name;
    this._link = item.link;
    this._id = item._id;
    this._ownerId = item.ownerId;
    this._likes = item.likes;
    this._template = template;
    this._userToken = userToken;

    this._handleCardClick = handleCardClick;
    this.openPopupDeleteCard = openPopupDeleteCard;
    this._handleAddLike = handleAddLike;
    this._handleRevomeLike = handleRevomeLike;

    this._likeCounterSelector = selectors.cardLikeCounter;
    this._imageCard = selectors.imageCard;
    this._titleCard = selectors.cardTitle;
    this._buttonLike = selectors.likeButton;
    this._buttonActiveLike = selectors.likeBtnActive;
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


  //открытие изображения на карточке
  _openCardImage() {
    const cardImage = this._element.querySelector(this._imageCard);
    cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  //метод для лайка _likeCard()
  _likeCard() {
    this._likeButton.addEventListener('click', () => {
      this._setLikeStatus();
      this._setLikesCounter()
    });
  }

  // проверяем поставлен лайк или нет
  isLiked() {
    const isLiked = this._likes.some(user => user._id === this._userToken)
    return isLiked;
  }

  // устанавливаем статус для лайка
  _setLikeStatus() {
    if (this.isLiked()) {
      this._likeButton.classList.add(this._buttonActiveLike);
    } else {
      this._likeButton.classList.remove(this._buttonActiveLike);
    }
  }

  //Counter
  _setLikesCounter() {
    if (this.isLiked()) {
      this._likeButton.classList.remove(this._buttonActiveLike);
      this._handleRevomeLike(this._id);
    } else {
      this._likeButton.classList.add(this._buttonActiveLike);
      this._handleAddLike(this._id);
    }
  }

  setCounter(likes) {
    this._likeCounter.textContent = likes.length;
    this._likes = likes;
  }

  //удаления значка удаления
  _removeIconDelete() {
    if (this._ownerId == this._userToken) {
      this._element.querySelector(this._buttonDelete).remove();
    }
  }

  //delete card
  _deleteCard() {
    const deleteButton = this._element.querySelector(this._buttonDelete);
    deleteButton.addEventListener('click', () => {
      // console.log("ID", this._id)
      this.openPopupDeleteCard(this._id, this._element);
    });
  }

  //создание/отрисовка карточки
  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(this._buttonLike);
    this._likeCounter = this._element.querySelector(this._likeCounterSelector);
    const cardImage = this._element.querySelector(this._imageCard);
    const cardTitle = this._element.querySelector(this._titleCard);
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
    this._likeCounter.textContent = this._likes.length;
    this._setLikeStatus();
    this._removeIconDelete();
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeCard();
    this._openCardImage();
    this._deleteCard();
  }
}

