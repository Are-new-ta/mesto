export default class Section {
  constructor({ renderer }, selectorContainer) {
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach((item) => this._renderer(item));
  }
}