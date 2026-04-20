class Animal {
    #isAlive;
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.#isAlive = true;
    }
    eat(food){
        return `${this.name} is eating ${food}`;
    }
    sleep(){
        return `${this.name} is sleeping.`;
    }
    makeSound(){
        return `${this.name} makes a sound.`;
    }

    getInfo(){
        return `Name: ${this.name}, Species: ${this.species}, Alive: ${this.#isAlive}`;
    }
}


class Dog extends Animal {
    constructor(name, breed){
        super(name, 'German Shepherd');
        this.breed = breed;
        this.#loyaltyLevel = 10;
    }
    #loyaltyLevel;

    makeSound(){
        return `${this.name} barks. Woof!`;
    }

    fetch(item){
        return `${this.name} fetches the ${item}`;
    }
    wagTail(){
        return `${this.name} is wagging its tail happily.`;
    }
    getInfo(){
        return `${super.getInfo()}, Breed: ${this.breed}`
    
    }
}

const dog = new Dog('🐶', 'Golden Retriever');
console.log(dog.getInfo());
console.log(dog.makeSound());
console.log(dog.fetch('🎾'));
console.log(dog.wagTail());
console.log(dog.eat('🦴'));