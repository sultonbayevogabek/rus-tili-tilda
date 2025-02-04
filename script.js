'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#form817772954');
  const submitButton = document.querySelector('#form-submit-btn');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(nameInput.value);
    console.log(phoneInput.value);
  })

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#input_9259215262381');
    const phoneInput = document.querySelector('.js-phonemask-result.js-tilda-rule');

    console.log(nameInput.value);
    console.log(phoneInput.value);
  })
})