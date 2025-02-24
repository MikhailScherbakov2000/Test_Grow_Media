document.getElementById('register_form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const errors = document.querySelectorAll('.error_message');
    errors.forEach(error => error.style.display = 'none');

    let valid = true;

    const name = document.getElementById('name').value;
    if (!name.trim()) {
        document.getElementById('name_error').style.display = 'block';
        valid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email_error').style.display = 'block';
        valid = false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+7\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phone_error').style.display = 'block';
        valid = false;
    }

    const revenue = document.getElementById('revenue').value;
    if (revenue < 0) {
        document.getElementById('revenue_error').style.display = 'block';
        valid = false;
    }

    const industry = document.getElementById('industry').value;
    if (!industry) {
        document.getElementById('industry_error').style.display = 'block';
        valid = false;
    }

    const agreement = document.getElementById('agreement').checked;
    if (!agreement) {
        document.getElementById('agreement_error').style.display = 'block';
        valid = false;
    }

    if (valid) {
        document.getElementById('successMessage').style.display = 'block';
    }
});
