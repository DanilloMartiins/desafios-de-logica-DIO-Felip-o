const herois = [
  { nome: "Arthas", xp: 11000 },
  { nome: "Jaina", xp: 3200 },
  { nome: "Thrall", xp: 10500 }
];

for (let i = 0; i < herois.length; i++) {
  const nome = herois[i].nome;
  const xp = herois[i].xp;
  let nivel = "";

if (xp <= 0) nivel = "XP inválido";
else if (xp <= 1000) nivel = "Ferro";
else if (xp <= 2000) nivel = "Bronze";
else if (xp <= 5000) nivel = "Prata";
else if (xp <= 7000) nivel = "Ouro";
else if (xp <= 8000) nivel = "Platina";
else if (xp <= 9000) nivel = "Ascendente";
else if (xp <= 10000) nivel = "Imortal";
else nivel = "Radiante";




  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
