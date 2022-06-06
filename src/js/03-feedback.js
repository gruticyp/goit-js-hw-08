import throttle from 'lodash.throttle';

const formRefEl = document.querySelector('.feedback-form');
const FORM_LOCAL_STORAGE_KEY = 'feedback-form-state';
const formData = {};

const fillFormRefs = form => {
  const formDataFromLocalStorage = JSON.parse(
    localStorage.getItem(FORM_LOCAL_STORAGE_KEY)
  );
  

  for (const key in formDataFromLocalStorage) {
    if (formDataFromLocalStorage.hasOwnProperty(key)) {
      form.elements[key].value = formDataFromLocalStorage[key];
    }
  }
};

fillFormRefs(formRefEl);

const onFormRefInput = e => {
  

  formData[e.target.name] = e.target.value;

  localStorage.setItem(FORM_LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

const onSubmitRef = e => {
  e.preventDefault();

  const formValues = {
    email: formRefEl.email.value,
    message: formRefEl.message.value,
  };

  console.log(formValues);

  e.currentTarget.reset();
  localStorage.removeItem(FORM_LOCAL_STORAGE_KEY);
};

formRefEl.addEventListener('input', throttle(onFormRefInput, 500));
formRefEl.addEventListener('submit', onSubmitRef);