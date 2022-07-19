//переменные для обозначения классов
const selector = {
  editButtonProfile: '.profile__edit-button',
  titleProfile: '.profile__title',
  subtitleProfile: '.profile__subtitle',
  addCardButton: '.profile__add-button',
  popup: '.popup',
  popupOpen: 'popup_opened',
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
const openPopupButton = document.querySelector(selector.editButtonProfile);
const editProfileTitle = document.querySelector(selector.titleProfile);
const editProfileSubtitle = document.querySelector(selector.subtitleProfile);
const popup = document.querySelector(selector.popup);
const closePopupButton = popup.querySelector(selector.closePopupButton);
const popupInputName = popup.querySelector(selector.popupInputName);
const popupInputJob = popup.querySelector(selector.popupInputJob);
const formElement = popup.querySelector(selector.popupContainer);
//для popupCard
const popupCard = document.querySelector(selector.popupCard);
const addCardButton = document.querySelector(selector.addCardButton);
const popupCardInputName = popupCard.querySelector(selector.popupCardInputName);
const popupCardInputLink = popupCard.querySelector(selector.popupCardInputLink);
const popupContainerCard = popupCard.querySelector(selector.popupContainerCard);
const closePopupCardButton = popupCard.querySelector(selector.closePopupCardButton);
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

//popupProfile
function openPopupProfile() {
  popupInputName.value = editProfileTitle.textContent;
  popupInputJob.value = editProfileSubtitle.textContent;
  popup.classList.add(selector.popupOpen);
}

function closePopup() {
  popup.classList.remove(selector.popupOpen);
  popupCard.classList.remove(selector.popupOpen);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  editProfileTitle.textContent = popupInputName.value;
  editProfileSubtitle.textContent = popupInputJob.value;
  closePopup();
}

openPopupButton.addEventListener('click', openPopupProfile);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

//popupImage
const popupImage = document.querySelector(selector.popupImage);
const closePopupImagedButton = popupImage.querySelector(selector.closePopupImagedButton);

function openPopupImage() {
  popupImage.classList.add(selector.popupOpen);
}

function closePopupImage() {
  popupImage.classList.remove(selector.popupOpen);
}

cardImage.addEventListener('click', openPopupImage);
closePopupImagedButton.addEventListener('click', closePopupImage);

//popupCard
function openPopupCard() {
  popupCard.classList.add(selector.popupOpen);
}

addCardButton.addEventListener('click', openPopupCard);
closePopupCardButton.addEventListener('click', closePopup);

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
    openPopupImage();
    imagePopup.src = item.link;
    imagePopup.alt = item.name;
    imageCaption.textContent = item.name;
  };
  return createTemplateCard;
}

function handlePopupCardFormSubmit(evt) {
  evt.preventDefault();

  const newCard = [
    {
      name: popupCardInputName.value,
      link: popupCardInputLink.value,
    },
  ];

  newCard.forEach((item) => {
    const card = createCard(item);
    const cards = document.querySelector(selector.cardsSpace);
    cards.prepend(card);
  });

  popupCardInputName.value = "";
  popupCardInputLink.value = "";
  closePopup();
}

initialCards.forEach((item) => {
  const card = createCard(item);
  const cards = document.querySelector(selector.cardsSpace);
  cards.append(card);
});

popupContainerCard.addEventListener("submit", handlePopupCardFormSubmit);













