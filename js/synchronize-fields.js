'use strict';
var synchronizeFields = function (inputFirst, inputSecond, arrayFirst, arraySecond, strName) {
  inputFirst.addEventListener('change', function () {
    var selectValue = arrayFirst.indexOf(inputFirst.value);
    inputSecond[strName] = arraySecond[selectValue];
  });
  inputSecond.addEventListener('change', function () {
    var selectSecondValue = arraySecond.indexOf(inputSecond.value);
    inputFirst[strName] = arrayFirst[selectSecondValue];

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
