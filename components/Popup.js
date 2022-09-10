export default class Popup {
  constructor(selectorPopup, selector) {
    this._popup = document.querySelector(selectorPopup);
    this._popupOpen = document.querySelector(selector.popupOpen);
    this._buttonClosePopup = this._popup.querySelector(selector.closePopupButton)
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close(this._popupOpen);
    }
  }

  _closePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close(this._popupOpen);
    }
  }

  setEventListeners() {
    this._buttonClosePopup.addEventListener('click', () => this.close());
    this._popupOpen.addEventListener('click', (evt) => this._closePopupOverlay(evt));
    // this._popup.addEventListener('click', (evt) => this._closePopupOverlay(evt));
  }
}
