'use strict';
(function () {
  var ENTER_CODE = 13;
  var dialogPanel = document.querySelector('.dialog');
  var pinBlock = document.querySelector('.tokyo__pin-map');
  var pin = document.querySelectorAll('.pin');
  var pinActive = document.querySelector('.pin--active');
  window.initializePins = function (element, dialogElement, dialogElementClose) {
    dialogElementClose.addEventListener('click', function () {
      dialogElement.style.display = 'none';
      dialogElementClose.setAttribute('aria-pressed', true);
      element = document.querySelectorAll('.pin');
      if (element.classList.contains('pin--active')) {
        element.classList.remove('pin--active');
        pinActive = null;
      }
    });

    pinBlock.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('pin--active')) {
        evt.target.classList.remove('pin--active');
        dialogPanel.style.display = 'none';
        pinActive = null;
      } else {
        evt.target.classList.add('pin--active');
        window.showCard(dialogPanel);
        pinActive = evt.target;
      }
    });

    pinBlock.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_CODE) {
        window.showCard(dialogPanel);
        dialogPanel.focus();
      }
    });

    pinBlock.addEventListener('focusin', function (evt) {
      evt.target.classList.add('pin--active');
    });

    pinBlock.addEventListener('focusout', function (evt) {
      evt.target.classList.remove('pin--active');
    });

    dialogElementClose.addEventListener('keydown', function (evt) {
      evt.preventDefault();
      if (evt.keyCode === ENTER_CODE) {
        dialogElement.style.display = 'none';
        dialogElementClose.setAttribute('aria-pressed', true);
      }
      getBackFocus();
    });
  };

  var getBackFocus = function () {
    pinActive.focus();
    pinActive.style.border = '3px solid red';
  };
})();
