import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lista from "../components/lista/Lista";
import Game from "../components/main/Game";
import "./App.css"

//imagens
import Pikachu from './assets/Pikachu.png'; import Charmander from './assets/Charmander.png'; import Squirtle from './assets/Squirtle.png'
import Pidgey from './assets/Pidgey.png'; import Bulbasaur from './assets/Bulbasaur.png'; import Ampharos from './assets/Ampharos.png'
import Arbok from './assets/Arbok.png'; import Arcanine from './assets/Arcanine.png'; import Beedrill from './assets/Beedrill.png';
import Butterfree from './assets/Butterfree.png'; import Celebi from './assets/Celebi.png';
import Cubone from './assets/Cubone.png'; import Delcatty from './assets/Delcatty.png'; import Dragonite from './assets/Dragonite.png';
import Dratini from './assets/Dratini.png'; import Eevee from './assets/Eevee.png'; import Entei from './assets/Entei.png'; import Exeggutor from './assets/Exeggutor.png';
import Furret from './assets/Furret.png'; import Gengar from './assets/Gengar.png'; import Gloom from './assets/Gloom.png'; import Gyarados from './assets/Gyarados.png';
import Heracross from './assets/Heracross.png'; import Jigglypuff from './assets/Jigglypuff.png'; import Jirachi from './assets/Jirachi.png';
import Lapras from './assets/Lapras.png'; import Lickitung from './assets/Lickitung.png'; import Lucario from './assets/Lucario.png';
import Machamp from './assets/Machamp.png'; import Mankey from './assets/Mankey.png'; import Metagross from './assets/Metagross.png';
import Mewtwo from './assets/Mewtwo.png'; import Ninetales from './assets/Ninetales.png'; import Onix from './assets/Onix.png'; import Palkia from './assets/Palkia.png';
import Psyduck from './assets/Psyduck.png'; import Rattata from './assets/Rattata.png'; import Scyther from './assets/Scyther.png';
import Slowpoke from './assets/Slowpoke.png'; import Snorlax from './assets/Snorlax.png'; import Staraptor from './assets/Staraptor.png';
import Suicune from './assets/Suicune.png'; import Swadloon from './assets/Swadloon.png'; import Togepi from './assets/Togepi.png'; import Tyranitar from './assets/Tyranitar.png';
import Umbreon from './assets/Umbreon.png'; import Ursaring from './assets/Ursaring.png'; import Wobbuffet from './assets/Wobbuffet.png';
import Zangoose from './assets/Zangoose.png'; import Zoroark from './assets/Zoroark.png';

