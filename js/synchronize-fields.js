'use strict';
var synchronizeFields = function (inputFirst, inputSecond, arrayFirst, arraySecond, prop) {
  var val = inputFirst.value;
  var index = arrayFirst.findIndex(function (elem) {
    return elem === val;
  });
  var val2 = arraySecond[index];
  inputSecond[prop] = val2;
};
