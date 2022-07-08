//переменные
const openPopupButton = document.querySelector('.profile__edit-button');
const editProfileTitle = document.querySelector('.profile__title');
const editProfileSubtitle = document.querySelector('.profile__subtitle');
const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__button-close');
const popupInputName = popup.querySelector('.popup__input_data_name');
const popupInputJob = popup.querySelector('.popup__input_data_job');
const formElement = popup.querySelector('.popup__container');

//функция открытия с возможностью записывать новые данные в форму
function openPopup() {
  popupInputName.value = editProfileTitle.textContent;
  popupInputJob.value = editProfileSubtitle.textContent;
  popup.classList.add('popup_opened');
}

//функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}

// функция сохранения
function formSubmitHandler(evt) {
  evt.preventDefault();
  editProfileTitle.textContent = popupInputName.value;
  editProfileSubtitle.textContent = popupInputJob.value;
  closePopup();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);












