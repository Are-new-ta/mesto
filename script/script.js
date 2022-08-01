//переменные для обозначения классов
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
  //новые переменные для новых попапов
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

//для popupProfile
const openPopupProfileBtn = document.querySelector(selector.editButtonProfile);
const editProfileTitle = document.querySelector(selector.titleProfile);
const editProfileSubtitle = document.querySelector(selector.subtitleProfile);
const popupProfile = document.querySelector(selector.popupProfile);
const closePopupProfileButton = popupProfile.querySelector(selector.closePopupButton);
const popupInputName = popupProfile.querySelector(selector.popupInputName);
const popupInputJob = popupProfile.querySelector(selector.popupInputJob);
const formProfileElement = popupProfile.querySelector(selector.popupContainer);
const closePopupButton = document.querySelector(selector.closePopupButton);
//для popupCard
const popupCard = document.querySelector(selector.popupCard);
const addCardButton = document.querySelector(selector.addCardButton);
const popupCardInputName = popupCard.querySelector(selector.popupCardInputName);
const popupCardInputLink = popupCard.querySelector(selector.popupCardInputLink);
//const popupContainerCard = popupCard.querySelector(selector.popupContainerCard);
const popupFormCard = popupCard.querySelector(selector.popupFormCard);
const closePopupCardButton = popupCard.querySelector(selector.closePopupCardButton);
const cards = document.querySelector(selector.cardsSpace);
const templateCard = document.querySelector(selector.templateCard);
const createTemplateCard = templateCard.content.querySelector(selector.card).cloneNode(true);
const cardImage = createTemplateCard.querySelector(selector.imageCard);
const cardTitle = createTemplateCard.querySelector(selector.cardTitle);
const likeButton = createTemplateCard.querySelector(selector.likeButton);
const imageCaption = document.querySelector(selector.imageCaption);
const imagePopup = document.querySelector(selector.imagePopup);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


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


//новая функция для закрытия попапа при нажатии на оверлей (не работает)
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popup = document.querySelector(selector.popupOpen);
    closePopup(popup);
  }
}

//не работает
const closePopupButtons = document.querySelectorAll(selector.closePopupButton);
closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => { closePopup(popup); });
  popup.addEventListener('click', (evt) => { closePopupOverlay(evt); });
});

/*функция закрытия при нажатии на Esc: если значение нажатой кнопки Esc
то находим переменную с селектором открытого попапа и закрываем его*/
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector(selector.popupOpen);
    closePopup(popup);
  }
}

//popupProfile
function openPopupProfile() {
  popupInputName.value = editProfileTitle.textContent;
  popupInputJob.value = editProfileSubtitle.textContent;
  openPopup(popupProfile);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  editProfileTitle.textContent = popupInputName.value;
  editProfileSubtitle.textContent = popupInputJob.value;
  closePopup(popupProfile);
}

openPopupProfileBtn.addEventListener('click', () => {
  openPopup(popupProfile);

  setInputProfileValue();
  resetErrorInput(popupProfile);
  resetErrorSpan(popupProfile);
  activateSubmitButton(popupProfile);
});


//функция для связи валью интутов и текста
function setInputProfileValue() {
  popupInputName.value = editProfileTitle.textContent;
  popupInputJob.value = editProfileSubtitle.textContent;
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

//Listenter
//openPopupProfileBtn.addEventListener('click', openPopupProfile);
closePopupProfileButton.addEventListener('click', () => closePopup(popupProfile));
formProfileElement.addEventListener('submit', handleProfileFormSubmit);

//popupImage
const popupImage = document.querySelector(selector.popupImage);
const closePopupImagedButton = popupImage.querySelector(selector.closePopupImagedButton);
cardImage.addEventListener('click', () => openPopup(popupImage));
closePopupImagedButton.addEventListener('click', () => closePopup(popupImage));

//popupCard
addCardButton.addEventListener('click', () => openPopup(popupCard));
closePopupCardButton.addEventListener('click', () => closePopup(popupCard));

//создание карточки
function createCard(item) {
  const createTemplateCard = templateCard.content.querySelector(selector.card).cloneNode(true);
  const cardImage = createTemplateCard.querySelector(selector.imageCard);
  const cardTitle = createTemplateCard.querySelector(selector.cardTitle);
  const likeButton = createTemplateCard.querySelector(selector.likeButton);
  const deleteButton = createTemplateCard.querySelector(selector.deleteButton);

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  likeButton.addEventListener('click', (evt) => {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('card__like_active');
  });

  deleteButton.addEventListener('click', (evt) => {
    createTemplateCard.remove();
  });

  cardImage.onclick = function () {
    openPopup(popupImage);
    imagePopup.src = item.link;
    imagePopup.alt = item.name;
    imageCaption.textContent = item.name;
  };
  return createTemplateCard;
}

function handlePopupCardFormSubmit(evt) {
  evt.preventDefault();

  const newCard = {
    name: popupCardInputName.value,
    link: popupCardInputLink.value,
  };

  const card = createCard(newCard);
  cards.prepend(card);

  //очистка значений формы после сабмита
  evt.target.reset();

  disableSubmitButton(evt.target);

  closePopup(popupCard);
}

initialCards.forEach((item) => {
  const card = createCard(item);
  cards.append(card);
});

popupFormCard.addEventListener("submit", handlePopupCardFormSubmit);
