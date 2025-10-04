const formValidate = document.querySelector('#form-validate');

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const postalCode = document.querySelector('#postalCode');
const password = document.querySelector('#password');
const passwordConf = document.querySelector('#password-conf');

formValidate.addEventListener('input', (e) => {
    const field = e.target;
    const errorSpan = field.nextElementSibling;

    switch (field.id) {
        case 'email': 
        case 'country':
        case 'postalCode':
            if (!field.checkValidity()) {
                errorSpan.textContent = field.validationMessage;
            } else {
                errorSpan.textContent = "";
            }
            break;

        case 'password':
            if (password.value.length < 6) {
                password.setCustomValidity('Password must be at least 6 characters.');
            } else {
                password.setCustomValidity('');
            }
            errorSpan.textContent = password.validationMessage;
            break;

        case 'password-conf':
            if (passwordConf.value !== password.value) {
                passwordConf.setCustomValidity('Password do not match');
            } else {
                passwordConf.setCustomValidity('');
            }
            errorSpan.textContent = passwordConf.validationMessage;
            break;
    }
});

formValidate.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formValidate.checkValidity()) {
    alert("Form submitted successfully!");
  } else {
    alert("Please fill the form before submitting.");
  }
});
