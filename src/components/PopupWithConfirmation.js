import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, selectors) {
    super(popupSelector, selectors);
    this._popupSelector = popupSelector;
    this._popupForm = this._popup.querySelector(selectors.formPopup);
  }

  //устанавливает данные о карточке
  setInfoCard(id, card) {
    this._id = id;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }
}






//до ревью
// import Popup from './Popup.js';

// export default class PopupWithConfirmation extends Popup {
//   constructor(popupSelector, selectors, { handleFormSubmit }) {
//     super(popupSelector, selectors);
//     this._popupSelector = popupSelector;
//     this._popupForm = this._popup.querySelector(selectors.formPopup);
//     this._handleFormSubmit = handleFormSubmit;
//   }

//   //устанавливает данные о карточке
//   setInfoCard(id, card) {
//     this._id = id;
//     this._card = card;
//   }

  // removeCard(card) {
  //   this._card = card;
  //   this._card.remove();
  //   this._card = null;
  // }

//   setEventListeners() {
//     super.setEventListeners();
//     this._popupForm.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//       this._handleFormSubmit(this._id, this._card);
//     });
//   }
// }




//в index.js
//popupDelete
// const popupDeleteCard = new PopupWithConfirmation(selectors.popupDeleteCard, selectors, {
//   handleFormSubmit: (id, card) => {
//     api.deleteCard(id)
//       .then(() => {
//         card.removeCard();
//         popupDeleteCard.close();
//       })
//     // .catch((error) => {
//     //   console.log(`Ошибка: ${error}`);
//     // });
//   }
// })

