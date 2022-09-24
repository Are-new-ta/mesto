import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, selectors, { handleFormSubmit }) {
    super(popupSelector, selectors);
    this._form = this._popup.querySelector(selectors.formPopup);
    this._inputArray = this._popup.querySelectorAll(selectors.popupInput)
    this._handleFormSubmit = handleFormSubmit;
  }

  //собирает данные всех полей формы
  _getInputValues() {
    this._valueForms = {};
    this._inputArray.forEach(input => {
      this._valueForms[input.name] = input.value;
    });
    return this._valueForms;
  }

  setInputValues(data) {
    this._inputArray.forEach((input) => {
      input.value = data[input.name];
    });
  }

  //закрывает и сбрасывает поля
  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}

