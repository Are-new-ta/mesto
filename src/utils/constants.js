import { selectors } from './selectors.js';

const buttonOpenPopupProfile = document.querySelector(selectors.editButtonProfile);
const popupProfile = document.querySelector(selectors.popupProfile);
const configInputPopupName = popupProfile.querySelector(selectors.configInputPopupName);
const configInputPopupJob = popupProfile.querySelector(selectors.configInputPopupJob);
const avatarProfile = document.querySelector(selectors.avatarProfilePc);
const buttonAddCard = document.querySelector(selectors.addCardButton);
const template = document.querySelector(selectors.templateCard).content;

//config
const formProfile = document.querySelector('.popup__form[name = "popupProfileForm"]');
const formCard = document.querySelector('.popup__form[name = "popupCardForm"]');
const formAvatar = document.querySelector('.popup__form[name = "popupAvatarForm"]');

export { formProfile, configInputPopupName, configInputPopupJob, formCard, formAvatar, template, buttonOpenPopupProfile, avatarProfile, buttonAddCard };