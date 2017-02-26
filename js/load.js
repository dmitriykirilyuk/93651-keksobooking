'use strict';
(function () {
  var statusCodeOk = 200;
  window.load = function (url, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (evt) {
      if (evt.target.status === statusCodeOk) {
        var data = JSON.parse(evt.target.response);
        onLoad(data);
      }
    });

    xhr.open('GET', url);
    xhr.send();
  };
})();
