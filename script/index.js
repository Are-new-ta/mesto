import { initialCards } from './places.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const selector = {
  editButtonProfile: '.profile__edit-button',
  titleProfile: '.profile__title',
  subtitleProfile: '.profile__subtitle',
  addCardButton: '.profile__add-button',
  popup: '.popup',
  popupProfile: '.popup_data_profile',
  popupOpen: '.popup_opened',
  closePopupButton: '.popup__button-close',
  popupInput: '.popup__input',
  popupInputName: '.popup__input_data_name',
  popupInputJob: '.popup__input_data_job',
  popupContainer: '.popup__container',
  buttonSubmit: '.popup__button-save',
  buttonDisabled: '.popup__button-save_disabled',
  popupTextError: '.popup__error',
  popupCard: '.popup_data_card',
  popupFormCard: '.popup__form_data_card',
  closePopupCardButton: '.popup__button-close_data_card',
  popupCardInputName: '.popup__input_data_name-card',
  popupCardInputLink: '.popup__input_data_link',
  templateCard: '.template-card',
  card: '.card',
  cardsSpace: '.cards',
  likeButton: '.card__like',
  likeButtonActive: '.card__like_active',
  deleteButton: '.card__delete',
  imageCard: '.card__image',
  imageCaption: '.popup__caption',
  cardTitle: '.card__title',
  popupImage: '.popup_data_image',
  closePopupImagedButton: '.popup__button-close_data_image',
  imagePopup: '.popup__image'
}

//variable
const openPopupProfileBtn = document.querySelector(selector.editButtonProfile);
const editProfileTitle = document.querySelector(selector.titleProfile);
const editProfileSubtitle = document.querySelector(selector.subtitleProfile);
const popupProfile = document.querySelector(selector.popupProfile);
const closePopupProfileButton = popupProfile.querySelector(selector.closePopupButton);
const popupInputName = popupProfile.querySelector(selector.popupInputName);
const popupInputJob = popupProfile.querySelector(selector.popupInputJob);
const formProfileElement = popupProfile.querySelector(selector.popupContainer);
const popupCard = document.querySelector(selector.popupCard);
const addCardButton = document.querySelector(selector.addCardButton);
const popupCardInputName = popupCard.querySelector(selector.popupCardInputName);
const popupCardInputLink = popupCard.querySelector(selector.popupCardInputLink);
const popupFormCard = popupCard.querySelector(selector.popupFormCard);
const closePopupCardButton = popupCard.querySelector(selector.closePopupCardButton);
const cards = document.querySelector(selector.cardsSpace);
const template = document.querySelector(selector.templateCard).content;
const popupImage = document.querySelector('.popup_data_image');
const imagePopup = document.querySelector(selector.imagePopup);
const imageCaption = document.querySelector(selector.imageCaption);
//config
const formProfile = '.popup__form[name = "popupProfileForm"]';

const configFormProfile = {
  buttonSubmin: '.popup__button-save',
  buttonDisabled: '.popup__button-save_disabled',
  inputBorderError: '.popup__input_data_error'
}

//config
const formCard = '.popup__form[name = "popupCardForm"]';

const configFormCard = {
  buttonSubmin: '.popup__button-save',
  buttonDisabled: '.popup__button-save_disabled',
  inputBorderError: '.popup__input_data_error'
}

//функция открытия, если попап открыт, добавляем слушателя клавиатуры
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);
}

//функция закрытия, если попап закрыт, то удаляем слушателя клавиатуры
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('click', closePopupOverlay);
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

//возможно не нужна
function openPopupProfile() {
  popupInputName.value = editProfileTitle.textContent;
  popupInputJob.value = editProfileSubtitle.textContent;
  openPopup(popupProfile);
}

//функция для связи валью интутов и текста
function setInputProfileValue() {
  popupInputName.value = editProfileTitle.textContent;
  popupInputJob.value = editProfileSubtitle.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  editProfileTitle.textContent = popupInputName.value;
  editProfileSubtitle.textContent = popupInputJob.value;
  closePopup(popupProfile);
}

//функция открытия попап-имейдж
function openPopupImage(link, name) {
  imagePopup.src = link;
  imagePopup.alt = name;
  imageCaption.textContent = name;
  openPopup(popupImage);
}

//функция неактивной кнопки отправки (disabled button)
function disableSubmitButton(popup) {
  const buttonSubmit = popup.querySelector(selector.buttonSubmit);
  buttonSubmit.setAttribute('disabled', true);
  buttonSubmit.classList.add('popup__button-save_disabled');
}

//функция для активного вида кнопки 
function activateSubmitButton(popup) {
  const buttonSubmit = popup.querySelector(selector.buttonSubmit);
  buttonSubmit.removeAttribute('disabled');
  buttonSubmit.classList.remove('popup__button-save_disabled');
}

//функция, которая удаляет показ ошибок инпутов
function resetErrorInput(popup) {
  const inputArr = Array.from(popup.querySelector(selector.popupInput));
  inputArr.forEach((input) => input.classList.remove('popup__input_data_error'));
}

//функция, которая удаляет показ ошибок span
function resetErrorSpan(popup) {
  const spanArr = Array.from(popup.querySelector(selector.popupTextError));
  spanArr.forEach((span) => span.textContent = '');
}

//форма для отправки попапа-кард
function handlePopupCardFormSubmit(evt) {
  evt.preventDefault();

  const newCards = [{
    name: popupCardInputName.value,
    link: popupCardInputLink.value,
  },
  ];

  newCards.forEach((item) => {
    const card = new Card(item, openPopupImage, template);
    const cardNew = card.createCard();
    cards.prepend(cardNew);
  });

  //очистка значений формы после сабмита
  evt.target.reset();

  disableSubmitButton(evt.target);

  closePopup(popupCard);
}

initialCards.forEach((item) => {
  const card = new Card(item, openPopupImage, template);
  const cardNew = card.createCard();
  cards.append(cardNew);
});

//Listenter
openPopupProfileBtn.addEventListener('click', openPopupProfile);
closePopupProfileButton.addEventListener('click', () => closePopup(popupProfile));
formProfileElement.addEventListener('submit', handleProfileFormSubmit);
popupFormCard.addEventListener("submit", handlePopupCardFormSubmit);
addCardButton.addEventListener('click', () => openPopup(popupCard));
closePopupCardButton.addEventListener('click', () => closePopup(popupCard));

openPopupProfileBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  setInputProfileValue();
  resetErrorInput(popupProfile);
  resetErrorSpan(popupProfile);
  activateSubmitButton(popupProfile);
});

// для всех селекторов кнопки закрытия срабатывает закрытие попапа через оверлей и кнопку
const closePopupButtons = document.querySelectorAll(selector.closePopupButton);
closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => { closePopup(popup); });
  popup.addEventListener('click', (evt) => { closePopupOverlay(evt); });
});

const ValidFormProfile = new FormValidator(formProfile, configFormProfile);
ValidFormProfile.enableValidation();

const ValidFormCard = new FormValidator(formCard, configFormCard);
ValidFormCard.enableValidation();

export { openPopup, selector };



