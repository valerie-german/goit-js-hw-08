import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");
const emailField = form.querySelector('[name="email"]');
const messageField = form.querySelector('[name="message"]');

updatePage();

form.addEventListener('input', throttle(saveFields, 500));
form.addEventListener('submit', submitForm);

function saveFields() {
  const valueObject = {
    email: emailField.value,
    message: messageField.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(valueObject));
}

function updatePage() {
  const parseValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parseValue) {
    emailField.value = parseValue.email;
    messageField.value = parseValue.message;
  } else {
    emailField.value = "";
    messageField.value = "";
  }
}

function submitForm(event) {
  event.preventDefault();
  form.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}