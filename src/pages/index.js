import './index.css';
import {
  formProfile,
  formCard,
  formAvatar,
  configInputPopupName,
  configInputPopupJob,
  avatarProfile,
  buttonOpenPopupProfile,
  buttonAddCard
} from '../utils/constants.js';
import { selectors } from '../utils/selectors.js';
import { configForm } from '../utils/config.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

let userId;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-50/',
  headers: {
    authorization: 'eb1591ce-bee2-43ed-8aa3-111b6ba7c5d9',
    'content-type': 'application/json'
  }
});

Promise.all([api.getUserProfile(), api.getInitialCards()])
  .then(([user, card]) => {
    // userInfo.setUserInfo({ name: user.name, about: user.about, avatar: user.avatar });
    userInfo.setUserInfo(user);
    userId = user._id;
    console.log('SuserId', userId);
    cards.renderItems(card);
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });


function handleCardClick(name, link) {
  popupImage.open(name, link);
}


function generateCard(item) {
  const card = new Card({
    item,
    selectors,
    userId,
    handleCardClick,
    openPopupDeleteCard: (id, card) => {
      popupDeleteCard.open();
      popupDeleteCard.setInfoCard(id, card);
    },
    handleAddLike: (id, likeButton) => {
      api.addLikeCard(id)
        .then((data) => {
          likeButton.classList.add(selectors.likeBtnActive);
          card.setCounter(data.likes);
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        });
    },
    handleRevomeLike: (id, likeButton) => {
      api.deleteLikeCard(id)
        .then((data) => {
          likeButton.classList.remove(selectors.likeBtnActive);
          card.setCounter(data.likes);
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        });
    }
  });
  return card.createCard();
}

const userInfo = new UserInfo(selectors.titleProfile, selectors.subtitleProfile, selectors.avatarProfilePc);

const cards = new Section({
  renderer: item => {
    cards.addItem(generateCard(item));
  }
},
  selectors.cardsSpace);


const popupImage = new PopupWithImage(selectors.popupImage, selectors);
popupImage.setEventListeners();


//popupProfile
const popupProfileForm = new PopupWithForm(selectors.popupProfile, selectors, {
  handleFormSubmit: (data) => {
    popupProfileForm.renderLoading(true);
    const { 'popupProfileName': name, 'popupJob': about } = data;
    api.changeUserProfile(name, about)
      .then((user) => {
        userInfo.setUserInfo({ name: user.name, about: user.about, avatar: user.avatar });
        popupProfileForm.close();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        popupProfileForm.renderLoading(false);
      });
  }
});

popupProfileForm.setEventListeners();

//popupCardForm
const popupCardForm = new PopupWithForm(selectors.popupCard, selectors, {
  handleFormSubmit: (data) => {
    popupCardForm.renderLoading(true);
    const { 'popupNameCard': name, 'popupLink': link } = data;
    api.addNewCard(name, link)
      .then((newCard) => {
        cards.addItem(generateCard(newCard));
        popupCardForm.close();
      })
      .catch((error) => {
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
        userInfo.setUserInfo(user);
        popupAvatarForm.close();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        popupAvatarForm.renderLoading(false);
      });
  }
});
popupAvatarForm.setEventListeners();

//popupDelete
const popupDeleteCard = new PopupWithConfirmation(selectors.popupDeleteCard, selectors, {
  handleFormSubmit: (id, card) => {
    api.deleteCard(id)
      .then(() => {

        card.removeCard();

        //пояснение, что из себя представляет removeCard()
        // removeCard() {
        //   return this._card.remove();
        // }

        card = null;
        popupDeleteCard.close();
      })
    // .catch((error) => {
    //   console.log(`Ошибка: ${error}`);
    // });
  }
})

popupDeleteCard.setEventListeners();

const validFormProfile = new FormValidator(formProfile, configForm);
validFormProfile.enableValidation();
const ValidFormCard = new FormValidator(formCard, configForm);
ValidFormCard.enableValidation();
const ValidFormAvatar = new FormValidator(formAvatar, configForm);
ValidFormAvatar.enableValidation();

//в открытом попапе видно присваивание
buttonOpenPopupProfile.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  configInputPopupName.value = name;
  configInputPopupJob.value = about;
  validFormProfile.resetValidation();
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

