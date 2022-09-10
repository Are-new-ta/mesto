import { selector } from './selector.js';

const buttonOpenPopupProfile = document.querySelector(selector.editButtonProfile);
const popupProfile = document.querySelector(selector.popupProfile);
const popupInputName = popupProfile.querySelector(selector.popupInputName);
const popupInputJob = popupProfile.querySelector(selector.popupInputJob);
const popupCard = document.querySelector(selector.popupCard);
const buttonAddCard = document.querySelector(selector.addCardButton);//была опечатка buttonAddCar
const popupFormCard = popupCard.querySelector(selector.popupFormCard);
const template = document.querySelector(selector.templateCard).content;
const popupImage = document.querySelector('.popup_data_image');
const imagePopup = document.querySelector(selector.imagePopup);
const imageCaption = document.querySelector(selector.imageCaption);

//config
const formProfile = '.popup__form[name = "popupProfileForm"]';
const formCard = '.popup__form[name = "popupCardForm"]';

export { popupProfile, popupCard, formProfile, popupInputName, popupInputJob, formCard, template, buttonOpenPopupProfile, buttonAddCard };
