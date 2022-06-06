'use strict';
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FEEDBACK_FORM_KEY = 'feedback-form-state';
const feedbackFormState = {};

const fillFormData = form => {
    const formDataFromLacalStorage = JSON.parse(
        localStorage.getItem(FEEDBACK_FORM_KEY)
    );

    const formEl = form.elements;

    for (const key in formDataFromLacalStorage) {
        if (formDataFromLacalStorage.hasOwnProperty(key)) {
            formEl[key].value = formDataFromLacalStorage[key];
        }
    }
};

fillFormData(formEl);

const onElementFocusChange = throttle(event => {
    const target = event.target.value;
    const elName = event.target.name;

    feedbackFormState[elName]  = target;

    localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(feedbackFormState));
}, 500);


const onFormSubmit = event => {
    event.preventDefault();

    if(event.target.message.value === '' || event.target.email.value === '') {
        alert('нужно заполнить поля');
        return;
    }

    const inputsEl = {
        email: formEl.email.value,
        message: formEl.message.value,
    };

    console.log(inputsEl);

    localStorage.removeItem(FEEDBACK_FORM_KEY);

    event.target.reset();
};

formEl.addEventListener('change', onElementFocusChange);
formEl.addEventListener('submit', onFormSubmit);