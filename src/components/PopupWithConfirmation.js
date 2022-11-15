import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, selectors, { handleFormSubmit }) {
    super(popupSelector, selectors);
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._popupForm = this._popup.querySelector(selectors.formPopup);
    this._handleFormSubmit = handleFormSubmit;
  }

  //собирае данные о карточке
  getInfoCard(id, card) {
    this._id = id;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._id, this._card);
    });
  }
}


//13/11/2022 версия утвержденная, все что выше-эксперимент
// import Popup from './Popup.js';

// export default class PopupWithConfirmation extends Popup {
//   constructor(popupSelector, selectors, { handleFormSubmit }) {
//     super(popupSelector, selectors);
//     this._popupSelector = popupSelector;
//     this._popup = document.querySelector(this._popupSelector);
//     this._popupForm = this._popup.querySelector(selectors.formPopup);
//     this._handleFormSubmit = handleFormSubmit;
//   }

//   //собирае данные о карточке
//   getInfoCard(id, card) {
//     this._id = id;
//     this._card = card;
//   }

//   setEventListeners() {
//     super.setEventListeners();
//     this._popupForm.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//       this._handleFormSubmit(this._id, this._card);//возможно надо id, а не кард Айди
//     });
//   }
// }