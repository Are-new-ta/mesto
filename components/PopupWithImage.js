import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup, selector) {
    super(selectorPopup, selector);
    this._imagePopup = this._popup.querySelector(selector.imagePopup);
    this._imageCaption = this._popup.querySelector(selector.imageCaption);
  }

  open(name, link) {
    this._imagePopup.src = link;
    this._imagePopup.alt = name;
    this._imageCaption.textContent = name;
    super.open();
  }
}
