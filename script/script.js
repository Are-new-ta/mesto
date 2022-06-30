//кнопки открытия
const openPopupButton = document.querySelector('.profile__edit-button');
const editProfileTitle = document.querySelector('.profile__title');
const editProfileSubtitle = document.querySelector('.profile__subtitle');
const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__button-close');
const popupButtonSubmit = popup.querySelector('.popup__button-save');
const popupName = popup.querySelector('.popup__name');
const popupJob = popup.querySelector('.popup__job');
const formElement = popup.querySelector('.popup__form-container');


//функция открытия с возможностью записывать новые данные в форму
function openPopup() {
  popup.classList.add('popup_opened');
  popupName.value = editProfileTitle.textContent;
  popupJob.value = editProfileSubtitle.textContent;
}

//функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}


// функция сохранения
function formSubmitHandler(evt) {
  evt.preventDefault();
  editProfileTitle.textContent = popupName.value;
  editProfileSubtitle.textContent = popupJob.value;
  closePopup();
}


openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);












