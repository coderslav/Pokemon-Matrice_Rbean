const Pokemon = require('./pokemon.js');

class ElectricPokemon extends Pokemon {
    constructor(name, vocabulary) {
        super(name, vocabulary);
        this.vocabulary = super.vocabulary + ' ⚡️';
    }
}

class FirePokemon extends Pokemon {
    constructor(name, vocabulary) {
        super(name, vocabulary);
        this.vocabulary = super.vocabulary + ' 🔥';
    }

    burn(text) {
        console.log("I'm burning" + text);
    }
}

module.exports = {
    ElectricPokemon,
    FirePokemon,
};
