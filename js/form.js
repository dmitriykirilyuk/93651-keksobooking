'use strict';
/* задание 1 */

var pin = document.querySelectorAll('.pin');
var i;


for (i = 0; i < pin.length; i++) {
  pin[i].addEventListener('click', function () {
    if (this.classList.contains('pin--active')) {
      this.classList.remove('pin--active');
    } else {
      this.classList.add('pin--active');
    }
  });
}
/* задание 2 */
var dialogClose = document.querySelector('.dialog__close');
var dialogPanel = document.querySelector('.dialog');
var pin = document.querySelectorAll('.pin');/*почему если не обьявить переменную во второй раз, то ее не видит if ?*/
dialogClose.addEventListener('click', function () {
  dialogPanel.style.display = 'none';

  if (pin.classList.contains('pin--active')) {
    this.classList.remove('pin--active');
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
var obj = {
  flat: 1000,
  hovel: 0,
  palace: 10000
};

housingType.addEventListener('change', function () {
  if (housingType.value === 'flat') {
    housingPrice.setAttribute('min', '1000');
    housingPrice.setAttribute('placeholder', '1000');
  } else if (housingType.value === 'hovel') {
    housingPrice.setAttribute('min', '0');
    housingPrice.setAttribute('placeholder', '0');
  } else {
    housingPrice.setAttribute('min', '10000');
    housingPrice.setAttribute('placeholder', '10000');
  }
});

housingPrice.addEventListener('change', function () {
  var currentPrice = +housingPrice.value;
  if (currentPrice === '') {
    return false;
  }
  var type = housingType.value;
  var minPrice = obj[type];
  if (currentPrice < minPrice) {
    housingPrice.value = minPrice;
  }
});

housingType.addEventListener('change', function () {
  if (housingType.value === 'flat') {
    housingPrice.value = 1000;
  } else if (housingType.value === 'hovel') {
    housingPrice.value = 0;
  } else {
    housingPrice.value = 10000;
  }
});

var roomNumber = document.querySelector('#room_number');
var roomCapacity = document.querySelector('#capacity');
var oneRoomOption = roomNumber.querySelector('[value = "1"]');
roomCapacity.addEventListener('change', function () {
  if (roomCapacity.value === "3") {
    oneRoomOption.setAttribute('disabled', true);
    oneRoomOption.removeAttribute('selected');
  } else {
    oneRoomOption.removeAttribute('disabled');
  }
});
