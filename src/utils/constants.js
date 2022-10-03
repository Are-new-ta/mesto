import { selectors } from './selectors.js';

const buttonOpenPopupProfile = document.querySelector(selectors.editButtonProfile);
const popupProfile = document.querySelector(selectors.popupProfile);
const popupInputName = popupProfile.querySelector(selectors.popupInputName);
const popupInputJob = popupProfile.querySelector(selectors.popupInputJob);
const avatarProfile = document.querySelector(selectors.avatarProfile);
const buttonAddCard = document.querySelector(selectors.addCardButton);//была опечатка buttonAddCar
const template = document.querySelector(selectors.templateCard).content;

//config
const formProfile = '.popup__form[name = "popupProfileForm"]';
const formCard = '.popup__form[name = "popupCardForm"]';
const formAvatar = '.popup__form[name = "popupAvatarForm"]';

export { formProfile, popupInputName, popupInputJob, formCard, formAvatar, template, buttonOpenPopupProfile, avatarProfile, buttonAddCard };
