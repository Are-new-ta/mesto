import { initialCards } from './places.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { selector } from './selector.js';
import { configForm } from './config.js';

//variable
const buttonOpenPopupProfile = document.querySelector(selector.editButtonProfile);
const buttonEditTitleProfile = document.querySelector(selector.titleProfile);
const buttonEditSubtitleProfile = document.querySelector(selector.subtitleProfile);
const popupProfile = document.querySelector(selector.popupProfile);
const buttonClosePopupProfile = popupProfile.querySelector(selector.closePopupButton);
const popupInputName = popupProfile.querySelector(selector.popupInputName);
const popupInputJob = popupProfile.querySelector(selector.popupInputJob);
const formProfileElement = popupProfile.querySelector(selector.popupContainer);
const popupCard = document.querySelector(selector.popupCard);
const buttonAddCar = document.querySelector(selector.addCardButton);
const popupCardInputName = popupCard.querySelector(selector.popupCardInputName);
const popupCardInputLink = popupCard.querySelector(selector.popupCardInputLink);
const popupFormCard = popupCard.querySelector(selector.popupFormCard);
const buttonClosePopupCard = popupCard.querySelector(selector.closePopupCardButton);
const cards = document.querySelector(selector.cardsSpace);
const template = document.querySelector(selector.templateCard).content;
const popupImage = document.querySelector('.popup_data_image');
const imagePopup = document.querySelector(selector.imagePopup);
const imageCaption = document.querySelector(selector.imageCaption);
//config
const formProfile = '.popup__form[name = "popupProfileForm"]';
const formCard = '.popup__form[name = "popupCardForm"]';

//функция открытия, если попап открыт, добавляем слушателя клавиатуры
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}
//функция закрытия, если попап закрыт, то удаляем слушателя клавиатуры
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}
//новая функция для закрытия попапа при нажатии на оверлей
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popup = document.querySelector(selector.popupOpen);
    closePopup(popup);
  }
}
/*функция закрытия при нажатии на Esc: если значение нажатой кнопки Esc
то находим переменную с селектором открытого попапа и закрываем его*/
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector(selector.popupOpen);
    closePopup(popup);
  }
}

function openPopupProfile() {
  popupInputName.value = buttonEditTitleProfile.textContent;
  popupInputJob.value = buttonEditSubtitleProfile.textContent;

  // ValidFormProfile.resetValidation();
  openPopup(popupProfile);
}
//функция для связи валью интутов и текста
function setInputProfileValue() {
  popupInputName.value = buttonEditTitleProfile.textContent;
  popupInputJob.value = buttonEditSubtitleProfile.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  buttonEditTitleProfile.textContent = popupInputName.value;
  buttonEditSubtitleProfile.textContent = popupInputJob.value;
  closePopup(popupProfile);
}
//функция открытия попап-имейдж
function openPopupImage(link, name) {
  imagePopup.src = link;
  imagePopup.alt = name;
  imageCaption.textContent = name;
  openPopup(popupImage);
}

function generateCard(item) {
  const card = new Card(item, openPopupImage, template);
  return card.createCard();
}
//форма для отправки попапа-кард рабочая
function handlePopupCardFormSubmit(evt) {
  evt.preventDefault();
  const newCards = {
    name: popupCardInputName.value,
    link: popupCardInputLink.value,
  };
  cards.prepend(generateCard(newCards));
  closePopup(popupCard);
  //очистка значений формы после сабмита
  evt.target.reset();
}

initialCards.forEach((item) => {
  cards.append(generateCard(item));
});


const ValidFormProfile = new FormValidator(formProfile, configForm, popupProfile);
ValidFormProfile.enableValidation();
const ValidFormCard = new FormValidator(formCard, configForm, popupCard);
ValidFormCard.enableValidation();

//Listenter
buttonClosePopupProfile.addEventListener('click', () => closePopup(popupProfile));
formProfileElement.addEventListener('submit', handleProfileFormSubmit);
popupFormCard.addEventListener("submit", handlePopupCardFormSubmit);
buttonOpenPopupProfile.addEventListener('click', () => {
  openPopupProfile();
  ValidFormProfile.resetValidation();
});

buttonAddCar.addEventListener('click', () => {
  openPopup(popupCard);
  ValidFormCard.resetValidation();
});

buttonClosePopupCard.addEventListener('click', () => {
  closePopup(popupCard);
  popupFormCard.reset();
});

buttonOpenPopupProfile.addEventListener('click', () => {
  openPopup(popupProfile);
  setInputProfileValue();
});
// для всех селекторов кнопки закрытия срабатывает закрытие попапа через оверлей и кнопку
const closePopupButtons = document.querySelectorAll(selector.closePopupButton);
closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => { closePopup(popup); });
  popup.addEventListener('click', (evt) => { closePopupOverlay(evt); });
});

