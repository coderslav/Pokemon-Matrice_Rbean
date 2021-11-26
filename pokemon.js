class Pokemon {
    constructor(name, vocabulary = name + ' ' + name) {
        this.name = name;
        this.vocabulary = vocabulary;
        this.xp = 0;
        this.master = null;
    }

    talk() {
        console.log(this.vocabulary);
    }
    shout() {
        console.log(this.vocabulary.toUpperCase() + '!!!');
    }
    add_xp(number) {
        this.xp = this.xp + number;
    }
    lvl() {
        return Math.floor(this.xp / 100);
    }
    set_master(trainer) {
        this.master = trainer;
    }
}

module.exports = Pokemon;
