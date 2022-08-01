const formProfile = {
  form: '.popup__form[name = "popupProfileForm"]',
  buttonSubmin: '.popup__button-save',
  buttonDisabled: '.popup__button-save_disabled',
  popupTextError: '.popup__error',
  inputBorderError: '.popup__input_data_error'
}

const formCard = {
  form: '.popup__form[name = "popupCardForm"]',
  buttonSubmin: '.popup__button-save',
  buttonDisabled: '.popup__button-save_disabled',
  popupTextError: '.popup__error',
  inputBorderError: '.popup__input_data_error'
}

function enableValidation(config) {
  const form = document.querySelector(config.form);
  //form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('input', (evt) => handleFormInput(evt, config));
}

//функция для вывода ошибок инпутов 
function handleFormInput(evt, config) {
  const input = evt.target;
  const form = evt.currentTarget;
  setInputState(input, config);
  setFieldError(input);
  handleFormSubmit(form, config);
}

//Функция-коллбэк, обрабатывающая событие отправки формы.
// Включаем или выключаем кнопку отправки формы.
function handleFormSubmit(form, config) {
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

//функция для проверки инпутов на валидность
function setInputState(input, config) {
  const isValid = input.checkValidity();
  if (isValid) {
    input.classList.remove('popup__input_data_error');
  } else {
    input.classList.add('popup__input_data_error');
  }
}

// Записываем текст ошибок в специальные контейнеры под каждым полем.
function setFieldError(input) {
  const span = input.nextElementSibling;
  span.textContent = input.validationMessage;
}

enableValidation(formCard);
enableValidation(formProfile);


/*//Функция-коллбэк, обрабатывающая событие отправки формы.
// Включаем или выключаем кнопку отправки формы.
function handleFormSubmit(evt) {
  evt.preventDefault();
  // Форма, на котором было *установлено* событие,
  //поэтому используем `event.currentTarget`.
  const form = evt.currentTarget;
  const buttonSubmit = form.querySelector(config.buttonSubmin);
  //проверяем валидность формы и делаем кнопки artive or disabled
  const isValid = form.checkValidity();
  if (isValid) {
    buttonSubmit.removeAttribute('disabled');
    buttonSubmit.classList.remove(config.buttonDisabled);
  } else {
    buttonSubmit.setAttribute('disabled');
    buttonSubmit.classList.add(config.buttonDisabled);
  }
}*/