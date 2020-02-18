import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons = [
    {
      numero: '001', nome: 'Bulbassaur', tipos:['Grass', 'Poison'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },

    {
      numero: '004', nome: 'Charmander', tipos:['Fire'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },

    {
      numero: '007', nome: 'Squirtle', tipos:['Water'], 
      img: 'https://dexaketo.files.wordpress.com/2013/05/squirtle-de-oculos.jpg?w=1400'
    },

    {
      numero: '025', nome: 'Pikachu', tipos:['Eletric'], 
      img: 'https://cdn.dicionariopopular.com/imagens/46482723-914713205554017-4832741937838555136-n-cke.jpg'
    },

    {
      numero: '063', nome: 'Abra', tipos:['Psychic'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png'
    },

    {
      numero: '077', nome: 'Ponyta', tipos:['Fire'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png'
    },

    {
      numero: '079', nome: 'Slowpoke', tipos:['Water', 'Psychic'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png'
    },

    {
      numero: '081', nome: 'Magnamite', tipos:['Eletric', 'Metal'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png'
    },

    {
      numero: '122', nome: 'Mr. Mime', tipos:['Psychic', 'Fairy'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png'
    },

    {
      numero: '130', nome: 'Gyarados', tipos:['Water', 'Flying'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png'
    }

  ];
  public listaFiltrada = [];

  constructor() {}

}
