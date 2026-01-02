// Lista de heróis com seus respectivos pontos de experiência (XP)
let herois = [
  { nome: "Aragorn", xp: 750 },
  { nome: "Legolas", xp: 3500 },
  { nome: "Gimli", xp: 9500 },
  { nome: "Gandalf", xp: 12000 },
];

// Percorre cada herói da lista
for (let heroi of herois) {
  let nivel = ""; // Variável para armazenar o nível do herói

  // Classificação do nível com base na quantidade de XP
  if (heroi.xp < 1000) nivel = "Ferro";
  else if (heroi.xp <= 2000) nivel = "Bronze";
  else if (heroi.xp <= 5000) nivel = "Prata";
  else if (heroi.xp <= 7000) nivel = "Ouro";
  else if (heroi.xp <= 8000) nivel = "Platina";
  else if (heroi.xp <= 9000) nivel = "Ascendente";
  else if (heroi.xp <= 10000) nivel = "Imortal";
  else nivel = "Radiante"; // Para XP acima de 10.000

  // Exibe no console o nome do herói e seu nível correspondente
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
