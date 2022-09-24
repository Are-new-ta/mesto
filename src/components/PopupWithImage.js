import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup, selectors) {
    super(selectorPopup, selectors);
    this._imagePopup = this._popup.querySelector(selectors.imagePopup);
    this._imageCaption = this._popup.querySelector(selectors.imageCaption);
  }

  open(name, link) {
    this._imagePopup.src = link;
    this._imagePopup.alt = name;
    this._imageCaption.textContent = name;
    super.open();
  }
}

