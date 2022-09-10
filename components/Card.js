export default class Card {
  constructor(item, template, selector, handleCardClick) {
    this._name = item.name;
    this._link = item.link;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._imageCard = selector.imageCard;
    this._titleCard = selector.cardTitle;
    this._buttonLike = selector.likeButton;
    this._buttonDelete = selector.deleteButton;
    this._buttonActiveLike = selector.likeBtnActive;
    this._templateCard = selector.templateCard;
    this._selectorCard = selector.card;
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
      this._handleCardClick(this._link, this._name);
    });
  }

  _setEventListeners() {
    this._likeCard();
    this._deleteCard();
    this._openCardImage();
  }
}
export { Card };



//до изменений
// class Card {
//   constructor(item, openPopupImage, template, selector, handleCardClick) {
//     this._name = item.name;
//     this._link = item.link;
//     this._openPopupImage = openPopupImage;
//     this._template = template;
//   }
//   //находим в темплейте элемент с нужным селектором и возвращаем его
//   _getTemplate() {
//     const cardElement = document
//       .querySelector('.template-card')
//       .content
//       .querySelector('.card')
//       .cloneNode(true);
//     return cardElement;
//   }
//   //создание/отрисовка карточки
//   createCard() {
//     this._element = this._getTemplate();
//     this._setEventListeners();
//     const cardImage = this._element.querySelector('.card__image');
//     const cardTitle = this._element.querySelector('.card__title');
//     cardImage.src = this._link;
//     cardImage.alt = this._name;
//     cardTitle.textContent = this._name;
//     return this._element;
//   }
//   //метод для лайка
//   _likeCard() {
//     const likeButton = this._element.querySelector('.card__like');
//     likeButton.addEventListener('click', (evt) => {
//       const eventTarget = evt.target;
//       eventTarget.classList.toggle('card__like_active');
//     });
//   }
//   //delete card
//   _deleteCard() {
//     const deleteButton = this._element.querySelector('.card__delete');
//     deleteButton.addEventListener('click', () => {
//       this._element.remove();
//       this._element = null;//после ревью
//     });
//   }
//   //открытие изображения на карточке
//   _openCardImage() {
//     const cardImage = this._element.querySelector('.card__image');
//     cardImage.addEventListener('click', () => {
//       this._openPopupImage(this._link, this._name);
//     });
//   }

//   _setEventListeners() {
//     this._likeCard();
//     this._deleteCard();
//     this._openCardImage();
//   }
// }
// export { Card };

