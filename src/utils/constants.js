import { selectors } from './selectors.js';

const buttonOpenPopupProfile = document.querySelector(selectors.editButtonProfile);
const popupProfile = document.querySelector(selectors.popupProfile);
const popupInputName = popupProfile.querySelector(selectors.popupInputName);
const popupInputJob = popupProfile.querySelector(selectors.popupInputJob);
const popupCard = document.querySelector(selectors.popupCard);
const buttonAddCard = document.querySelector(selectors.addCardButton);//была опечатка buttonAddCar
const template = document.querySelector(selectors.templateCard).content;
// const popupFormCard = popupCard.querySelector(selectors.popupFormCard);
// const popupImage = document.querySelector('.popup_data_image');
// const imagePopup = document.querySelector(selectors.imagePopup);
// const imageCaption = document.querySelector(selectors.imageCaption);

//config
const formProfile = '.popup__form[name = "popupProfileForm"]';
const formCard = '.popup__form[name = "popupCardForm"]';

export { formProfile, popupInputName, popupInputJob, formCard, template, buttonOpenPopupProfile, buttonAddCard };