export default props => {

    const Pokemons = [{ name: "Pikachu", img: Pikachu }, { name: "Squirtle", img: Squirtle }, { name: "Pidgey", img: Pidgey }, { name: "Bulbasaur", img: Bulbasaur }, { name: "Charmander", img: Charmander }, { name: "Butterfree", img: Butterfree }, { name: "Beedrill", img: Beedrill }, { name: "Rattata", img: Rattata }, { name: "Arbok", img: Arbok }, { name: "Ninetales", img: Ninetales }, { name: "Jigglypuff", img: Jigglypuff }, { name: "Gloom", img: Gloom }, { name: "Psyduck", img: Psyduck }, { name: "Mankey", img: Mankey }, { name: "Arcanine", img: Arcanine }, { name: "Machamp", img: Machamp }, { name: "Slowpoke", img: Slowpoke }, { name: "Gengar", img: Gengar }, { name: "Onix", img: Onix }, { name: "Exeggutor", img: Exeggutor }, { name: "Cubone", img: Cubone }, { name: "Lickitung", img: Lickitung }, { name: "Scyther", img: Scyther }, { name: "Gyarados", img: Gyarados }, { name: "Lapras", img: Lapras }, { name: "Eevee", img: Eevee }, { name: "Snorlax", img: Snorlax }, { name: "Dratini", img: Dratini }, { name: "Mewtwo", img: Mewtwo }, { name: "Dragonite", img: Dragonite }, { name: "Furret", img: Furret }, { name: "Togepi", img: Togepi }, { name: "Ampharos", img: Ampharos }, { name: "Umbreon", img: Umbreon }, { name: "Wobbuffet", img: Wobbuffet }, { name: "Heracross", img: Heracross }, { name: "Ursaring", img: Ursaring }, { name: "Entei", img: Entei }, { name: "Suicune", img: Suicune }, { name: "Tyranitar", img: Tyranitar }, { name: "Celebi", img: Celebi }, { name: "Delcatty", img: Delcatty }, { name: "Zangoose", img: Zangoose }, { name: "Metagross", img: Metagross }, { name: "Jirachi", img: Jirachi }, { name: "Staraptor", img: Staraptor }, { name: "Lucario", img: Lucario }, { name: "Palkia", img: Palkia }, { name: "Swadloon", img: Swadloon }, { name: "Zoroark", img: Zoroark }]

    //Component Lista
    //Irá pegar 7 nomes pokemon aleatorios do array Pokemons
    function nomesAleatoriosEscolhidos() {
        let nomesEscolhidos = []
        for (let i = 0; i < 7;) {
            const indiceRandom = Math.floor(Math.random() * Pokemons.length)

            // verifica se o elemento atual já está incluido no array
            if (nomesEscolhidos.includes(Pokemons[indiceRandom]))
                continue
            nomesEscolhidos.push(Pokemons[indiceRandom])
            i++
        }

        //Irá definir quais pokemon irão ser marcados para captura na lista
        let indices = []
        for (let i = 0; i < 4;) {
            const indiceCheckRandom = Math.floor(Math.random() * 7)
            if (indices.includes(indiceCheckRandom))
                continue
            indices.push(indiceCheckRandom)
            nomesEscolhidos[indiceCheckRandom].check = true
            i++
        }
        return nomesEscolhidos
    }

    const [AllPokemons, setNamesAllPokemons] = useState(nomesAleatoriosEscolhidos())

    //Component Game

    const [imagensPokemonsSelecionadas, setImagens] = useState([])
    //Função que irá juntar 4 imagens pokemons aleatorias à imagem checkada
    let imgPokemonsChecks = AllPokemons.filter(pokemon => pokemon.check === true) //pega os pokemons marcados
    let [indice, setIndice] = useState(0)
    function setarImagens() {

        const imagens = []
        let indices = []
        let indicesRandomCheck = []

        for (let i = 0; i < 5;) {
            const indiceRandom = Math.floor(Math.random() * 50)
            if (indices.includes(indiceRandom)) { //faz com que não haja imagens duplicadas
                continue
            }
            else {
                imagens.push(Pokemons[indiceRandom].img)
                indices.push(indiceRandom)
                i++
            }
        }

        // adiciona a imagem de um dos pokemons marcados para captura para o array de imagens 
        const indiceRandom = Math.floor(Math.random() * 5)
        const indiceRandomPokemonsCheck = Math.floor(Math.random() * 4)

        if (imagens.includes(imgPokemonsChecks[indiceRandomPokemonsCheck].img)) { } // verifica se a imagem ja está incluida no array para não haver duplicação
        else {

            if (indicesRandomCheck.includes(indiceRandomPokemonsCheck)) { }
            else {
                imagens[indiceRandom] = imgPokemonsChecks[indiceRandomPokemonsCheck].img
            }
        }
        setImagens(imagens)
    }


    return (

        <div className="app " style={{ cursor: 'url(game/src/components/main/assets/Pokebola.cur), auto' }} >
            <Game setNamesAllPokemons={setNamesAllPokemons} lista_nomes_pokemon={AllPokemons} nomesAleatoriosEscolhidos={nomesAleatoriosEscolhidos} imagensPokemons={imagensPokemonsSelecionadas} setarImagens={setarImagens}
                imgPokemonsChecks={imgPokemonsChecks}
                setIndice={setIndice}></Game>
        </div>

    )
}