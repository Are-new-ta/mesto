import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, selectors, { handleFormSubmit }) {
    super(popupSelector, selectors);
    this._popupSelector = popupSelector;
    // this._popup = document.querySelector(this._popupSelector); после комментариев ревью
    this._popupForm = this._popup.querySelector(selectors.formPopup);
    this._handleFormSubmit = handleFormSubmit;
  }

  //устанавливает данные о карточке
  setInfoCard(id, card) {
    this._id = id;
    this._card = card;
  }

  //пробный метод для удаления карточки 
  // removeCard() {
  //   return this._card.remove();
  // }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._id, this._card);
    });
  }
}


