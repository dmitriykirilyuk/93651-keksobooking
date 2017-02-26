'use strict';
(function () {
  var ENTER_CODE = 13;
  var dialogPanel = document.querySelector('.dialog');
  var pinBlock = document.querySelector('.tokyo__pin-map');
  var pinActive = document.querySelector('.pin--active');
  var pin = document.querySelector('.pin');

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
  };

  var similarApartments = [];
  var templateElement = document.querySelector('#pin-template');
  var elementToClone = templateElement.content.querySelector('.pin');
  var onLoad = function (data) {
    similarApartments = data;
    similarApartments.forEach(function (item, index, array) {
      var newPin = elementToClone.cloneNode(true);
      if (index < 3) {
        pinBlock.appendChild(newPin);
      }
      newPin.setAttribute('tabindex', 0);
      newPin.children[0].alt = similarApartments[index].offer.address;
      newPin.children[0].src = similarApartments[index].author.avatar;
      newPin.style.top = similarApartments[index].location.y + 'px';
      newPin.style.left = similarApartments[index].location.x + 'px';
    });
  };
  window.load('https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data', onLoad);
})();
