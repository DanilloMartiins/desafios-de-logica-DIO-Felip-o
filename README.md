# Classificador de Nível de Herói

Projeto desenvolvido para o desafio de lógica da DIO.

## Objetivo

Classificar o nível de um herói com base na quantidade de experiência (XP), exibindo a mensagem final no formato:

`O Herói de nome {nome} está no nível de {nivel}`

## Regras de Classificação

- XP menor que 0 -> XP inválido
- XP de 0 até 1000 -> Ferro
- XP de 1001 até 2000 -> Bronze
- XP de 2001 até 5000 -> Prata
- XP de 5001 até 7000 -> Ouro
- XP de 7001 até 8000 -> Platina
- XP de 8001 até 9000 -> Ascendente
- XP de 9001 até 10000 -> Imortal
- XP maior que 10000 -> Radiante

## Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=FFFFFF)

## Estrutura do Projeto

- `Classificador nivel heroi.js`: código principal com a lógica de classificação.
- `README.md`: documentação do projeto.

## Como Executar

1. Abra o terminal na pasta do projeto.
2. Execute o comando:

```bash
node "Classificador nivel heroi.js"
```

## Exemplo de Saída

```text
O Herói de nome Arthas está no nível de Ferro
O Herói de nome Jaina está no nível de Prata
O Herói de nome Thrall está no nível de Radiante
```

## Conceitos Praticados

- Variáveis
- Operadores relacionais e lógicos
- Estruturas de decisão (`if`, `else if`, `else`)
- Laço de repetição (`for`)

## Autor

Danillo Martins