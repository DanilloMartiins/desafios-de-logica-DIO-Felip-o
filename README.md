# Classificador de NÃ­vel de HerÃ³i

Projeto desenvolvido para o desafio de lÃ³gica da DIO.

## Objetivo

Classificar o nÃ­vel de um herÃ³i com base na quantidade de experiÃªncia (XP), exibindo a mensagem final no formato:

`O HerÃ³i de nome {nome} estÃ¡ no nÃ­vel de {nivel}`

## Regras de Classificaï¿½ï¿½o

- XP menor que 0 -> XP invÃ¡lido
- XP de 0 atÃ© 1000 -> Ferro
- XP de 1001 atÃ© 2000 -> Bronze
- XP de 2001 atÃ© 5000 -> Prata
- XP de 5001 atÃ© 7000 -> Ouro
- XP de 7001 atÃ© 8000 -> Platina
- XP de 8001 atÃ© 9000 -> Ascendente
- XP de 9001 atÃ© 10000 -> Imortal
- XP maior que 10000 -> Radiante

## Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000) 
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=FFFFFF)

## Estrutura do Projeto

- `Classificador nivel heroi.js`: cÃ³digo principal com a lÃ³gica de classificaÃ§Ã£o.
- `README.md`: documentaÃ§Ã£o do projeto.

## Como Executar

1. Abra o terminal na pasta do projeto.
2. Execute o comando:

```bash
node "Classificador nivel heroi.js"
```

## Exemplo de Saï¿½da

```text
O HerÃ³i de nome Arthas estÃ¡ no nÃ­vel de Ferro
O HerÃ³i de nome Jaina estÃ¡ no nÃ­vel de Prata
O HerÃ³i de nome Thrall estÃ¡ no nÃ­vel de Radiante
```

## Conceitos Praticados

- VariÃ¡veis
- Operadores relacionais e lÃ³gicos
- Estruturas de decisÃ£o (`if`, `else if`, `else`)
- LaÃ§o de repetiÃ§Ã£o (`for`)

## Autor

Danillo Martins

