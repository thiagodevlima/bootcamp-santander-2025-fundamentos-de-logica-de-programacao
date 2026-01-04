# 🕹️ Desafio 3 - Escrevendo as Classes de um Jogo

## 📌 O que deve ser utilizado

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão
- Funções
- Classes e Objetos

## 🎯 Objetivo

Criar uma classe genérica que represente um **herói de uma aventura**, contendo as seguintes propriedades:

- `nome`
- `idade`
- `tipo` (ex: guerreiro, mago, monge, ninja)

Além disso, a classe deve possuir um método chamado **`atacar`**, que deve atender aos seguintes requisitos:

- Exibir a mensagem:

`O ${tipo} atacou usando ${ataque}.`

- O `{tipo}` deve ser o valor da propriedade `tipo` da classe.
- O `{ataque}` deve variar conforme o tipo do herói, seguindo a tabela abaixo:

| Tipo      | Ataque         |
| --------- | -------------- |
| Mago      | magia          |
| Guerreiro | espada         |
| Monge     | artes marciais |
| Ninja     | shuriken       |

## 🖥️ Saída esperada

Ao final, deve ser exibida uma mensagem como nos exemplos abaixo:

`O Mago atacou usando magia.`
`O Guerreiro atacou usando espada.`
