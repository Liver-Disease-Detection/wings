document.addEventListener('DOMContentLoaded', function() {
    const predictButton = document.getElementById('predictButton');
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');
});
document.addEventListener('DOMContentLoaded', function() {
    const redirectButton = document.getElementById('Next');

    redirectButton.addEventListener('click', function() {
        // Redirect to another HTML page
        window.location.href = 'reports.html';
    });
});