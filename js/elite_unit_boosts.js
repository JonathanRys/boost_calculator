// Elite Unit Boosts
const blazingKnightKey = ['Alliance Level', 'Fire Damage (%)', 'Health (%)'];

const blazingKnight = {
    1: [3, 70, 70],
    2: [4, 75, 75],
    3: [8, 80, 80],
    4: [12, 90, 90],
    5: [18, 100, 100],
    6: [23, 110, 110],
    7: [32, 120, 120],
    8: [40, 130, 130],
    9: [51, 135, 150] // 1,885,000 16hr @ lvl 75 - 897,000 @ lvl 68
};

const powerArcherKey = ['Alliance Level', 'Blunt Damage (%)', 'Health (%)'];

const powerArcher = {
    1: [6, 40, 80],
    2: [9, 50, 90],
    3: [14, 60, 100],
    4: [25, 70, 110],
    5: [38, 80, 120],
    6: [48, 90, 125],
    7: [53, 100, 130],
    8: [66, 110, 135],
    9: [73, 120, 140] // 1,885,000 12hr
};

const holyPaladinKey = ['Alliance level', 'Healing (%)', 'Health (%)'];

const holyPaladin = {
    1: [11, 10, 50],
    2: [17, 12, 60],
    3: [26, 14, 70],
    4: [37, 16, 80],
    5: [45, 18, 90],
    6: [52, 20, 100],
    7: [68, 22, 110], // 1,880,000 12hr
    8: [78, 24, 120]
};

const stunningOgreKey = ['Alliance Level', 'Stun Duration (s)', 'Health (%)'];
// lvl 2, 3 stun duration might be inaccurate
const stunningOgre = {
    1: [15, 1.0, 40],
    2: [31, 1.5, 45],
    3: [39, 1.8, 50],
    4: [47, 2.0, 60],
    5: [54, 2.1, 75],
    6: [64, 2.2, 85] // 1,885,000 12hr
};

const stormCannonKey = ['Alliance Level', 'Attack Rate (%)', 'Health (%)'];
// lvl 2, 3, 4 Attack rate is a guess

const stormCannon = {
    1: [21, 100, 75],
    2: [29, 115, 80],
    3: [35, 125, 100],
    4: [42, 135, 110],
    5: [49, 150, 120],
    6: [60, 175, 130],
    7: [74, 200, 140] // 1,885,000 9hr
};

const ragingWolfKey = ['Alliance Level', 'Health (%)', 'Battlecry (%)', 'Attack Rate (%)', 'Speed (%)', 'Howl Range (%)', 'Howl Duration (s)'];

const ragingWolf = {
    1: [28, 50, 30, 60, 100, 3.0, 4],
    2: [34, 60, 35, 70, 104, 3.2, 4],
    3: [43, 75, 40, 80, 108, 3.4, 4],
    4: [50, 90, 45, 90, 112, 3.6, 4],
    5: [55, 100, 50, 100, 116, 3.8, 4],
    6: [62, 110, 55, 110, 120, 4.0, 4] // 1,885,000 9hr
};

// Haha
const madMonkKey = ['Alliance Level', 'Healing (%)', 'Health (%)', 'Heal Rate (%)'];

const madMonk = {
    1: [56, 40, 20, 20],
    2: [63, 80, 40, 40] // 1,885,000 6hr
};

const witchDoctorKey = ['Alliance Level', 'Damage (%)', 'Health (%)', 'Extra Skeletons'];

const witchDoctor = {
    1: [67, 50, 25, 1],
    2: [70, 100, 50, 2] // 1,885,000 6hr
};

const demolisherKey = ['Alliance Level', 'Health (%)', 'Knockback (%)'];

const demolisher = {
    1: [72, 25, 25], // (1,810,000 6hr)
    2: [80, 50, 50]
};

// New Elite Unit Boosts
const winterWraithKey = ['Alliance Level', 'Health (%)', 'Ice Damage (%)'];

const winterWraith = {
    1: [18, 20, 20], // (980,000 6hr)
    2: [26, 30, 30],
    3: [34, 40, 40],
    4: [42, 50, 50],
    5: [50, 60, 60],
    6: [58, 70, 70]
};

const firestarterKey = ['Alliance Level', 'Health (%)', 'Fire Damage (%)'];

const firestarter = {
    1: [21, 20, 20], // (980,000 6hr)
    2: [29, 30, 30],
    3: [37, 40, 40],
    4: [45, 50, 50],
    5: [53, 60, 60],
    6: [60, 70, 70]
};

const plagueMummyKey = ['Alliance Level', 'Health (%)', 'Poison Damage (%)'];

const plagueMummy = {
    1: [31, 20, 20],
    2: [48, 30, 40],
    3: [64, 40, 60] // 1,885,000 10hr
};

const megargoyleKey = ['Alliance Level', 'Health (%)', 'Blunt Damage (%)', 'Range (%)'];

const megargoyle = {
    1: [32, 10, 20, 10],
    2: [43, 20, 30, 20],
    3: [52, 30, 40, 30],
    4: [62, 40, 50, 40] // 1,885,000 12hr
};

const uberBlasterKey = ['Alliance Level', 'Health (%)', 'Piercing Damage (%)'];

const uberBlaster = {
    1: [33, 20, 10],
    2: [44, 30, 20],
    3: [55, 40, 30],
    4: [66, 50, 40], // 1,880,000 12hr
    5: [77, 60, 50]
};

const monstrousMortarKey = ['Alliance Level', 'Health (%)', 'Blunt Damage (%)'];

const monstrousMortar = {
    1: [41, 15, 20],
    2: [56, 30, 40],
    3: [72, 45, 60] // 1,885,000 10hr
};

const tribeLeaderKey = ['Alliance Level', 'Health (%)', 'Piercing Damage (%)'];

const tribeLeader = {
    1: [70, 10, 10], // (1,865,000 6hr)
    2: [74, 20, 20],
    3: [78, 30, 30]
};

// Exports
const UnitBoosts = [
    blazingKnight,
    powerArcher,
    holyPaladin,
    stunningOgre,
    stormCannon,
    ragingWolf,
    madMonk,
    witchDoctor,
    demolisher,
    winterWraith,
    firestarter,
    plagueMummy,
    megargoyle,
    uberBlaster,
    monstrousMortar,
    tribeLeader
];

const UnitBoostKeys = [
    blazingKnightKey,
    powerArcherKey,
    holyPaladinKey,
    stunningOgreKey,
    stormCannonKey,
    ragingWolfKey,
    madMonkKey,
    witchDoctorKey,
    demolisherKey,
    winterWraithKey,
    firestarterKey,
    plagueMummyKey,
    megargoyleKey,
    uberBlasterKey,
    monstrousMortarKey,
    tribeLeaderKey
];
