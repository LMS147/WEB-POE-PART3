// Contact form validation script
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Helper function to display error messages
    function showError(input, message) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-message');
        if (!error) {
            const errorMsg = document.createElement('p');
            errorMsg.className = 'error-message';
            errorMsg.style.color = 'red';
            errorMsg.textContent = message;
            parent.appendChild(errorMsg);
        }
    }

    // Remove error message if input is corrected
    function removeError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-message');
        if (error) {
            parent.removeChild(error);
        }
    }

    // Validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Validate form on submit
    form.addEventListener('submit', function (e) {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required.');
            isValid = false;
        } else {
            removeError(nameInput);
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email.');
            isValid = false;
        } else {
            removeError(emailInput);
        }

        // Validate subject
        if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'Subject is required.');
            isValid = false;
        } else {
            removeError(subjectInput);
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message cannot be empty.');
            isValid = false;
        } else {
            removeError(messageInput);
        }

        // Prevent form submission if any field is invalid
        if (!isValid) {
            e.preventDefault();
        } else {
            alert('Thank you for reaching out! We will get back to you soon.');
        }
    });
});
