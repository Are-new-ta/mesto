class FormValidator {
  constructor(form, config) {
    this._form = document.querySelector(form);
    this._config = config;
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
    const buttonSubmit = form.querySelector(config.buttonSubmin);
    //проверяем валидность формы и делаем кнопки artive or disabled
    const isValid = form.checkValidity();
    if (isValid) {
      buttonSubmit.removeAttribute('disabled');
      buttonSubmit.classList.remove('popup__button-save_disabled');
    } else {
      buttonSubmit.setAttribute('disabled', true);
      buttonSubmit.classList.add('popup__button-save_disabled');
    }
  }

  //метод для проверки инпутов на валидность
  _setInputState(input, config) {
    const isValid = input.checkValidity();
    if (isValid) {
      input.classList.remove('popup__input_data_error');
    } else {
      input.classList.add('popup__input_data_error');
    }
  }

  // Записываем текст ошибок в специальные контейнеры под каждым полем.
  _setFieldError(input) {
    const span = input.nextElementSibling;
    span.textContent = input.validationMessage;
  }
}

export { FormValidator };