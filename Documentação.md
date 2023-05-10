# Descrição do projeto

Este projeto foi desenvolvido utilizando o framework web ReactJS.
Se passa de uma releitura do jogo "Spider-Shopping" utilizando a franquia "Pokemón".

# Como rodar o jogo

1. Para rodar o jogo, é necessário instalar suas dependências e para isso você terá que instalar o `node` disponível em "https://nodejs.org/en", após o download, dentro do vscode entre no diretório "game" e no terminal rode o comando `npm i` ou "`npm install`", isso irá instalar todas as dependências necessárias para o funcionamento do game.

2. Ainda no vscode dentro do diretório "game", entre no terminal e rode o comando `npm start`, isso irá fazer com que o react crie um servidor local na porta 3000 para rodar o jogo.

# Como funciona o jogo

Levamos em consideração as características de pokemón, ou seja, é um game baseado na captura e busca de pokemons.

Inicialmente será dado ao jogador uma lista com pokemons marcados para captura. O jogador após dar play no game, terá 10 segundos em cada uma das 4 rodadas para capturar os pokemons marcados na lista. Para deixar o jogo mais complicado, nem sempre o jogador irá encontrar o pokemon, por isso em cada rodada temos o botão "busca" que trará novos pokemons, mas não reiniciará o timer e nem contará como uma rodada.

# Sistema de pontos

### `Acertos`
 +5 pontos

### `Erros`
 -5 pontos

### `Repetidos`
 -2 pontos