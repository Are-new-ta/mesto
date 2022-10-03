import './index.css';
import {
  formProfile,
  formCard,
  formAvatar,
  template,
  popupInputName,
  popupInputJob,
  avatarProfile,
  buttonOpenPopupProfile,
  buttonAddCard
} from '../utils/constants.js';
import { selectors } from '../utils/selectors.js';
import { configForm } from '../utils/config.js';
// import { initialCards } from '../utils/places.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

let serverToken;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-50/',
  headers: {
    authorization: 'eb1591ce-bee2-43ed-8aa3-111b6ba7c5d9',
    'content-type': 'application/json'
  }
});

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

function generateCard(item) {
  const card = new Card(item, template, selectors, serverToken, handleCardClick, {
    openPopupDeleteCard: (id, card) => {
      popupDeleteCard.open();
      popupDeleteCard.getInfoCard(id, card);
    }
  }, {
    handleRevomeLike: (id, likeButton, likeCounter, buttonAcviveLike) => {
      api.deleteCard(id)
        .then((data) => {
          likeButton.classList.remove(buttonAcviveLike);
          likeCounter.textContent = data.likes.length;
        })
        .cathc((error) => {
          console.log(`Ошибка: ${error}`);
        });
    }
  }, {
    handleAddLike: (id, likeButton, likeCounter, buttonAcviveLike) => {
      api.deleteLikeCard(id)
        .then((data) => {
          likeButton.classList.add(buttonAcviveLike);
          likeCounter.textContent = data.likes.length;
        })
        .cathc((error) => {
          console.log(`Ошибка: ${error}`);
        });
    }
  });
  return card.createCard();
}

const userInfo = new UserInfo(selectors.titleProfile, selectors.subtitleProfile);

const cards = new Section({
  renderer: item => {
    cards.addItem(generateCard(item));
  }
},
  selectors.cardsSpace);
cards.renderItems();

Promise.all([api.getUserProfile(), api.getInitialCards()])
  .then(([user, card]) => {
    userInfo.setUserInfo({ name: user.name, job: user.job, avatar: user.avatar });
    serverToken = user._id;
    cards.renderItems(card);
  })
  .cathc((error) => {
    console.log(`Ошибка: ${error}`);
  });


const popupDeleteCard = new PopupWithConfirmation(selectors.popupDeleteCard, selectors, {
  handleFormSubmit: (cardId, card) => {
    api.popupDeleteCard(cardId)
      .then(() => {
        card.remove();
        card = null;
        popupDeleteCard.close();
      })
      .cathc((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }
})

popupDeleteCard.setEventListeners();

const popupImage = new PopupWithImage(selectors.popupImage, selectors);
popupImage.setEventListeners();

const popupProfileForm = new PopupWithForm(selectors.popupProfile, selectors, {
  handleFormSubmit: (data) => {
    popupProfileForm.renderLoading(true);
    const { 'popupProfileName': name, 'popupJob': job } = data;
    api.changeUserProfile(name, job)
      .then((user) => {
        userInfo.setUserInfo({ name: user.name, job: user.job, avatar: user.avatar });
        popupProfileForm.close();
      })
      .cathc((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        popupProfileForm.renderLoading(false);
      });
  }
});

popupProfileForm.setEventListeners();

//popupCard
const popupCardForm = new PopupWithForm(selectors.popupCard, selectors, {
  handleFormSubmit: (data) => {
    popupCardForm.renderLoading(true);
    const { 'popupNameCard': name, 'popupLink': link } = data;
    api.addNewCard(name, link)
      .then((newCard) => {
        cards.addItem(generateCard(newCard));
        popupCardForm.close();
      })
      .cathc((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        popupCardForm.renderLoading(false);
      });
  }
});

popupCardForm.setEventListeners();

//popupAvatar
const popupAvatarForm = new PopupWithForm(selectors.popupAvatar, selectors, {
  handleFormSubmit: (data) => {
    popupAvatarForm.renderLoading(true);
    const { 'input_data_avatar': avatar } = data;
    api.changeAvatar(avatar)
      .then((user) => {
        userInfo.setUserInfo({ name: user.name, job: user.job, avatar: user.avatar });
        popupAvatarForm.close();
      })
      .then(() => {
        popupAvatarForm.close();
      })
      .cathc((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        popupAvatarForm.renderLoading(false);
      });
  }
});

popupAvatarForm.setEventListeners();


const ValidFormProfile = new FormValidator(formProfile, configForm);
ValidFormProfile.enableValidation();
const ValidFormCard = new FormValidator(formCard, configForm);
ValidFormCard.enableValidation();
const ValidFormAvatar = new FormValidator(formAvatar, configForm);
avatarValidation.enableValidation();

//в открытом попапе видно присваивание
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

avatarProfile.addEventListener('click', () => {
  popupAvatarForm.open();
  ValidFormAvatar.resetValidation();
});

