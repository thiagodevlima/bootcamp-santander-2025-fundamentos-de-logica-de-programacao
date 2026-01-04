// Classe que representa um herói de uma aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome; // Nome do herói
    this.idade = idade; // Idade do herói
    this.tipo = tipo; // Tipo do herói (ex: Mago, Guerreiro, Monge, Ninja)
  }

  // Método responsável por realizar o ataque
  atacar() {
    let ataque = "";

    // Estrutura de decisão para definir o ataque conforme o tipo do herói
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido"; // fallback para tipos não previstos
    }

    // Exibe a mensagem final no console
    console.log(`O ${this.tipo} atacou usando ${ataque}.`);
  }
}

// Exemplos de uso da classe
const heroi1 = new Heroi("Felipe", 28, "Mago");
const heroi2 = new Heroi("Thiago", 31, "Guerreiro");
const heroi3 = new Heroi("Akira", 22, "Ninja");

heroi1.atacar(); // Saída: O Mago atacou usando magia.
heroi2.atacar(); // Saída: O Guerreiro atacou usando espada.
heroi3.atacar(); // Saída: O Ninja atacou usando shuriken.
