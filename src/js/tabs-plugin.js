class Tabs {
  constructor({ rootSelector, activeControlClass = 'active' }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControlClass = activeControlClass;

    this._bindEvents();
  }

  _getRefs(root) {
    const refs = {};
    refs.controls = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);

    return refs;
  }

  _bindEvents() {
    this._refs.controls.addEventListener('click', this._onControlsClick.bind(this));
  }

  _onControlsClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'A') {
      console.log('This is not a reference');
      return;
    }

    const currentActiveControlItem = this._refs.controls.querySelector(
      `.${this._activeControlClass}`,
    );
  }
}

const options = {
  rootSelector: '#tabs-1',
  activeControlClass: 'control__item--active',
};

const tabs1 = new Tabs(options);

const tabs2 = new Tabs(options);

console.log(tabs1);
console.log(tabs2);
