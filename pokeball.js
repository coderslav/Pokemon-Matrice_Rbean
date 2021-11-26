class Pokeball {
    constructor(pokemon = null) {
        this.pokemon = pokemon;
        this.tries = 0;
    }
    store(pokemon) {
        if (this.pokemon) {
            console.log('Two pokemons in the same pokeball is barbary!');
        } else {
            this.pokemon = pokemon;
        }
    }
    release() {
        if (this.pokemon) {
            let releasedPokemon = this.pokemon;
            this.pokemon = null;
            return releasedPokemon;
        } else {
            console.log('No pokemons to release!');
            return null;
        }
    }
    try_store(pokemon) {
        this.tries++;
        if (this.tries >= 3) {
            this.store(pokemon);
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Pokeball;
