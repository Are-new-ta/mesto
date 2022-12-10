import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, selectors, handlerDeleteCard, { handleFormSubmit }) {
    super(popupSelector, selectors);
    this._popupSelector = popupSelector;
    this._popupForm = this._popup.querySelector(selectors.formPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._handlerDeleteCard = handlerDeleteCard;
  }

  //устанавливает данные о карточке
  setInfoCard(id, card) {
    this._id = id;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._id, this._card);
    });
  }
}


