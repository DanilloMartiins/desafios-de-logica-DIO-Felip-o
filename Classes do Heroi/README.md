# 3️⃣ Escrevendo as Classes de um Herói

Projeto desenvolvido para o desafio da DIO com foco em lógica de programação usando JavaScript.

## 🎯 Objetivo

Criar uma classe `Hero` com propriedades e um método `attack()` que exibe o tipo de ataque de acordo com o tipo do herói.

- **Entrada**: nome, idade e tipo do herói
- **Saída**: mensagem de ataque no console

## 📋 Regras de Ataque

- se `type` for `"mago"` -> ataque = `"magia"`
- se `type` for `"guerreiro"` -> ataque = `"espada"`
- se `type` for `"monge"` -> ataque = `"artes marciais"`
- se `type` for `"ninja"` -> ataque = `"shuriken"`

## 🖥️ Saída Esperada

```txt
o {type} atacou usando {ataque}
```

## 📂 Estrutura do Projeto

```txt
.
├── escrevendoClasses.js
└── README.md
```

## ▶️ Como Executar

1. Abra o terminal na pasta do projeto.
2. Execute:

```bash
node "Classes do Heroi/escrevendoClasses.js"
```

## 💡 Exemplo de Código

```javascript
class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let ataque = "";

    switch (this.type) {
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
        ataque = "ataque desconhecido";
    }

    console.log(`o ${this.type} atacou usando ${ataque}`);
  }
}

const heroi1 = new Hero("Merlin", 120, "mago");
const heroi2 = new Hero("Arthur", 30, "guerreiro");
const heroi3 = new Hero("Lee", 25, "monge");
const heroi4 = new Hero("Hanzo", 28, "ninja");

heroi1.attack();
heroi2.attack();
heroi3.attack();
heroi4.attack();
```

## 🧠 Conceitos Aplicados

- Variáveis
- Estruturas condicionais (`switch`)
- Classes e objetos
- Métodos

## 👨‍💻 Autor

Danillo Martins
