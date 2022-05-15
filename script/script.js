const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = popup.querySelector('popup__button-close');

function popupOpenToggle() {
  popup.classList.toggle('popup__opened');
}

function popupOverlayClickHandler(evt) {
  //console.log(evt.target);
  //console.log(evt.currentTarget);
  if (evt.target === evt.currentTarget) {
    popupOpenToggle();
  }
}

openPopupButton.addEventListener('click', popupOpenToggle);
closePopupButton.addEventListener('clicl', popupOpenToggle);
popup.addEventListener('click', popupOverlayClickHandler);



