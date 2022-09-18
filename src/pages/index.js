<<<<<<< HEAD
import './index.css';
=======
// import './index.css';
>>>>>>> 68565beb85df5bc1b02026d896ebebdf5592302b
import {
  formProfile,
  formCard,
  popupProfile,
  popupCard,
  template,
  popupInputName,
  popupInputJob,
  buttonOpenPopupProfile,
  buttonAddCard
} from '../utils/constants.js';
import { selector } from '../utils/selector.js';
import { configForm } from '../utils/config.js';
import { initialCards } from '../utils/places.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

const popupImage = new PopupWithImage(selector.popupImage, selector);
popupImage.setEventListeners();

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

function generateCard(item) {
  const card = new Card(item, template, selector, handleCardClick);
  return card.createCard();
}

const cards = new Section({
  items: initialCards,
  renderer: item => {
    cards.addItem(generateCard(item));
  }
},
  selector.cardsSpace);
cards.renderItems();

const userInfo = new UserInfo(selector.titleProfile, selector.subtitleProfile);

<<<<<<< HEAD

=======
//профиль,присваивание работающая версия
>>>>>>> 68565beb85df5bc1b02026d896ebebdf5592302b
const popupProfileForm = new PopupWithForm(selector.popupProfile, selector, {
  handleFormSubmit: (data) => {
    const { 'popupProfileName': name, 'popupJob': job } = data;
    userInfo.setUserInfo(name, job);
    popupProfileForm.close();
  }
});

<<<<<<< HEAD

=======
>>>>>>> 68565beb85df5bc1b02026d896ebebdf5592302b
popupProfileForm.setEventListeners();

const popupCardForm = new PopupWithForm(selector.popupCard, selector, {
  handleFormSubmit: (data) => {
    const newCard = {
      name: data.name,
      link: data.link
    };
    cards.addItem(generateCard(newCard));
    popupCardForm.close();
  }
});

popupCardForm.setEventListeners();

const ValidFormProfile = new FormValidator(formProfile, configForm, popupProfile);
ValidFormProfile.enableValidation();
const ValidFormCard = new FormValidator(formCard, configForm, popupCard);
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