const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//A
const copiaPokemon1 = {
    ...pokemon1,
nome: "Squirtle",
tipo: "água",

}
//B
pokemon1.ataques = []

//C
const ataque = {
	nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
}
pokemon1.ataques.push(ataque)

//D
copiaPokemon1.ataques = [...pokemon1.ataques]


//E 

pokemon1.ataques = [{
	ataque: "folha de navalha",
	dano: 45,
	pecisao: 100,
	tipo: "grama"
}]
console.log(pokemon1)
//F
copiaPokemon1.ataques = [{
	ataque: "jato de água",
	dano: 40,
	precisao: 100,
	tipo: "água"
}]
console.log(copiaPokemon1)
/*//B
pokemon1.ataques = []
//C
const ataque = {
	nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
}
pokemon1.ataques.push(ataque)


pokemon1.ataques.push(ataque)
pokemon1.ataques = [
	{
nome: "folha de navalha",
dano: 45,
precicao: 100,
tipo: "grama"
}
]
//D
copiaPokemon1.ataques = [{
	nome: "jato de água",
	dano: 40,
	precicao: 100,
	tipo: "água"
}]
// ----------------- OU -----------------
copiaPokemon1.ataques = [...copiaPokemon1.ataque]

console.log(pokemon1)
console.log(copiaPokemon1)*/