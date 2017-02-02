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

housingType.addEventListener('change', function () {
  if (housingType.value === 'type__flat') {
    housingPrice.setAttribute('minlength', '1000');
    housingPrice.setAttribute('placeholder', '1000');
  } else if (housingType.value === 'type__hovel') {
    housingPrice.setAttribute('minlength', '0');
    housingPrice.setAttribute('placeholder', '0');
  } else {
    housingPrice.setAttribute('minlength', '10000');
    housingPrice.setAttribute('placeholder', '10000');
  }
});

housingPrice.addEventListener('change', function () {
  if (housingPrice.minlength >= 1000) {
    housingType.value = 'type__flat';
  } else if (housingPrice.minlength >= 0) {
    housingType.value = 'type__hovel';
  } else {
    housingType.value = 'type__palace';
  }
});/* здесь не решил задачу */

var roomNumber = document.querySelector('#room_number');
var roomCapacity = document.querySelector('#capacity');

roomNumber.addEventListener('change', function () {
  if (roomNumber.value === 2 || 100) {
    roomCapacity.value = 3;
  } else {
    roomCapacity.value = 'не для гостей';
  }
});

roomCapacity.addEventListener('change', function () {
  if (roomCapacity.value === 3) {
    roomNumber.value = 2 || 100;
  } else {
    roomCapacity.value = 1;
  }
});/* здесь не решил задачу */
