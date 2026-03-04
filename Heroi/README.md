# 1️⃣ Classificador de Nível de Herói

Projeto desenvolvido para o desafio da DIO com foco em lógica de programação usando JavaScript.

## 🎯 Objetivo

Criar uma lógica que classifica o nível de um herói com base na sua experiência (XP) e exibe a mensagem final no console.

- **Entrada**: nome do herói e XP
- **Saída**: nível correspondente à faixa de XP

## 📋 Regras de Classificação

- `XP < 0`: XP inválido
- `0 a 1000`: Ferro
- `1001 a 2000`: Bronze
- `2001 a 5000`: Prata
- `5001 a 7000`: Ouro
- `7001 a 8000`: Platina
- `8001 a 9000`: Ascendente
- `9001 a 10000`: Imortal
- `>= 10001`: Radiante

## 🖥️ Saída Esperada

```txt
O Herói de nome {nome} está no nível de {nivel}
```

## 📂 Estrutura do Projeto

```txt
.
├── classificadorNivelDeHeroi.js
└── README.md
```

## ▶️ Como Executar

1. Abra o terminal na pasta deste desafio (`Heroi`).
2. Execute:

```bash
node classificadorNivelDeHeroi.js
```

## 💡 Exemplo de Código

```javascript
const herois = [
  { nome: "Arthas", xp: 11000 },
  { nome: "Jaina", xp: 3200 },
  { nome: "Thrall", xp: 10500 }
];

for (let i = 0; i < herois.length; i++) {
  const nome = herois[i].nome;
  const xp = herois[i].xp;
  let nivel = "";

  if (xp < 0) nivel = "XP inválido";
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
```

## 🧠 Conceitos Aplicados

- Variáveis
- Operadores relacionais e lógicos
- Estruturas condicionais (`if / else if / else`)
- Laço de repetição (`for`)

## 👨‍💻 Autor

Danillo Martins
