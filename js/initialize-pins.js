'use strict';
window.initializePins = (function () {
  return function (elementParent, element, dialogElement, dialogElementClose) {
    var ENTER_CODE = 13;
    elementParent.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('pin--active')) {
        evt.target.classList.remove('pin--active');
        dialogElement.style.display = 'none';
      } else {
        evt.target.classList.add('pin--active');
        dialogElement.style.display = 'block';
      }
    });

    var addHandlers = function (i) {
      var markMapIndex = element[i];
      markMapIndex.addEventListener('keydown', function (evt) {
        if (evt.keyCode === ENTER_CODE) {
          dialogElement.style.display = 'block';
        }
      });
    };

    for (var i = 0; i < element.length; i++) {
      addHandlers(i);
    }

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
    });
  };
})();
