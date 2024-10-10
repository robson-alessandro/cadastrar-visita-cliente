const express = require('express');
const cors = require('cors');
const { gravarDados } = require('./servicos/servicos.js');

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post('/salvar', gravarDados);

app.listen(port, () => {
	console.log('escutando porta 3000');
});
