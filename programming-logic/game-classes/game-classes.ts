type THeroType =
  | {
      class: "Mago";
      weapon: "Magia";
    }
  | {
      class: "Guerreiro";
      weapon: "Espada";
    }
  | {
      class: "Monge";
      weapon: "Artes Marciais";
    }
  | {
      class: "Ninja";
      weapon: "Shuriken";
    };

type THero = {
  name: string;
  age: number;
  type: THeroType;
};

class Hero implements THero {
  constructor(
    public name: string,
    public age: number,
    public type: THeroType
  ) {}

  attack(): void {
    console.log(`${this.name} atacou usando ${this.type.weapon}!`);
  }
}

const hero = new Hero("Hattori", 100, {
  class: "Ninja",
  weapon: "Shuriken",
});

hero.attack();
