
export default class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._config = config;
    this._configButtonDisabled = config.buttonDisabled;
    this._configButtonSubmit = config.buttonSubmin;
    this._configInputPopup = config.inputPopup;
    this._configInputBorderError = config.inputBorderError;
    this._configPopupTextError = config.popupTextError;
    this._buttonSubmit = this._form.querySelector(config.buttonSubmin);
    this._inputArr = Array.from(this._form.querySelectorAll(this._configInputPopup));
  }

  enableValidation() {
    this._setEventListeners();
  };

  resetValidation() {
    this._toggleButtonState();

    this._inputArr.forEach((input) => {
      this._hideInputError(input);
    });
  };

  _setEventListeners() {
    this._toggleButtonState();

    this._inputArr.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonSubmit.classList.add(this._configButtonDisabled);
      this._buttonSubmit.setAttribute('disabled', true);
    } else {
      this._buttonSubmit.classList.remove(this._configButtonDisabled);
      this._buttonSubmit.removeAttribute('disabled');
    }
  };

  _hasInvalidInput() {
    return this._inputArr.some((input) => {
      return !input.validity.valid;
    })
  };

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  };

  _showInputError(input) {
    this._span = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._configInputBorderError);
    this._span.textContent = input.validationMessage;
    this._span.classList.add(this._configPopupTextError);
  };

  _hideInputError(input) {
    this._span = this._form.querySelector(`.${input.id}-error`);
    console.log('span ', this._span);
    input.classList.remove(this._configInputBorderError);
    this._span.classList.remove(this._configPopupTextError);
    this._span.textContent = '';
  };

}

export { FormValidator };







