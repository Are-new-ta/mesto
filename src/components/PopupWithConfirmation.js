import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, selectors, { handleFormSubmit }) {
    super(popupSelector, selectors);
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._popupForm = this._popup.querySelector(selectors.formPopup);
    this._handleFormSubmit = handleFormSubmit;
  }

  //собирае данные о карточке
  getInfoCard(cardId, card) {
    this._cardId = cardId;//возможно надо id, а не кард Айди
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._cardId, this._card);//возможно надо id, а не кард Айди
    });
  }
}