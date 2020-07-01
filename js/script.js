(function () {
  'use strict';

  document.querySelector('.header__icon--delete').addEventListener('click', function () {
    document.querySelector('.modal').classList.add('modal--active');
  });
  document.querySelector('.modal__button--cancel').addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('modal--active');
  });
})();