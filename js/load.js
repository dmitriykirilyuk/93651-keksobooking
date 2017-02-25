'use strict';
(function () {
  window.load = function (url, onLoad) {

    onLoad = function () {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', onLoad);

      xhr.open('GET', url);
      xhr.send();
    };

    return onLoad;
  };
})();
