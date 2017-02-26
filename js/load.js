'use strict';
(function () {
  var STATUS_CODE_OK = 200;
  window.load = function (url, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (evt) {
      if (evt.target.status === STATUS_CODE_OK) {
        var data = JSON.parse(evt.target.response);
        onLoad(data);
      }
    });

    xhr.open('GET', url);
    xhr.send();
  };
})();
