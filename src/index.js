const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formDate = new FormData(form);
    const data = Object.fromEntries(formDate);
});
