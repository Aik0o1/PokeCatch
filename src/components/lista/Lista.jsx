import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import "./Lista.css"
import prof from './assets/prof.png'
import Pokebola from "./assets/pokebola.png"
export default props => {

    const [fullscreen, setFullscreen] = useState(true)
    const [show, setShow] = useState(true)

    const handleClose = () => setShow(false)

    const handlePlayClick = () => {
        handleClose()
        props.handlePlayClick()

    }

    // verifica se o game ja foi rodado 4 vezes para gerar uma nova lista
    useEffect(() => {
        if (props.contador === 4) {
            props.contarPontos()
            props.setNamesAllPokemons(props.nomesAleatoriosEscolhidos())
            setShow(true)
            
        }
    }, [props.contador])

    return (
        <>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>

                <Modal.Body>
                    <div className="lista-pokemon">
                        <div className="titulo-main">
                            <h1>
                                <span className='poke'>P<img src={Pokebola} alt="pokebola" />ke</span>
                                <span className='catch'>Catch</span>
                            </h1>
                        </div>
                        <h3 className='titulo'>Lista de Captura</h3>
                        <div className="nomes">
                            {
                                props.lista_nomes_pokemon.map(pokemon =>
                                    <section className="nome_pokemon">
                                        <input id="para-captura" type="checkbox" name="check" checked={pokemon.check} readOnly />
                                        <label for="para-captura">{pokemon.name}</label>
                                    </section>
                                )
                            }
                            <div className="pontos">
                                <p>Corretos: {props.corretos} </p>
                                <p>Incorretos: {props.incorretos} </p>
                                <p>Repetidos: {props.repetidos} </p>
                                <p>Pontos: {props.pontos}</p>

                            </div>
                        </div>
                        <div className="content">
                            <div className="dificuldade">
                                <button className='botao-dificuldade facil' name='facil' onClick={e => props.setDificuldade(e.target.name)}>Fácil</button>
                                <button className='botao-dificuldade medio' name='medio' onClick={e => props.setDificuldade(e.target.name)}>Médio</button>
                                <button className='botao-dificuldade dificil' name='dificil' onClick={e => props.setDificuldade(e.target.name)}>Difícil</button>
                            </div>
                            <div className="botoes-menu">
                                <button onClick={handlePlayClick}>Play</button>
                            </div>
                            <div className="prof">
                                <p className="fala">Esses são os pokemóns que você deve capturar</p>
                                <img src={prof} alt="carvalho" />
                            </div>

                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
