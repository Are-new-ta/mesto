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
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
// import { data } from 'autoprefixer';

let serverToken;



const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-50/',
  headers: {
    authorization: 'eb1591ce-bee2-43ed-8aa3-111b6ba7c5d9',
    'content-type': 'application/json'
  }
});

Promise.all([api.getUserProfile(), api.getInitialCards()])
  .then(([user, card]) => {
    userInfo.setUserInfo({ name: user.name, about: user.about, avatar: user.avatar });
    serverToken = user._id;
    cards.renderItems(card);
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });


function handleCardClick(name, link) {
  popupImage.open(name, link);
}


function generateCard(item) {
  const card = new Card(item, template, selectors, serverToken, handleCardClick, {
    //закомментировала на время проверки багов
    openPopupDeleteCard: (id, card) => {
      popupDeleteCard.open();
      popupDeleteCard.getInfoCard(id, card);
    }
  }, {
    handleRevomeLike: (id, likeButton, likeCounter, buttonAcviveLike) => {
      api.deleteLikeCard(id)
        .then((data) => {
          likeCounter.textContent = data.likes.length;
          likeButton.classList.remove(buttonAcviveLike);

        })
      //закомментрила, чтобы добраться до сути ошибки, так котд с кэтч верный и нужно будет раскомментить
      // .catch((error) => {
      //   console.log(`Ошибка: ${error}`);
      // });
    }
  }, {
    handleAddLike: (id, likeButton, likeCounter, buttonAcviveLike) => {
      api.addLikeCard(id)
        .then((data) => {
          likeButton.classList.add(buttonAcviveLike);
          likeCounter.textContent = data.likes.length;
        })
      //закомментрила, чтобы добраться до сути ошибки, так котд с кэтч верный и нужно будет раскомментить
      // .catch((error) => {
      //   console.log(`Ошибка: ${error}`);
      // });
    }
  });
  return card.createCard();
}


//попытка менять статус лайков через апи api.changeLikeStatus
// function generateCard(item) {
//   const card = new Card(item, template, selectors, serverToken, handleCardClick, {
//     //закомментировала на время проверки багов
//     openPopupDeleteCard: (id, card) => {
//       popupDeleteCard.open();
//       popupDeleteCard.getInfoCard(id, card);
//     }
//   }, () => {
//     api.changeLikeStatus(card.id(), card.isLiked())
//       .then((data) => {
//         card.setLikesCounter(data.likes)
//       })
//     //закомментрила, чтобы добраться до сути ошибки, так котд с кэтч верный и нужно будет раскомментить
//     // .catch((error) => {
//     //   console.log(`Ошибка: ${error}`);
//     // });
//   });
//   return card.createCard();
// }


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
        userId = user._id;//
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


//изначальная версия, в той, что выше заменила name link на имена из html
const popupCardForm = new PopupWithForm(selectors.popupCard, selectors, {
  handleFormSubmit: (data) => {
    popupCardForm.renderLoading(true);
    const { 'popupNameCard': name, 'popupLink': link } = data;
    api.addNewCard(name, link)
      .then((newCard) => {
        cards.addItem(generateCard(newCard));
        popupCardForm.close();
      })
      //потом раскомментить
      // .catch((error) => {
      //   console.log(`Ошибка: ${error}`);
      // })
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
        userInfo.setUserInfo({ name: user.name, about: user.about, avatar: user.avatar });
        popupAvatarForm.close();
      })
      .then(() => {
        popupAvatarForm.close();
      })
      //потом раскомментить
      // .catch((error) => {
      //   console.log(`Ошибка: ${error}`);
      // })
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
        card.remove();
        card = null;
        popupDeleteCard.close();
      })
    //потом раскомментить
    // .catch((error) => {
    //   console.log(`Ошибка: ${error}`);
    // });
  }
})

popupDeleteCard.setEventListeners();

const ValidFormProfile = new FormValidator(formProfile, configForm);
ValidFormProfile.enableValidation();
const ValidFormCard = new FormValidator(formCard, configForm);
ValidFormCard.enableValidation();
const ValidFormAvatar = new FormValidator(formAvatar, configForm);
ValidFormAvatar.enableValidation();

//в открытом попапе видно присваивание
buttonOpenPopupProfile.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  popupInputName.value = name;
  popupInputJob.value = about;
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












//16,11,2022 пока самый последний

// import './index.css';
// import {
//   formProfile,
//   formCard,
//   formAvatar,
//   template,
//   popupInputName,
//   popupInputJob,
//   avatarProfile,
//   buttonOpenPopupProfile,
//   buttonAddCard
// } from '../utils/constants.js';
// import { selectors } from '../utils/selectors.js';
// import { configForm } from '../utils/config.js';
// import Card from '../components/Card.js';
// import FormValidator from '../components/FormValidator.js';
// import Section from '../components/Section.js';
// import PopupWithForm from '../components/PopupWithForm.js';
// import UserInfo from '../components/UserInfo.js';
// import PopupWithImage from '../components/PopupWithImage.js';
// import Api from '../components/Api.js';
// import PopupWithConfirmation from '../components/PopupWithConfirmation';
// // import { data } from 'autoprefixer';

// let serverToken;



// const api = new Api({
//   url: 'https://mesto.nomoreparties.co/v1/cohort-50/',
//   headers: {
//     authorization: 'eb1591ce-bee2-43ed-8aa3-111b6ba7c5d9',
//     'content-type': 'application/json'
//   }
// });

// Promise.all([api.getUserProfile(), api.getInitialCards()])
//   .then(([user, card]) => {
//     userInfo.setUserInfo({ name: user.name, about: user.about, avatar: user.avatar });
//     serverToken = user._id;
//     cards.renderItems(card);
//   })
//   .catch((error) => {
//     console.log(`Ошибка: ${error}`);
//   });


