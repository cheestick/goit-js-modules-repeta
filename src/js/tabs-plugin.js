const refs = {
  controls: document.querySelector(`#tabs-1 [data-controls]`),
  panes: document.querySelector(`#tabs-1 [data-panes]`),
};

refs.controls.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'A') {
    console.log('This is not a reference');
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');

  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('controls__item--active');
    const paneId = currentActiveControlItem.getAttribute('href').slice(1);
    const pane = refs.panes.querySelector(`#${paneId}`);
    pane.classList.remove('pane--active');
  }

  const controlItem = event.target;
  controlItem.classList.add('controls__item--active');

  const paneId = controlItem.getAttribute('href').slice(1);

  const pane = refs.panes.querySelector(`#${paneId}`);
  pane.classList.add('pane--active');
});
