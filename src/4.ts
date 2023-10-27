class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  key: Key;
  tenants: Person[] = [];

  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }
  openDoor(key: Key): void {
    if (key === this.key) {
      this.door = true;
      console.log("The door is open, welcome");
    } else {
      console.log("Sorry, your key does not match");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
