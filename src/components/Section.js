export default class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._arreyRenderItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._arreyRenderItems.forEach((item) => this._renderer(item));
  }
}