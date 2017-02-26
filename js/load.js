'use strict';
(function () {
  window.load = function (url, onLoad) {
    var similarApartments = [];
    var pinTemplate = document.querySelector('.pin-template');
    var pinBlock = document.querySelector('.tokyo__pin-map');
    onLoad = function () {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function (evt) {
        similarApartments = JSON.parse(evt.target.response);

        similarApartments.forEach(function (item, index, array) {
          if (index === (array.length < 3)) {
            pinBlock.appendChild(pinTemplate.cloneNode(true));
          }
        });
      });

      xhr.open('GET', url);
      xhr.send();


    };

    return onLoad;
  };
})();
