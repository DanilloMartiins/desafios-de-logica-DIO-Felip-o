function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 0 || derrotas < 0) {
    return { saldoVitorias, nivel: "Dados inválidos" };
  } else if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldoVitorias, nivel };
}

// Exemplos com laço de repetição
const jogadores = [
  { vitorias: 8, derrotas: 3 },
  { vitorias: 20, derrotas: 3 },
  { vitorias: -2, derrotas: 3 },
  { vitorias: 35, derrotas: 10 },
  { vitorias: 75, derrotas: 20 },
  { vitorias: 102, derrotas: 12 }
];

for (let i = 0; i < jogadores.length; i++) {
  const resultado = calcularNivel(jogadores[i].vitorias, jogadores[i].derrotas);
  console.log(
    `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
  );
}
