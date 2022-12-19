import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = formRef.querySelector('input');
const textareaRef = formRef.querySelector('textarea');

formRef.addEventListener('input', throttle(inEmailInput, 500));

function inEmailInput() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: inputRef.value,
      massege: textareaRef.value,
    })
  );
}

const feedbackFormState = localStorage.getItem('feedback-form-state');
const parseFormState = JSON.parse(feedbackFormState);

if (feedbackFormState) {
  const { email, massege } = parseFormState;
  inputRef.value = email;
  textareaRef.value = massege;
}

formRef.addEventListener('submit', inSubmitBtn);
function inSubmitBtn(e) {
  e.preventDefault();
  if (inputRef.value === '' || textareaRef.value === '') {
    alert('Усі поля повинні бути заповнені');
  } else {
    console.log({
      email: inputRef.value,
      massege: textareaRef.value,
    });
    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
  }
}
