'use strict';
var HOUSINGS = {
  flat: 1000,
  hovel: 0,
  palace: 10000
};

var pin = document.querySelectorAll('.pin');
var pinBlock = document.querySelector('.tokyo__pin-map');
var dialogClose = document.querySelector('.dialog__close');
var dialogPanel = document.querySelector('.dialog');
window.initializePins(pinBlock, pin, dialogPanel, dialogClose);


var apartments = ['flat', 'hovel', 'palace'];
var prices = [1000, 0, 10000];
var timeStart = [12, 13, 14];
var timeEnd = [12, 13, 14];

var time = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');

// time.addEventListener('change', function (evt) {
//   timeOut.value = time.value;
// });
//
// timeOut.addEventListener('change', function () {
//   time.value = timeOut.value;
// });

window.synchronizeFields(time, timeOut, timeStart, timeEnd, 'value');

var housingType = document.querySelector('#type');
var housingPrice = document.querySelector('#price');


housingType.addEventListener('change', function () {
  var type = housingType.value;
  var price = HOUSINGS[type];
  housingPrice.min = price;
  housingPrice.placeholder = price;
});

housingPrice.addEventListener('change', function () {
  var currentPrice = +housingPrice.value;
  if (currentPrice === '') {
    return;
  }
  var type = housingType.value;
  var minPrice = HOUSINGS[type];
  if (currentPrice < minPrice) {
    housingPrice.value = minPrice;
  }
});

housingType.addEventListener('change', function () {
  var type = housingType.value;
  var price = HOUSINGS[type];
  housingPrice.value = price;
});

var roomNumber = document.querySelector('#room_number');
var roomCapacity = document.querySelector('#capacity');
var oneRoomOption = roomNumber.querySelector('[value = "1"]');
roomCapacity.addEventListener('change', function () {
  if (roomCapacity.value === '3') {
    oneRoomOption.setAttribute('disabled', true);
    oneRoomOption.removeAttribute('selected');
  } else {
    oneRoomOption.removeAttribute('disabled');
  }
});
