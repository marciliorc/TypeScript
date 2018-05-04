import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'


/* --- Criar Carros --- */
let carroA = new Carro("Corsa", 2);
let carroB = new Carro("Veloster", 3);
let carroC = new Carro("Passat", 4);

/* --- Listar Carros --- */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

/* --- Montar Lista de Carros --- */
let concessionaria = new Concessionaria("Av. Paulista", listaDeCarros);

/* --- Exibir Lista de Carros ---*/
//console.log(concessionaria.mostrarListaDeCarros())

/* --- Comprar Carro --- */
let cliente = new Pessoa('Manel', 'Passat')
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {

    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //Comprar o Carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())


