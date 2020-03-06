import { Component } from '@angular/core';
import { DadosService } from '../servicos/dados.service';
import { Router } from '@angular/router';
import { PokemonApiService } from '../servicos/pokemon-api.service';

export interface IPokemon {
  numero: string;
  nome: string;
  tipos: string[];
  img: string;

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons = [
    {
      numero: '001', nome: 'Bulbassaur', tipos: ['Grass', 'Poison'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },

    {
      numero: '004', nome: 'Charmander', tipos: ['Fire'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },

    {
      numero: '007', nome: 'Squirtle', tipos: ['Water'],
      img: 'https://dexaketo.files.wordpress.com/2013/05/squirtle-de-oculos.jpg?w=1400'
    },

    {
      numero: '025', nome: 'Pikachu', tipos: ['Eletric'],
      img: 'https://cdn.dicionariopopular.com/imagens/46482723-914713205554017-4832741937838555136-n-cke.jpg'
    },

    {
      numero: '063', nome: 'Abra', tipos: ['Psychic'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png'
    },

    {
      numero: '077', nome: 'Ponyta', tipos: ['Fire'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png'
    },

    {
      numero: '079', nome: 'Slowpoke', tipos: ['Water', 'Psychic'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png'
    },

    {
      numero: '081', nome: 'Magnamite', tipos: ['Eletric', 'Metal'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png'
    },

    {
      numero: '122', nome: 'Mr. Mime', tipos: ['Psychic', 'Fairy'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png'
    },

    {
      numero: '130', nome: 'Gyarados', tipos: ['Water', 'Flying'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png'
    }

  ];
  public listaFiltrada = [];

  public listaPokemonApi = [];
  public totalPokemons;
  public offset = 0;
  public limit = 10;
  public paginaAtual = 0;



  public buscarPokemon(evento: any) {
    let busca = evento.target.value;

    this.resetarLista();

    if (busca && busca.trim() != '') {

      this.listaFiltrada = this.listaFiltrada.filter(dados => {
        if (dados.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1) {
          return true;
        }
        else if (dados.numero.toLowerCase().indexOf(busca.toLowerCase()) > -1) {
          return true;
        }
        return false;
      });

      /*
      this.listaFiltrada = this.listaFiltrada.filter(dados =>{
        if (dados.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1) || (dados.numero.toLowerCase().indexOf(busca.toLowerCase()) > -1){
          return true;
        }
        return false; 
        */

    }

  };

  constructor(public dadosService: DadosService, public router: Router, public pokeApi: PokemonApiService) {

    this.buscarPokemons(this.offset, this.limit)
  }
  public buscarPokemons(offset, limit) {
    if (this.offset <= offset) {
      this.paginaAtual++;
      
    } else {
      //Atualiza o offset geral
      this.paginaAtual--;
    }
    this.offset = offset;

    this.pokeApi.buscarPokemons(offset, limit).subscribe(dados => {
      this.listaPokemonApi = [];
      this.totalPokemons = dados['count'];
      let listaApi = dados['results'];

      //Percorre a lista e busca na Api os dados de pokemon
      for (let item of listaApi) {
        this.pokeApi.buscaPokemonUrl(item.url).subscribe(dado => {
          //Add os dados do pokemon ao final da lista 
          this.listaPokemonApi.push(dado);

        })
      }
      //Atualizar a listaFiltrada com os pokemons buscados
      this.resetarLista();
    })
  }

  abrirDadosPokemon(pokemon: IPokemon) {
    console.log(pokemon);
    //Salva os dados do pokemon no BD Virtual.
    this.dadosService.setDados('dadosPokemon', pokemon)

    //Abre a página para exibir os dados.
    this.router.navigateByUrl('/dados-pokemon');


  }

  private resetarLista() {
    // this.listaFiltrada = this.listaPokemons;
    this.listaFiltrada = this.listaPokemonApi;
  }



}
