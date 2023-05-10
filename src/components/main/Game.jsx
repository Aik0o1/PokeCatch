import React, { useEffect, useState, useRef } from "react"
import "./Game.css"
import Lista from "../lista/Lista"
import Ash from "./assets/Ash.png"
import gif from "./assets/pikachu.gif"
export default (props) => {
  const [exibirImagens, setExibirImagens] = useState(false)
  const [temporizador, setTemporizador] = useState(null)
  let [contador, setCont] = useState(-1)
  let [contRepeticao, setRepeticao] = useState(0)
  let [contAcertos, setAcertos] = useState(0)
  let [contErros, setErros] = useState(0)
  let [contPontos, setPontos] = useState(0)
  const [tempo, setTempo] = useState(10000)
  const intervalRef = useRef(null)

  useEffect(() => {
    props.setarImagens()
  }, [])

  const handlePokebolaClick = () => {
    setCont(contador += 1)
    clearInterval(intervalRef.current) // Limpa o intervalo anterior
    props.setarImagens()
    setExibirImagens(true)
    setTemporizador(tempo / 1000) // Inicia o temporizador ao clicar no pokemon
    if (contador === 5) {
      setCont(0)
    }

    const intervalo = setInterval(() => {
      props.setarImagens()
      setCont(contador += 1)
      if (contador === 5) {
        setCont(-1)
        return clearInterval(intervalo)
      }
      setPontos(contPontos -= 5)

      setTemporizador(tempo / 1000) // Reinicia o temporizador a cada intervalo
    }, tempo)

    intervalRef.current = intervalo

    if(contPontos > 70){ //faz pikachu andar na tela
    console.log(contPontos)
      handleShowGif()}
  }

  const handleSearchPokemon = () => {
    props.setarImagens()
    setExibirImagens(true)
  }

  useEffect(() => {
    let interval = null
    if (temporizador !== null && temporizador > 0) {
      interval = setInterval(() => {
        setTemporizador(temporizador - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [temporizador])


  
  // função que será acionada ao clicar na imgam pokemom
  //salva os nomes em um array para ser contabilizado os pontos
  //tambem incrementa o num de repetições
  const [pokemonsSelecionados, setPokemonsSelecionados] = useState([])
  const [contIndice, setContIndice] = useState(0)
  
  const selecionarPokemon = (pokemon) => {
    props.setIndice(contIndice)
    if (contIndice === 3) {
      setContIndice(0)
      setPokemonsSelecionados([])
    }
    setContIndice((prevCont) => prevCont + 1)
    const nomePokemon = pokemon
    if (pokemonsSelecionados.includes(nomePokemon)) {
      setPokemonsSelecionados(pokemonsSelecionados.filter((p) => p !== nomePokemon))
      setRepeticao((prevContRepeticao) => prevContRepeticao + 1)
      setPontos(contPontos -= 2)
    } else {
      setPokemonsSelecionados([...pokemonsSelecionados, nomePokemon])
    }
  }

  //função que compara o array com pokemons p/ captura com o de pokemons capturados
  //para contabilizar os pontos
  const contarPontos = () => {

    let erros = 0
    const pokemonsNamesCheck = props.lista_nomes_pokemon.filter(pokemon => pokemon.check === true)
    pokemonsSelecionados.forEach(pokeSelecionado => {
      if (pokemonsNamesCheck.some(pokemon => pokemon.name === pokeSelecionado)) {
        setAcertos(contAcertos += 1)
        setPontos(contPontos += 5)

      } else {
        setErros(contErros += 1)
        setPontos(contPontos -= 5)
      }
      setPokemonsSelecionados([])
    })
    if (contPontos < 0) setPontos(0)
  }


  //Dificuldade
  const setDificuldade = dificuldade => {
    if (dificuldade === 'facil') { setTempo(12000); setTemporizador(12) }
    if (dificuldade === 'medio') { setTempo(10000); setTemporizador(10) }
    if (dificuldade === 'dificil') { setTempo(7000); setTemporizador(7) }
  }

  //pikachu andando na tela

  const [showGif, setShowGif] = useState(false);

  const handleShowGif = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
    }, 7000); // tempo em milissegundos que o GIF ficará na tela
  };

  return (
    <div className="game">
      <Lista contador={contador}
        lista_nomes_pokemon={props.lista_nomes_pokemon}
        handlePlayClick={handlePokebolaClick}
        nomesAleatoriosEscolhidos={props.nomesAleatoriosEscolhidos}
        setNamesAllPokemons={props.setNamesAllPokemons}
        contarPontos={contarPontos}
        corretos={contAcertos}
        pontos={contPontos}
        incorretos={contErros}
        repetidos={contRepeticao}
        setTempo={setTempo}
        setTemporizador={setTemporizador}
        setDificuldade={setDificuldade}

      />
      <div className="timer">Tempo restante: {temporizador}</div>
      <img src={Ash} alt="ash" className="ash" />
      <div className="pokemons">
        {exibirImagens && (
          <ul className="listaPokemonsImgRandom">

            {showGif && (
              <div className="gif-container">
                <img src={gif} alt="gif animado" className="gif" />
              </div>
            )}

            {props.imagensPokemons.map((imagem) => (
              <li key={imagem} onClick={(pokemon) => selecionarPokemon(pokemon.target.name)}
                className="img-pokemon">

                <img onClick={handlePokebolaClick}
                  src={imagem}
                  alt="pokemon"
                  name={imagem.split('/')[3].split('.')[0]}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="search" onClick={handleSearchPokemon}>Procurar</button>
    </div>
  )
}
