
export default class FormValidator {
  constructor(form, config, popup) {
    this._form = document.querySelector(form);
    this._config = config;
    this._popup = popup;
    this._configButtonDisabled = config.buttonDisabled;
    this._inputBorderError = config.buttonDisabled;
    this._configButtonSubmit = config.buttonSubmin;
    this._popupInput = config.inputPopup;
    this._popupTextError = config.popupTextError;
    this._closePopupButtons = document.querySelectorAll(config.buttonClosePopup);
    this._buttonSubmit = popup.querySelector(config.buttonSubmin);
  }

  enableValidation(config) {
    this._form.addEventListener('input', (evt) => this._handleFormInput(evt, this._config));
  }

  //метод для вывода ошибок инпутов 
  _handleFormInput(evt, config) {
    const input = evt.target;
    const form = evt.currentTarget;
    this._setInputState(input, this._config);
    this._setFieldError(input);
    this._handleFormSubmit(form, this._config);
  }

  //метод для вывода ошибок инпутов 
  _handleFormSubmit(form, config) {
    // const buttonSubmit = form.querySelector(config.buttonSubmin);
    //проверяем валидность формы и делаем кнопки artive or disabled
    const isValid = form.checkValidity();
    if (isValid) {
      this._buttonSubmit.removeAttribute('disabled');
      this._buttonSubmit.classList.remove(this._configButtonDisabled);
    } else {
      this._buttonSubmit.setAttribute('disabled', true);
      this._buttonSubmit.classList.add(this._configButtonDisabled);
    }
  }

  //метод для проверки инпутов на валидность
  _setInputState(input, config) {
    const isValid = input.checkValidity();
    if (isValid) {
      input.classList.remove(this._inputBorderError);
      this._activateSubmitButton(input);
      this._resetErrorSpan();
      this._resetErrorInput();
    } else {
      input.classList.add(this._inputBorderError);
      this._disableSubmitButton(input);
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
    const buttonSubmit = this._popup.querySelector(this._configButtonSubmit);
    buttonSubmit.removeAttribute('disabled');
    buttonSubmit.classList.remove(this._configButtonDisabled);
  }

  // функция, которая удаляет показ ошибок инпутов
  _resetErrorInput() {
    const inputArr = Array.from(this._popup.querySelectorAll(this._popupInput));
    inputArr.forEach((input) => input.classList.remove(this._configButtonDisabled));
  }

  //функция, которая удаляет показ ошибок span
  _resetErrorSpan() {
    const spanArr = Array.from(this._popup.querySelectorAll(this._popupTextError));
    spanArr.forEach((span) => span.textContent = '');
  }

  resetValidation() {
    this._disableSubmitButton();
    this._resetErrorInput();
    this._resetErrorSpan();
  }
}

export { FormValidator };





// //class FormValidator {
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
//     // const buttonSubmit = form.querySelector(config.buttonSubmin);
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






// после небольшой корректировки
// class FormValidator {
//   constructor(form, config, popup) {
//     this._form = document.querySelector(form);
//     this._config = config;
//     this._popup = popup;
//     this._configButtonDisabled = config.buttonDisabled;
//     this._inputBorderError = config.buttonDisabled;
//     this._buttonSubmit = config.buttonSubmin;
//     this._popupInput = config.inputPopup;
//     this._popupTextError = config.popupTextError;
//     this._closePopupButtons = document.querySelectorAll(config.buttonClosePopup);
//     this._buttonSubmit = form.querySelector(config.buttonSubmin);
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
//     const buttonSubmit = form.querySelector(config.buttonSubmin);
//     //проверяем валидность формы и делаем кнопки artive or disabled
//     const isValid = form.checkValidity();
//     if (isValid) {
//       buttonSubmit.removeAttribute('disabled');
//       buttonSubmit.classList.remove(this._configButtonDisabled);
//     } else {
//       buttonSubmit.setAttribute('disabled', true);
//       buttonSubmit.classList.add(this._configButtonDisabled);
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
//     const buttonSubmit = this._popup.querySelector(this._buttonSubmit);
//     buttonSubmit.setAttribute('disabled', true);
//     buttonSubmit.classList.add(this._configButtonDisabled);
//   }

//   //функция для активного вида кнопки
//   _activateSubmitButton() {
//     const buttonSubmit = this._popup.querySelector(this._buttonSubmit);
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







