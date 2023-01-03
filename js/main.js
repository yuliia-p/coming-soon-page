const inputEl = document.querySelector('#email');
const errorEl = document.querySelector('.icon-error');
const textErrorEl = document.querySelector('.text-error');
const button = document.querySelector('#submit');
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let errorsArray = [];

button.addEventListener('click', e => {
  textErrorEl.classList.remove('text-success');
  const email = inputEl.value;
  errorsArray = [];

  if (email === '' || email === undefined) {
    errorsArray.push('Please provide us your email');

    errorEl.style.display = 'block';
    textErrorEl.innerText = errorsArray[0];
  } else if (!email.match(RegEmail)) {
    errorsArray.push('Please provide us your valid email');

    errorEl.style.display = 'block';
    textErrorEl.innerText = errorsArray[0];
  }

  if (!errorsArray.length > 0) {
    errorEl.style.display = 'none';
    textErrorEl.classList.add('text-success');
    textErrorEl.innerText = 'Thank you for subscribing to our newsletter.';
  }
});
