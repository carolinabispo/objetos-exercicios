const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️
//A
const primeiroAtor = filme.elenco[0]
console.log(primeiroAtor)
//B
const ultimoAtor = filme.elenco[3]
console.log(ultimoAtor)
//C
const mostrarExibicoes = filme.transmissoesHoje
console.log(`transmissões de hoje:`, mostrarExibicoes)

//D
const horaCanalBrasil = filme.transmissoesHoje[1].horario
console.log(`hrário exibição canal brasil: `, horaCanalBrasil)