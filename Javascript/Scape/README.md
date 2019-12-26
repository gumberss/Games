# Objetivo

- Passar o máximo de fases sem perder


# Regras

- Há 2 tipos de jogadores, fugitivo e guarda
   - A quantidade de guardas é limitada
   - A quantidade de fugitivo é ilimitada
   - O Jogador pode ser guarda apenas se não extrapolou o  limite de guardas
- O fugitivo vai começar sempre em uma pista **azul claro** em algum lugar do canvas
- O fugitivo deve chegar até o quadrado **verde** localizado em algum lugar do canvas
- O fugitivo não pode esbarrar em qualquer obstaculo que tiver no meio do caminho
- Ao esbarrar em algum obstaculo, o fugitivo é movimentado para a posição inicial e perde uma vida
- Ao ser pego por um guarda, o fugitivo é movimentado para a posição inicial e perde uma vida
- Ao chegar até o quadrado verde, o jogador será redirecionado para a próxima fase
- Caso o fugitivo esteja sobre a pista **azul claro**, o guarda não pode pegá-lo
- O jogador pode escolher entre 3 personagens
  - Fugitivo rosa: fica invisível por 1 segundo
  - Fugitivo azul escuro: fica intocável por 1 segundo
  - Fugitivo amarelo: afasta obstáculos próximos 
  - Guarda: Bloqueia o quadrado verde por 100 milésimos 
- O especial só pode ser executado uma vez a cada 10 segundos
 - O especial de cada personagem é acionado ao apertar barra de espaço
 - Caso as vidas do jogador acabem, ele será redirecionado a primeira fase novamente
 - O jogador deve começar com 10 vidas
 - Um fugitivo é pego por um guarda ou esbarra em um objeto se estiver na mesma posição do guarda ou de um objeto