import './index.css';
import {
  formProfile,
  formCard,
  template,
  popupInputName,
  popupInputJob,
  buttonOpenPopupProfile,
  buttonAddCard
} from '../utils/constants.js';
import { selectors } from '../utils/selectors.js';
import { configForm } from '../utils/config.js';
import { initialCards } from '../utils/places.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

const popupImage = new PopupWithImage(selectors.popupImage, selectors);
popupImage.setEventListeners();

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

function generateCard(item) {
  const card = new Card(item, template, selectors, handleCardClick);
  return card.createCard();
}

const cards = new Section({
  items: initialCards,
  renderer: item => {
    cards.addItem(generateCard(item));
  }
},
  selectors.cardsSpace);
cards.renderItems();

const userInfo = new UserInfo(selectors.titleProfile, selectors.subtitleProfile);

const popupProfileForm = new PopupWithForm(selectors.popupProfile, selectors, {
  handleFormSubmit: (data) => {
    const { 'popupProfileName': name, 'popupJob': job } = data;
    userInfo.setUserInfo(name, job);
    popupProfileForm.close();
  }
});

popupProfileForm.setEventListeners();

const popupCardForm = new PopupWithForm(selectors.popupCard, selectors, {
  handleFormSubmit: (data) => {
    const newCard = {
      name: data.popupNameCard,
      link: data.popupLink
    };
    cards.addItem(generateCard(newCard));
    popupCardForm.close();
  }
});

popupCardForm.setEventListeners();

const ValidFormProfile = new FormValidator(formProfile, configForm);
ValidFormProfile.enableValidation();
const ValidFormCard = new FormValidator(formCard, configForm);
ValidFormCard.enableValidation();

//в открытом попапе видно присваивание,но не происходит сохранение
buttonOpenPopupProfile.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  popupInputName.value = name;
  popupInputJob.value = job;
  ValidFormProfile.resetValidation();
  popupProfileForm.open();
});

buttonAddCard.addEventListener('click', () => {
  popupCardForm.open();
  ValidFormCard.resetValidation();
});