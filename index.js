const { default: axios } = require('axios');

const logData = async () => {
	const apuracoes = await axios("https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/am/am-c0001-e000545-r.json")
	
		.then(res => res.data.cand.map(cand => ({ name: cand.nm, votos: cand.vap, porcentagem: cand.pvap })));
	console.table(apuracoes);
	setTimeout(logData, 60000 * 2);
} 

logData();