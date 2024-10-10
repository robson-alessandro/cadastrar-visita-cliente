const fs = require('fs');

function gravarDados(req, res) {
	const visitas = JSON.parse(fs.readFileSync('visitas.json', 'utf-8'));
	const novaVisita = req.body;
	const listaVisitasAtualizado = [...visitas, novaVisita];
	fs.writeFileSync('visitas.json', JSON.stringify(listaVisitasAtualizado));
}

module.exports = {
	gravarDados,
};
