'use strict';
(function () {
  var ENTER_CODE = 13;
  var getBackFocus = null;
  var pin = document.querySelectorAll('.pin');
  window.initializePins = function (element, dialogElement, dialogElementClose) {
    dialogElementClose.addEventListener('click', function () {
      dialogElement.style.display = 'none';
      dialogElementClose.setAttribute('aria-pressed', true);
      element = document.querySelectorAll('.pin');
      if (element.classList.contains('pin--active')) {
        element.classList.remove('pin--active');
      }
    });

    dialogElementClose.addEventListener('keydown', function (evt) {
      evt.preventDefault();
      if (evt.keyCode === ENTER_CODE) {
        dialogElement.style.display = 'none';
        dialogElementClose.setAttribute('aria-pressed', true);
      }
      if (typeof getBackFocus === 'function') {
        getBackFocus();
      }
    });
  };

  getBackFocus = function () {
    pin.focus();
  };
})();
