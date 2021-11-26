const Pokeball = require('./pokeball.js');

class MasterBall extends Pokeball {
    constructor(pokemon) {
        super(pokemon);
    }

    try_store(pokemon) {
        super.store(pokemon);
        return true;
    }
}

class UselessBall extends Pokeball {
    constructor(pokemon) {
        super(pokemon);
    }

    try_store(pokemon) {
        return false;
    }
}

class FireBall extends Pokeball {
    constructor(pokemon) {
        super(pokemon);
    }

    try_store(pokemon) {
        if (pokemon.constructor.name === 'FirePokemon') {
            super.store(pokemon);
            return true;
        } else {
            return super.try_store(pokemon);
        }
    }
}

module.exports = {
    MasterBall,
    UselessBall,
    FireBall,
};
