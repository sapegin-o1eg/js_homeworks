'use strict';

const btnShowModal = document.querySelector('button.show-btn');
const btnCloseModal = document.querySelector('button.close-btn');
const mymodal = document.querySelector('div.mymodal');

btnShowModal.onclick = function () {
  mymodal.style.display = 'block';
};

btnCloseModal.onclick = function () {
  mymodal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == mymodal) {
    mymodal.style.display = "none";
  }
};

