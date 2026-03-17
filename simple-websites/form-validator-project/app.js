const form = document.getElementById('myform');
const submitBtn = document.getElementById('submitbtn');

// Input fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const password1Input = document.getElementById('p1');
const password2Input = document.getElementById('p2');

// Real-time validation for all fields
nameInput.addEventListener('input', () => validateField(nameInput, /^[A-Za-z\s]{3,}$/, 'Name must be at least 3 letters'));
emailInput.addEventListener('input', () => validateField(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email'));
password1Input.addEventListener('input', () => validateField(password1Input, /^.{8,}$/, 'Password must be at least 8 characters'));
password2Input.addEventListener('input', validatePasswordMatch);

// Validate a single field with regex
function validateField(input, regex, errorMessage) {
    const errorSpan = input.nextElementSibling;  // Get the span right after the input
    if (input.value.trim() === '' || !regex.test(input.value.trim())) {
        showError(errorSpan, errorMessage);
        submitBtn.disabled = true;
    } else {
        clearError(errorSpan);
        checkFormValidity();  // Check if the entire form is valid
    }
}

// Validate if both passwords match
function validatePasswordMatch() {
    const errorSpan = password2Input.nextElementSibling;
    if (password2Input.value !== password1Input.value) {
        showError(errorSpan, 'Passwords do not match');
        submitBtn.disabled = true;
    } else {
        clearError(errorSpan);
        checkFormValidity();
    }
}

// Show and hide error functions
function showError(span, message) {
    span.innerText = message;
    span.style.display = 'block';
}

function clearError(span) {
    span.innerText = '';
    span.style.display = 'none';
}

// Check if all fields are valid to enable submit button
function checkFormValidity() {
    const allSpans = form.querySelectorAll('.error');
    const hasError = Array.from(allSpans).some(span => span.innerText !== '');
    submitBtn.disabled = hasError;
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formdata = {
        name: nameInput.value,
        email: emailInput.value
    };
    localStorage.setItem('formdata',JSON.stringify(formdata));
    window.location.href='sucess.html';
})