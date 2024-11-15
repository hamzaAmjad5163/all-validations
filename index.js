function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = emailInput.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'This field is required.';
        emailError.classList.add('text-danger');
        return false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Enter valid email address.';
        emailError.classList.add('text-danger');
        return false;
    } else {
        emailError.textContent = '';
        emailError.classList.remove('text-danger');
        return true;
    }
}
// NTN validation
function validateNTN() {
    const ntnInput = document.getElementById("ntn");
    const ntnError = ntnInput.nextElementSibling;
    const ntnValue = ntnInput.value.trim().replace(/[^0-9]/g, '');
    ntnInput.value = ntnValue.substring(0, 8);

    if (ntnInput.value.trim() === '') {
        ntnError.textContent = 'This field is required.';
        ntnError.classList.add('text-danger');
        return false;
    } else if (ntnValue.length !== 8) {
        ntnError.textContent = 'NTN should be exactly 8 digits.';
        ntnError.classList.add('text-danger');
        return false;
    } else {
        ntnError.textContent = '';
        ntnError.classList.remove('text-danger');
        return true;
    }
}
// Phone number validation
function validatePhoneNumber() {
    const phoneInput = document.getElementById("contact_no");
    const phoneError = phoneInput.nextElementSibling;
    const phoneValue = phoneInput.value.trim().replace(/[^0-9]/g, '');
    phoneInput.value = phoneValue.substring(0, 11);
    if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'This field is required.';
        phoneError.classList.add('text-danger');
        return false;
    } else if (phoneValue.length !== 11) {
        phoneError.textContent = 'Phone number must be exactly 11 digits.';
        phoneError.classList.add('text-danger');
        return false;
    } else {
        phoneError.textContent = '';
        phoneError.classList.remove('text-danger');
        return true;
    }
}
// Format CNIC as xxxxx-xxxxxxx-x while typing
document.getElementById('cnic').addEventListener('input', function () {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 13) value = value.slice(0, 13);

    if (value.length > 5) {
        value = value.slice(0, 5) + '-' + value.slice(5);
    }
    if (value.length > 13) {
        value = value.slice(0, 13) + '-' + value.slice(13);
    }
    this.value = value;
});
// CNIC Validations
function validateCNIC() {
    const cnicInput = document.getElementById('cnic');
    if (!cnicInput) return true;

    let cnicError = cnicInput.nextElementSibling.querySelector('.error-message');
    if (!cnicError) {
        cnicError = document.createElement('span');
        cnicError.classList.add('error-message', 'text-danger');
        cnicInput.parentNode.insertBefore(cnicError, cnicInput.nextSibling);
    }

    const cnicValue = cnicInput.value.trim();
    const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;

    if (cnicValue === '') {
        cnicError.textContent = 'This field is required.';
        cnicError.classList.add('text-danger');
        cnicInput.focus();
        return false; // Field is empty
    } else if (cnicRegex.test(cnicValue)) {
        cnicError.textContent = '';
        cnicError.classList.remove('text-danger');
        return true; // Valid CNIC format
    } else {
        cnicError.textContent = 'CNIC should be in correct format';
        cnicError.classList.add('text-danger');
        cnicInput.focus();
        return false; // Invalid CNIC format
    }
}

// password validation
function validatePasswords() {
    const password = $('#password').val();
    const confirmPassword = $('#password_confirmation').val();
    const confirmPasswordError = $('#confirmPasswordError');
    const passwordError = $('#passwordError');

    // let passwordsMatch = true;

    // Clear previous error messages
    passwordError.hide();
    confirmPasswordError.hide();

    if (password.length < 8) {
        passwordError.text('Password should be at least 8 characters.').show();
        return false;
    }
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumberOrSymbol = /[\d\W]/.test(password);

    if (!hasLetter || !hasNumberOrSymbol) {
        passwordError.text('Password should contain letters & numbers/symbols.').show();
        return false;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
        passwordError.text('Passwords do not match').show();
        // confirmPasswordError.text('Passwords do not match').show();
        return false;
    }

    return true;
}



// toggle password
function togglePasswordVisibility(passwordFieldId, eyeIconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const eyeIcon = document.getElementById(eyeIconId);

    if (passwordField.type === "password") {
        passwordField.type = "text"; // Show the password
        eyeIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM8 13c-3.866 0-7-4.134-7-5s3.134-5 7-5 7 4.134 7 5-3.134 5-7 5zm0-1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
            </svg>
        `;
    } else {
        passwordField.type = "password"; // Hide the password
        eyeIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
            </svg>
        `;
    }
}