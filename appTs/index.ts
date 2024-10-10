const form = <HTMLFormElement>document.getElementById('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const formDate = new FormData(form);
	const data = Object.fromEntries(formDate);
	console.log(data);

	fetch('http://localhost:3000/salvar', {
		method: 'post',
		headers: {
			'content-type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(data),
	});
});
