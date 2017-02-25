'use strict';
(function () {
  window.synchronizeFields = function (inputFirst, inputSecond, arrayFirst, arraySecond, callback) {
    inputFirst.addEventListener('change', function () {
      if (typeof callback === 'function') {
        var selectValue = arrayFirst.indexOf(inputFirst.value);
        callback(inputSecond, arraySecond[selectValue]);
      }
    });
    inputSecond.addEventListener('change', function () {
      if (typeof callback === 'function') {
        var selectSecondValue = arraySecond.indexOf(inputSecond.value);
        callback(inputFirst, arrayFirst[selectSecondValue]);
      }
    });
  };
})();
