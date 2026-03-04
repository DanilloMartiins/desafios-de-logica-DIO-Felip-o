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
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.type} atacou usando ${ataque}`);
  }
}

// Exemplos de herois
const heroi1 = new Hero("Merlin", 120, "mago");
const heroi2 = new Hero("Arthur", 30, "guerreiro");
const heroi3 = new Hero("Lee", 25, "monge");
const heroi4 = new Hero("Hanzo", 28, "ninja");

// Chamando o metodo attack()
heroi1.attack();
heroi2.attack();
heroi3.attack();
heroi4.attack();