// function handleCardClick(name, link) {
//   popupImage.open(name, link);
// }

// //добавила в конструктор userID
// function generateCard(item) {
//   const card = new Card(item, template, selectors, serverToken, userID, handleCardClick, {
//     //закомментировала на время проверки багов
//     openPopupDeleteCard: (id, card) => {
//       popupDeleteCard.open();
//       popupDeleteCard.getInfoCard(id, card);
//     }
//   }, {
//     handleRevomeLike: (id, likeButton, likeCounter, buttonAcviveLike) => {
//       api.deleteCard(id)
//         .then((data) => {
//           likeCounter.textContent = data.likes.length;
//           likeButton.classList.remove(buttonAcviveLike);

//         })
//       //закомментрила, чтобы добраться до сути ошибки, так котд с кэтч верный и нужно будет раскомментить
//       // .catch((error) => {
//       //   console.log(`Ошибка: ${error}`);
//       // });
//     }
//   }, {
//     handleAddLike: (id, likeButton, likeCounter, buttonAcviveLike) => {
//       console.log(item._id);
//       api.deleteLikeCard(id)
//         .then((data) => {
//           likeButton.classList.add(buttonAcviveLike);
//           likeCounter.textContent = data.likes.length;
//         })
//       //закомментрила, чтобы добраться до сути ошибки, так котд с кэтч верный и нужно будет раскомментить
//       // .catch((error) => {
//       //   console.log(`Ошибка: ${error}`);
//       // });
//     }
//   });
//   return card.createCard();
// }

// const userInfo = new UserInfo(selectors.titleProfile, selectors.subtitleProfile, selectors.avatarProfilePc);

// const cards = new Section({
//   renderer: item => {
//     cards.addItem(generateCard(item));
//   }
// },
//   selectors.cardsSpace);


// const popupImage = new PopupWithImage(selectors.popupImage, selectors);
// popupImage.setEventListeners();


// //popupProfile
// const popupProfileForm = new PopupWithForm(selectors.popupProfile, selectors, {
//   handleFormSubmit: (data) => {
//     popupProfileForm.renderLoading(true);
//     const { 'popupProfileName': name, 'popupJob': about } = data;
//     api.changeUserProfile(name, about)
//       .then((user) => {
//         userInfo.setUserInfo({ name: user.name, about: user.about, avatar: user.avatar });
//         popupProfileForm.close();
//       })
//       .catch((error) => {
//         console.log(`Ошибка: ${error}`);
//       })
//       .finally(() => {
//         popupProfileForm.renderLoading(false);
//       });
//   }
// });

// popupProfileForm.setEventListeners();


// //изначальная версия, в той, что выше заменила name link на имена из html
// const popupCardForm = new PopupWithForm(selectors.popupCard, selectors, {
//   handleFormSubmit: (data) => {
//     popupCardForm.renderLoading(true);
//     const { 'popupNameCard': name, 'popupLink': link } = data;
//     api.addNewCard(name, link)
//       .then((newCard) => {
//         cards.addItem(generateCard(newCard));
//         popupCardForm.close();
//       })
//       //потом раскомментить
//       // .catch((error) => {
//       //   console.log(`Ошибка: ${error}`);
//       // })
//       .finally(() => {
//         popupCardForm.renderLoading(false);
//       });
//   }
// });


// popupCardForm.setEventListeners();

// //popupAvatar
// const popupAvatarForm = new PopupWithForm(selectors.popupAvatar, selectors, {
//   handleFormSubmit: (data) => {
//     popupAvatarForm.renderLoading(true);
//     const { 'input_data_avatar': avatar } = data;
//     api.changeAvatar(avatar)
//       .then((user) => {
//         userInfo.setUserInfo({ name: user.name, about: user.about, avatar: user.avatar });
//         popupAvatarForm.close();
//       })
//       .then(() => {
//         popupAvatarForm.close();
//       })
//       //потом раскомментить
//       // .catch((error) => {
//       //   console.log(`Ошибка: ${error}`);
//       // })
//       .finally(() => {
//         popupAvatarForm.renderLoading(false);
//       });
//   }
// });

// popupAvatarForm.setEventListeners();

// //popupDelete
// const popupDeleteCard = new PopupWithConfirmation(selectors.popupDeleteCard, selectors, {
//   handleFormSubmit: (id, card) => {
//     api.deleteCard(id)
//       .then(() => {
//         card.remove();
//         card = null;
//         popupDeleteCard.close();
//       })
//     //потом раскомментить
//     // .catch((error) => {
//     //   console.log(`Ошибка: ${error}`);
//     // });
//   }
// })

// popupDeleteCard.setEventListeners();

// const ValidFormProfile = new FormValidator(formProfile, configForm);
// ValidFormProfile.enableValidation();
// const ValidFormCard = new FormValidator(formCard, configForm);
// ValidFormCard.enableValidation();
// const ValidFormAvatar = new FormValidator(formAvatar, configForm);
// ValidFormAvatar.enableValidation();

// //в открытом попапе видно присваивание
// buttonOpenPopupProfile.addEventListener('click', () => {
//   const { name, about } = userInfo.getUserInfo();
//   popupInputName.value = name;
//   popupInputJob.value = about;
//   ValidFormProfile.resetValidation();
//   popupProfileForm.open();
// });

// buttonAddCard.addEventListener('click', () => {
//   popupCardForm.open();
//   ValidFormCard.resetValidation();
// });

// avatarProfile.addEventListener('click', () => {
//   popupAvatarForm.open();
//   ValidFormAvatar.resetValidation();
// });

