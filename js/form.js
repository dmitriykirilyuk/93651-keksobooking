'use strict';
/* задание 1 */

var pin = document.querySelectorAll('.pin');

var addHandlers = function (i) {
  var markMapIndex = pin[i];
  markMapIndex.addEventListener('click', function () {

    if (markMapIndex.classList.contains('pin--active')) {
      markMapIndex.classList.remove('pin--active');
    } else {
      markMapIndex.classList.add('pin--active');
    }
  });
};

for (var i = 0; i < pin.length; i++) {
  addHandlers(i);
}
/* задание 2 */
var dialogClose = document.querySelector('.dialog__close');
var dialogPanel = document.querySelector('.dialog');
pin = document.querySelectorAll('.pin');
dialogClose.addEventListener('click', function () {
  dialogPanel.style.display = 'none';

  if (pin.classList.contains('pin--active')) {
    pin.classList.remove('pin--active');
  }
});

/* задание 4 */
var time = document.querySelector('#time');
var timeOut = document.querySelector('#timeout');

time.addEventListener('change', function (evt) {
  timeOut.value = time.value;
});

timeOut.addEventListener('change', function () {
  time.value = timeOut.value;
});

var housingType = document.querySelector('#type');
var housingPrice = document.querySelector('#price');
var HOUSINGS = {
  flat: 1000,
  hovel: 0,
  palace: 10000
};

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
