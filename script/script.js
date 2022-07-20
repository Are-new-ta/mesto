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
  popupInputName: '.popup__input_data_name',
  popupInputJob: '.popup__input_data_job',
  popupContainer: '.popup__container',
  //новые переменные для новых попапов
  popupCard: '.popup_data_card',
  popupContainerCard: '.popup__container_data_card',
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
//для popupCard
const popupCard = document.querySelector(selector.popupCard);
const addCardButton = document.querySelector(selector.addCardButton);
const popupCardInputName = popupCard.querySelector(selector.popupCardInputName);
const popupCardInputLink = popupCard.querySelector(selector.popupCardInputLink);
const popupContainerCard = popupCard.querySelector(selector.popupContainerCard);
const closePopupCardButton = popupCard.querySelector(selector.closePopupCardButton);
const cards = document.querySelector(selector.cardsSpace);
const templateCard = document.querySelector(selector.templateCard);
const createTemplateCard = templateCard.content.querySelector(selector.card).cloneNode(true);
const cardImage = createTemplateCard.querySelector(selector.imageCard);
const cardTitle = createTemplateCard.querySelector(selector.cardTitle);
const likeButton = createTemplateCard.querySelector(selector.likeButton);
const imageCaption = document.querySelector(selector.imageCaption);
const imagePopup = document.querySelector(selector.imagePopup);
//const popupImage = document.querySelector(selector.popupImage);
//const closePopupImagedButton = popupImage.querySelector(selector.closePopupImagedButton);

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


//общие функции открытия и закрытия 
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//popupProfile
function openPopupProfile() {
  popupInputName.value = editProfileTitle.textContent;
  popupInputJob.value = editProfileSubtitle.textContent;
  openPopup(popupProfile);
}

function HandlerProfileFormSubmit(evt) {
  evt.preventDefault();
  editProfileTitle.textContent = popupInputName.value;
  editProfileSubtitle.textContent = popupInputJob.value;
  closePopup(popupProfile);
}

openPopupProfileBtn.addEventListener('click', openPopupProfile);
closePopupProfileButton.addEventListener('click', () => closePopup(popupProfile));
formProfileElement.addEventListener('submit', HandlerProfileFormSubmit);

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
    const deleteTarget = evt.target.closest(selector.card);
    deleteTarget.remove();
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

  closePopup(popupCard);
}

initialCards.forEach((item) => {
  const card = createCard(item);
  cards.append(card);
});

popupContainerCard.addEventListener("submit", handlePopupCardFormSubmit);












