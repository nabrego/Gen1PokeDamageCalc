const { calculate, Generations, Pokemon, Move } = require('@smogon/calc');
// Generation 1 damage calculation
const calcDamage = (req, res) => {
    const gen = Generations.get(1);
    const offensePokeData = req.body.offensePoke;
    const defensePokeData = req.body.defensePoke;
    const moveTitle = req.body.move;

    const offensePoke = new Pokemon(gen, offensePokeData.name, {
        ivs: offensePokeData.ivs,
        boosts: offensePokeData.boosts,
        level: offensePokeData.level
    });

    const defensePoke = new Pokemon(gen,defensePokeData.name, {
        ivs: defensePokeData.ivs,
        boosts: defensePokeData.boosts,
        level: defensePokeData.level
    });

    const move = new Move(gen, moveTitle);

    const result = calculate(gen, offensePoke, defensePoke, move);

    res.json([]);
};

module.exports = { calcDamage }

