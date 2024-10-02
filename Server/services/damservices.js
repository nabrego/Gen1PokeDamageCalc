const calculateDamage = (attack, defense, level, power, typeOne, typeTwo, STAB) => {
    // Calculate based off the generation 1 equation
    // damage = ((((((2 * level * critical) / 5) + 2) * power * (attack / defense)) / 50) + 2) * STAB * Type1 * Type2 * random
    const noncrit = ((((((2 * level) / 5) + 2) * power * (attack / defense)) / 50) + 2);
    const critical = ((((((2 * level * 2) / 5) + 2) * power * (attack / defense)) / 50) + 2);
}