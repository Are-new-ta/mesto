import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, selectors) {
    super(popupSelector, selectors);
    this._popupSelector = popupSelector;
    this._popupForm = this._popup.querySelector(selectors.formPopup);
  }

  //устанавливает данные о карточке
  setInfoCard(id, card) {
    this._id = id;
    this._card = card;
  }

  setSubmitAction(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();

    });
  }
}


