document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Display a confirmation message (could be expanded to send data to a server)
    alert(`Appointment booked for ${name} with ${doctor} on ${date} at ${time}. We will contact you at ${email} or ${phone}.`);
});
