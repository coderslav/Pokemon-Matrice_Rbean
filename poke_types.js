const Pokemon = require('./pokemon.js');

class ElectricPokemon extends Pokemon {
    constructor(name, vocabulary) {
        super(name, vocabulary);
        this.vocabulary = this.vocabulary + ' ⚡️';
    }
}

class FirePokemon extends Pokemon {
    constructor(name, vocabulary) {
        super(name, vocabulary);
        this.vocabulary = this.vocabulary + ' 🔥';
    }

    burn(text) {
        console.log("I'm burning " + text);
    }
}

module.exports = {
    ElectricPokemon,
    FirePokemon,
};
