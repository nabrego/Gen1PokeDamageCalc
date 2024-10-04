const { calculate, Generations, Pokemon, Move } = require('@smogon/calc');
// Generation 1 damage calculation
const calcDamage = (req, res) => {
    const gen = Generations.get(1);

    const offensePokeData = req.body.offensePoke;
    const defensePokeData = req.body.defensePoke;
    const moveTitle = req.body.move;

    const offensePoke = new Pokemon(gen, offensePokeData.name, {
        ivs: {
            hp: offensePokeData.ivs.hp,
            atk: offensePokeData.ivs.atk,
            def: offensePokeData.ivs.def,
            spa: offensePokeData.ivs.spa,
            spd: offensePokeData.ivs.spd,
            spe: offensePokeData.ivs.spe
        },
        boosts: {
            atk: offensePokeData.boosts.atk,
            def: offensePokeData.boosts.def,
            spa: offensePokeData.boosts.spa,
            spd: offensePokeData.boosts.spd,
            spe: offensePokeData.boosts.spe
        },
        level: offensePokeData.level
    });

    const defensePoke = new Pokemon(gen,defensePokeData.name, {
        ivs: {
            hp: defensePokeData.ivs.hp,
            atk: defensePokeData.ivs.atk,
            def: defensePokeData.ivs.def,
            spa: defensePokeData.ivs.spa,
            spd: defensePokeData.ivs.spd,
            spe: defensePokeData.ivs.spe
        },
        boosts: {
            atk: defensePokeData.boosts.atk,
            def: defensePokeData.boosts.def,
            spa: defensePokeData.boosts.spa,
            spd: defensePokeData.boosts.spd,
            spe: defensePokeData.boosts.spe
        },
        level: defensePokeData.level
    });

    const move = new Move(gen, moveTitle);

    const result = calculate(gen, offensePoke, defensePoke, move);

    res.json(result.fullDesc());
};

module.exports = { calcDamage }

