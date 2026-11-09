function showConfirmation() {
    const box = document.getElementById('confirmation');
    box.textContent = 'Thank you! Your message has been received.';
    box.style.display = 'block';
}

function toggleDetails() {
    const details = document.getElementById('program-details');
    details.hidden = !details.hidden;
}
