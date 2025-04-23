document.addEventListener('DOMContentLoaded', () => {
    const banButtons = document.querySelectorAll('.ban-button');

    banButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mapSlot = button.parentElement;
            mapSlot.remove();
        });
    });
});