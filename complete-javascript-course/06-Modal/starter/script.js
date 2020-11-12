'use strict';

const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const btnCloseModalElement = document.querySelector('.close-modal');
const btnOpenModalElement = document.querySelectorAll('.show-modal');

const openModal = () => {
  modalElement.classList.remove('hidden');
  overlayElement.classList.remove('hidden');
};

const closeModal = () => {
  modalElement.classList.add('hidden');
  overlayElement.classList.add('hidden');
};

for (let i = 0; i < btnOpenModalElement.length; i++) {
  btnOpenModalElement[i].addEventListener('click', openModal);
}

btnCloseModalElement.addEventListener('click', closeModal);
overlayElement.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape'  && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
