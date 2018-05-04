"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* --- Criar Carros --- */
var carroA = new Carro_1.default("Corsa", 2);
var carroB = new Carro_1.default("Veloster", 3);
var carroC = new Carro_1.default("Passat", 4);
/* --- Listar Carros --- */
var listaDeCarros = [carroA, carroB, carroC];
/* --- Montar Lista de Carros --- */
var concessionaria = new Concessionaria_1.default("Av. Paulista", listaDeCarros);
/* --- Exibir Lista de Carros ---*/
//console.log(concessionaria.mostrarListaDeCarros())
/* --- Comprar Carro --- */
var cliente = new Pessoa_1.default('Manel', 'Passat');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //Comprar o Carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
