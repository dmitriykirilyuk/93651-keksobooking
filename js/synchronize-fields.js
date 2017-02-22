'use strict';
(function () {
  window.synchronizeFields = function (inputFirst, inputSecond, arrayFirst, arraySecond, cb) {
    inputFirst.addEventListener('change', function () {
      if (typeof cb === 'function') {
        var selectValue = arrayFirst.indexOf(inputFirst.value);
        inputSecond.value = arraySecond[selectValue];
      }
    });
    inputSecond.addEventListener('change', function () {
      if (typeof cb === 'function') {
        var selectSecondValue = arraySecond.indexOf(inputSecond.value);
        inputFirst.value = arrayFirst[selectSecondValue];
      }
      var currentPrice = +inputSecond.value;
      if (currentPrice === '') {
        return;
      }
      var type = arrayFirst.indexOf(inputFirst.value);
      var minPrice = arraySecond[type];
      if (currentPrice < minPrice) {
        inputSecond.value = minPrice;
      }
    });
  };
})();
