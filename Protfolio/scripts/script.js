// Modify your existing script.js
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links and other existing code

    // Add contact form submission handling
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Add your form submission logic here
        // You can use XMLHttpRequest, fetch, or a form submission service

        // Example using Formspree (replace 'YOUR_EMAIL' with your actual email)
        const formData = new FormData(contactForm);
        fetch('https://formspree.io/your_email', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle the success or error response
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
