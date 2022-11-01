
export default class FormValidator {
  constructor(form, config) {
    this._form = document.querySelector(form);
    this._config = config;
    this._configButtonDisabled = config.buttonDisabled;
    this._inputBorderError = config.buttonDisabled;
    this._configButtonSubmit = config.buttonSubmin;
    this._popupInput = config.inputPopup;
    this._popupTextError = config.popupTextError;
    this._closePopupButtons = document.querySelectorAll(config.buttonClosePopup);
    this._buttonSubmit = this._form.querySelector(config.buttonSubmin);
    this._inputArr = Array.from(this._form.querySelectorAll(this._popupInput));
    this._spanArr = Array.from(this._form.querySelectorAll(this._popupTextError));
  }

  enableValidation(config) {
    this._form.addEventListener('input', (evt) => this._handleFormInput(evt));
  }

  //метод для вывода ошибок инпутов  был _handleFormInput
  _handleFormInput(evt) {
    const input = evt.target;
    const form = evt.currentTarget;
    this._setInputState(input);
    this._setFieldError(input);
    this._toggleButtonState(form);
  }

  //метод для вывода ошибок инпутов 
  _toggleButtonState(form, config) {
    //проверяем валидность формы и делаем кнопки artive or disabled
    const isValid = form.checkValidity();
    if (isValid) {
      this._activateSubmitButton();
    } else {
      this._disableSubmitButton();
    }
  }

  //метод для проверки инпутов на валидность
  _setInputState(input, config) {
    const isValid = input.checkValidity();
    if (isValid) {
      input.classList.remove(this._inputBorderError);
      this._activateSubmitButton();
      this._resetErrorSpan();
      this._resetErrorInput();
    } else {
      input.classList.add(this._inputBorderError);
      this._disableSubmitButton();
      this._resetErrorSpan();
      this._resetErrorInput();
    }
  }

  // Записываем текст ошибок в специальные контейнеры под каждым полем.
  _setFieldError(input) {
    const span = input.nextElementSibling;
    span.textContent = input.validationMessage;
  }

  //методы из индекса для активности кнопки
  //функция неактивной кнопки отправки (disabled button)
  //нужноеще забросить  сброс ошибок
  _disableSubmitButton() {
    this._buttonSubmit.setAttribute('disabled', true);
    this._buttonSubmit.classList.add(this._configButtonDisabled);
  }

  //функция для активного вида кнопки 
  _activateSubmitButton() {
    this._buttonSubmit.removeAttribute('disabled');
    this._buttonSubmit.classList.remove(this._configButtonDisabled);
  }

  // функция, которая удаляет показ ошибок инпутов
  _resetErrorInput() {
    this._inputArr.forEach((input) => input.classList.remove(this._configButtonDisabled));
  }

  //функция, которая удаляет показ ошибок span
  _resetErrorSpan() {
    this._spanArr.forEach((span) => span.textContent = '');
  }

  resetValidation() {
    this._disableSubmitButton();
    this._resetErrorInput();
    this._resetErrorSpan();
  }
}

export { FormValidator };







// export default class FormValidator {
//   constructor(form, config, popup) {
//     this._form = document.querySelector(form);
//     this._config = config;
//     this._popup = popup;
//     this._configButtonDisabled = config.buttonDisabled;
//     this._inputBorderError = config.buttonDisabled;
//     this._configButtonSubmit = config.buttonSubmin;
//     this._popupInput = config.inputPopup;
//     this._popupTextError = config.popupTextError;
//     this._closePopupButtons = document.querySelectorAll(config.buttonClosePopup);
//     this._buttonSubmit = popup.querySelector(config.buttonSubmin);
//   }

//   enableValidation(config) {
//     this._form.addEventListener('input', (evt) => this._handleFormInput(evt, this._config));
//   }

//   //метод для вывода ошибок инпутов
//   _handleFormInput(evt, config) {
//     const input = evt.target;
//     const form = evt.currentTarget;
//     this._setInputState(input, this._config);
//     this._setFieldError(input);
//     this._handleFormSubmit(form, this._config);
//   }

//   //метод для вывода ошибок инпутов
//   _handleFormSubmit(form, config) {
//     //проверяем валидность формы и делаем кнопки artive or disabled
//     const isValid = form.checkValidity();
//     if (isValid) {
//       this._buttonSubmit.removeAttribute('disabled');
//       this._buttonSubmit.classList.remove(this._configButtonDisabled);
//     } else {
//       this._buttonSubmit.setAttribute('disabled', true);
//       this._buttonSubmit.classList.add(this._configButtonDisabled);
//     }
//   }

//   //метод для проверки инпутов на валидность
//   _setInputState(input, config) {
//     const isValid = input.checkValidity();
//     if (isValid) {
//       input.classList.remove(this._inputBorderError);
//       this._activateSubmitButton(input);
//       this._resetErrorSpan();
//       this._resetErrorInput();
//     } else {
//       input.classList.add(this._inputBorderError);
//       this._disableSubmitButton(input);
//       this._resetErrorSpan();
//       this._resetErrorInput();
//     }
//   }

//   // Записываем текст ошибок в специальные контейнеры под каждым полем.
//   _setFieldError(input) {
//     const span = input.nextElementSibling;
//     span.textContent = input.validationMessage;
//   }

//   //методы из индекса для активности кнопки
//   //функция неактивной кнопки отправки (disabled button)
//   //нужноеще забросить  сброс ошибок
//   _disableSubmitButton() {
//     this._buttonSubmit.setAttribute('disabled', true);
//     this._buttonSubmit.classList.add(this._configButtonDisabled);
//   }

//   //функция для активного вида кнопки
//   _activateSubmitButton() {
//     const buttonSubmit = this._popup.querySelector(this._configButtonSubmit);
//     buttonSubmit.removeAttribute('disabled');
//     buttonSubmit.classList.remove(this._configButtonDisabled);
//   }

//   // функция, которая удаляет показ ошибок инпутов
//   _resetErrorInput() {
//     const inputArr = Array.from(this._popup.querySelectorAll(this._popupInput));
//     inputArr.forEach((input) => input.classList.remove(this._configButtonDisabled));
//   }

//   //функция, которая удаляет показ ошибок span
//   _resetErrorSpan() {
//     const spanArr = Array.from(this._popup.querySelectorAll(this._popupTextError));
//     spanArr.forEach((span) => span.textContent = '');
//   }

//   resetValidation() {
//     this._disableSubmitButton();
//     this._resetErrorInput();
//     this._resetErrorSpan();
//   }
// }

// export { FormValidator };




















