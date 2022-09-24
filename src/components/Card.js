export default class Card {
  constructor(item, template, selectors, handleCardClick) {
    this._name = item.name;
    this._link = item.link;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._imageCard = selectors.imageCard;
    this._titleCard = selectors.cardTitle;
    this._buttonLike = selectors.likeButton;
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

  //создание/отрисовка карточки
  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardImage = this._element.querySelector(this._imageCard);
    const cardTitle = this._element.querySelector(this._titleCard);
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
    return this._element;
  }

  //метод для лайка
  _likeCard() {
    const likeButton = this._element.querySelector(this._buttonLike);
    likeButton.addEventListener('click', (evt) => {
      const eventTarget = evt.target;
      eventTarget.classList.toggle(this._buttonActiveLike);
    });
  }

  //delete card
  _deleteCard() {
    const deleteButton = this._element.querySelector(this._buttonDelete);
    deleteButton.addEventListener('click', () => {
      this._element.remove();
      this._element = null;
    });
  }

  //открытие изображения на карточке
  _openCardImage() {
    const cardImage = this._element.querySelector(this._imageCard);
    cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _setEventListeners() {
    this._likeCard();
    this._deleteCard();
    this._openCardImage();
  }
}
export { Card };