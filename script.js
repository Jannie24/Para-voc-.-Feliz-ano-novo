document.addEventListener('DOMContentLoaded', function() {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');

    heart.addEventListener('click', function() {
        if (message.textContent === 'Feliz ano novo!') {
            message.textContent = 'Espero tornar cada momento único ao seu lado';
        } else {
            message.textContent = 'Estou feliz por ter conhecido você!';
        }
    });
});
