import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { handleFormSubmit }, selectors) {
    super(popupSelector, selectors);
    this._popupSelector = popupSelector;//
    this._popup = document.querySelector(this._popupSelector);//
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector(selectors.formPopup);
  }

  //собирае данные о карточке
  getInfoCard(cardId, card) {
    this._cardId = cardId;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._cardId, this._card);
    });
  }
}