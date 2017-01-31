"use strict";
/*задание 1*/
var pin = document.querySelectorAll(".pin");
var i;

for(i = 0; i < pin.length; i++) {
  pin[i].addEventListener("click", function() {
    if(this.classList.contains("pin--active")) {
      this.classList.remove("pin--active");
    } else {
      this.classList.add("pin--active");
    };
  });
};
/*задание 2*/
var dialogClose = document.querySelector(".dialog__close");
var dialogPanel = document.querySelector(".dialog");
var pin = document.querySelectorAll(".pin");/*почему если не обьявить переменную во второй раз, то ее не видит if ?*/
dialogClose.addEventListener("click", function() {
  dialogPanel.style.display = "none";

  if(pin.classList.contains("pin--active")) {
    this.classList.remove("pin--active");
  };
});

/*задание 4*/
var time = document.querySelectorAll("#time option");
var timeOut = document.querySelectorAll("#timeout option");

for (var i = 0; i < time.length; i++) {
  time[i].addEventListener("change", function () {
    this.value == timeout.value;
  });
};
