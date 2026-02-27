# 2️⃣ Calculadora de Partidas Rankeadas

Projeto desenvolvido para o desafio da DIO com foco em lógica de programação usando JavaScript.

## 🎯 Objetivo

Criar uma função que recebe a quantidade de vitórias e derrotas de um jogador, calcula o saldo e determina o nível do herói.

- **Saldo de vitórias** = `vitórias - derrotas`
- **Nível** definido com base na quantidade de vitórias

## 📋 Regras de Classificação

- `<= 10` vitórias: **Ferro**
- `11 a 20` vitórias: **Bronze**
- `21 a 50` vitórias: **Prata**
- `51 a 80` vitórias: **Ouro**
- `81 a 90` vitórias: **Diamante**
- `91 a 100` vitórias: **Lendário**
- `>= 101` vitórias: **Imortal**

## 🖥️ Saída Esperada

```txt
O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}
```

## 📂 Estrutura do Projeto

```txt
.
├── classificaçãoRanked.js
└── README.md
```

## ▶️ Como Executar

1. Abra o terminal na pasta do projeto.
2. Execute:

```bash
node classificaçãoRanked.js
```

## 💡 Exemplo de Código

```javascript
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
```

## 🧠 Conceitos Aplicados

- Variáveis
- Operadores aritméticos
- Estruturas condicionais (`if / else if / else`)
- Laço de repetição (`for`)
- Funções com retorno de objeto

## 👨‍💻 Autor

Danillo Martins

