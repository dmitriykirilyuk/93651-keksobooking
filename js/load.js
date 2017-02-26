'use strict';
(function () {
  window.load = function (url, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (evt) {
      if (evt.target.status === 200) {
        var data = JSON.parse(evt.target.response);
        onLoad(data);
      }
    });

    xhr.open('GET', url);
    xhr.send();
  };
})();
