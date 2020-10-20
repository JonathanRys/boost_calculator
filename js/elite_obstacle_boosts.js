// Elite Obstacle Boosts
const poisonArrowTowerKey = ['Alliance Level', 'Poison Damage (%)', 'Health (%)'];

const poisonArrowTower = {
    1: [5, 75, 80],
    2: [7, 90, 85],
    3: [16, 105, 90],
    4: [24, 120, 110] // 1,885,000 1day
};

const toughBarricadeKey = ['Alliance Level', 'Health (%)', 'Fire Resistance (%)'];
// Fire resistance needs to be checked at all levels except 6
const toughBarricade = {
    1: [10, 90, 150],
    2: [20, 100, 150],
    3: [30, 110, 150],
    4: [41, 120, 150],
    5: [58, 130, 150], // 1,837,500 1day
    6: [76, 140, 150]
};

const frostTrapKey = ['Alliance Level', 'Ice Damage (%)', 'Health (%)'];

const frostTrap = {
    1: [13, 26, 75],
    2: [22, 32, 80],
    3: [33, 40, 90],
    4: [44, 50, 100],
    5: [59, 60, 110],
    6: [75, 70, 120] // 1,885,000 1day
};

const rangeBomberKey = ['Alliance Level', 'Range (%)', 'Health (%)'];

const rangeBomber = {
    1: [19, 34, 75],
    2: [27, 43, 80],
    3: [36, 51, 90],
    4: [46, 60, 100],
    5: [61, 69, 110],
    6: [69, 77, 120], // 1,842,500 1day
    7: [77, 86, 130]
};

const tempestTowerKey = ['Alliance Level', 'Health (%)', 'Damage (%)', 'Charges'];

const tempestTower = {
    1: [57, 50, 50, 4],
    2: [65, 100, 100, 5] // 1,885,000 6hr
};

const medusasGazeKey = ['Alliance Level', 'Petrify Chance (%)', 'Poison Damage (%)'];

const medusasGaze = {
    1: [71, 20, 25],
    2: [79, 40, 50] // 1,810,000 6hr
};

// New Elite Obstacle Boosts
const iceblastTowerKey = ['Alliance Level', 'Health (%)'];

const iceblastTower = {
    1: [12, 15], // (942,500 12hr)
    2: [20, 30],
    3: [28, 45],
    4: [36, 60],
    5: [46, 75],
    6: [54, 90]
};

const lavaFountainKey = ['Alliance Level', 'Health (%)'];

const lavaFountain = {
    1: [24, 15], // (1,230,000 12hr)
    2: [35, 30],
    3: [47, 45],
    4: [59, 60],
    5: [69, 75]
};

const cobraCauldronKey = ['Alliance Level', 'Health (%)'];
// lvl 2 health is not verified
const cobraCauldron = {
    1: [49, 5],
    2: [63, 10],
    3: [75, 20] // 1,885,000 12hr
};

const cursedCenotaphKey = ['Alliance Level', 'Health (%)', 'Mummies Spawned'];

const cursedCenotaph = {
    1: [51, 15, 1],
    2: [61, 20, 2],
    3: [71, 25, 2], // 1,800,000 10hr
    4: [79, 30, 3]
};

const deathlyDetonatorKey = ['Alliance Level', 'Health (%)'];
// lvl 2 health is not confirmed
const deathlyDetonator = {
    1: [66, 5],
    2: [73, 10], // 1,875,00 8hr
    3: [80, 20],
};

const obstacleBoosts = [
    poisonArrowTower,
    toughBarricade,
    frostTrap,
    rangeBomber,
    tempestTower,
    medusasGaze,
    iceblastTower,
    lavaFountain,
    cobraCauldron,
    cursedCenotaph,
    deathlyDetonator
];

const obstacleBoostKeys = [
    poisonArrowTowerKey,
    toughBarricadeKey,
    frostTrapKey,
    rangeBomberKey,
    tempestTowerKey,
    medusasGazeKey,
    iceblastTowerKey,
    lavaFountainKey,
    cobraCauldronKey,
    cursedCenotaphKey,
    deathlyDetonatorKey
];
