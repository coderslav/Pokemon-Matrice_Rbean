class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemons = [];
    }

    catch(pokemon) {
        if (pokemon.master) {
            console.log(pokemon.name + ' has already a master');
        } else if (this.pokemons.length === 6) {
            console.log(this.name + ' has already 6 pokemons');
        } else {
            pokemon.set_master(this.name);
            this.pokemons.push(pokemon);
        }
    }
    launch_at(pokeball, pokemon) {
        if (pokemon.master === this) {
            pokeball.store(pokemon);
            return true;
        } else {
            return pokeball.try_store(pokemon);
        }
    }
}

module.exports = Trainer;
