'use strict';
(function () {
  var pin = document.querySelectorAll('.pin');
  var dialogClose = document.querySelector('.dialog__close');
  var dialogPanel = document.querySelector('.dialog');
  var time = document.querySelector('#time');
  var timeOut = document.querySelector('#timeout');
  var housingType = document.querySelector('#type');
  var housingPrice = document.querySelector('#price');
  var roomNumber = document.querySelector('#room_number');
  var roomCapacity = document.querySelector('#capacity');

  var syncValues = function (element, value) {
    element.value = value;
  };

  window.initializePins(pin, dialogPanel, dialogClose);
  window.synchronizeFields(time, timeOut, ['12', '13', '14'], ['12', '13', '14'], syncValues);
  window.synchronizeFields(timeOut, time, ['12', '13', '14'], ['12', '13', '14'], syncValues);
  window.synchronizeFields(housingType, housingPrice, ['flat', 'hovel', 'palace'], ['1000', '0', '10000'], 'min');
  window.synchronizeFields(housingType, housingPrice, ['flat', 'hovel', 'palace'], ['1000', '0', '10000'], 'value');
  window.synchronizeFields(roomNumber, roomCapacity, ['1', '2', '100'], ['0', '3', '3'], 'value');
})();
