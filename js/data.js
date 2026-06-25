/* ============================================================
 * data.js — Journey Atlas Data for Pokémon Journey Map
 * Flat exports consumed by map.js, panels.js, scroll.js, friends.js
 * ============================================================ */

// ── TYPE COLORS ──
export const TYPE_COLORS = {
  Fire:     '#FF6B35',
  Water:    '#29B6F6',
  Grass:    '#66BB6A',
  Electric: '#FFEE58',
  Normal:   '#A8A878',
  Flying:   '#A0D0FF',
  Rock:     '#B8A038',
  Ground:   '#E0C068',
  Ice:      '#98D8D8',
  Fighting: '#C03028',
  Poison:   '#A040A0',
  Psychic:  '#F85888',
  Bug:      '#A8B820',
  Ghost:    '#705898',
  Dragon:   '#7038F8',
  Dark:     '#705848',
  Steel:    '#B8B8D0',
  Fairy:    '#EE99AC',
};

// ── REGION THEMES ──
export const REGION_THEMES = {
  pallet:   { main: '#FFB300', neon: '#FFD740', glow: 'rgba(255,179,0,0.15)',  border: '#FFB300' },
  kanto:    { main: '#E53935', neon: '#FF5252', glow: 'rgba(229,57,53,0.15)',  border: '#E53935' },
  orange:   { main: '#FB8C00', neon: '#FFB300', glow: 'rgba(251,140,0,0.15)',  border: '#FB8C00' },
  johto:    { main: '#FDD835', neon: '#FFEE58', glow: 'rgba(253,216,53,0.15)', border: '#FDD835' },
  hoenn:    { main: '#43A047', neon: '#69F0AE', glow: 'rgba(67,160,71,0.15)',  border: '#43A047' },
  sinnoh:   { main: '#1E88E5', neon: '#82B1FF', glow: 'rgba(30,136,229,0.15)', border: '#1E88E5' },
  unova:    { main: '#8E24AA', neon: '#EA80FC', glow: 'rgba(142,36,170,0.15)', border: '#8E24AA' },
  kalos:    { main: '#EC407A', neon: '#FF80AB', glow: 'rgba(236,64,122,0.15)', border: '#EC407A' },
  alola:    { main: '#FFCA28', neon: '#FFD740', glow: 'rgba(255,202,40,0.15)', border: '#FFCA28' },
  journeys: { main: '#78909C', neon: '#CFD8DC', glow: 'rgba(120,144,156,0.15)', border: '#78909C', special: 'monarch' },
};

// ── NODES (Regions + Pallet Town) ──
// x, y are SVG coordinates. radius is the node circle radius.
export const NODES = [
  {
    id: 'pallet',
    name: 'Pallet Town',
    subtitle: 'The Journey Begins',
    type: 'home',
    icon: '🏠',
    colorKey: 'pallet',
    x: 1000, y: 400,
    radius: 28,
    data: {
      summary: "The sleepy hometown where Ash Ketchum first received Pikachu from Professor Oak and set off on his grand Pokémon journey.",
      pokemonAtLab: [
        'Bulbasaur', 'Squirtle', 'Muk', 'Tauros (x30)', 'Kingler',
        'Snorlax', 'Lapras', 'Heracross', 'Bayleef', 'Quilava',
        'Totodile', 'Noctowl', 'Donphan', 'Swellow', 'Sceptile',
        'Corphish', 'Torkoal', 'Glalie', 'Staraptor', 'Torterra',
        'Infernape', 'Buizel', 'Gliscor', 'Gible', 'Unfezant',
        'Oshawott', 'Pignite', 'Snivy', 'Scraggy', 'Leavanny',
        'Palpitoad', 'Boldore', 'Krookodile', 'Goodra', 'Talonflame',
        'Hawlucha', 'Noivern', 'Lycanroc', 'Naganadel', 'Melmetal'
      ]
    }
  },
  {
    id: 'kanto',
    name: 'Kanto',
    subtitle: 'Indigo Plateau — Top 16',
    type: 'region',
    icon: '🌿',
    colorKey: 'kanto',
    x: 1000, y: 900,
    radius: 48,
    data: {
      league: { name: 'Indigo Plateau Conference', result: 'Top 16', icon: '🏟️' },
      badges: ['Boulder Badge', 'Cascade Badge', 'Thunder Badge', 'Rainbow Badge', 'Marsh Badge', 'Soul Badge', 'Volcano Badge', 'Earth Badge'],
      pokemon: [
        { name: 'Pikachu',    types: ['Electric'] },
        { name: 'Bulbasaur',  types: ['Grass', 'Poison'] },
        { name: 'Charizard',  types: ['Fire', 'Flying'] },
        { name: 'Squirtle',   types: ['Water'] },
        { name: 'Butterfree', types: ['Bug', 'Flying'] },
        { name: 'Pidgeot',    types: ['Normal', 'Flying'] },
        { name: 'Haunter',    types: ['Ghost', 'Poison'] },
        { name: 'Primeape',   types: ['Fighting'] },
        { name: 'Muk',        types: ['Poison'] },
        { name: 'Tauros',     types: ['Normal'], special: '×30' },
        { name: 'Kingler',    types: ['Water'] },
        { name: 'Snorlax',    types: ['Normal'] },
      ],
      released: [
        { name: 'Butterfree', context: 'Released to join a flock of wild Butterfree in the Orange Islands.' },
        { name: 'Pidgeot',    context: 'Left to protect a flock of Pidgey from Fearow near Pallet Town.' },
      ],
      storyBeats: [
        { title: 'The Late Start',        desc: 'Ash woke up late and received Pikachu, the only Pokémon remaining.' },
        { title: 'Thunder Strikes',       desc: 'Pikachu protected Ash from a flock of Spearow in a pivotal moment of bonding.' },
        { title: 'Charizard\'s Pride',    desc: 'A Charmander abandoned by Damian became Ash\'s most powerful and stubborn partner.' },
        { title: 'Pokémon League Debut',  desc: 'Ash made it to the Top 16 at Indigo Plateau but lost to Richie.' },
      ],
      friends: ['Misty', 'Brock'],
    }
  },
  {
    id: 'orange',
    name: 'Orange Islands',
    subtitle: 'Orange League — Champion!',
    type: 'region',
    icon: '🍊',
    colorKey: 'orange',
    x: 600, y: 1400,
    radius: 42,
    data: {
      league: { name: 'Orange League', result: 'Champion!', icon: '🏆' },
      badges: ['Coral-Eye Badge', 'Sea Ruby Badge', 'Spike Shell Badge', 'Jade Star Badge'],
      pokemon: [
        { name: 'Pikachu',  types: ['Electric'] },
        { name: 'Lapras',   types: ['Water', 'Ice'] },
        { name: 'Snorlax',  types: ['Normal'] },
        { name: 'Squirtle', types: ['Water'] },
        { name: 'Tauros',   types: ['Normal'] },
        { name: 'Charizard',types: ['Fire', 'Flying'] },
      ],
      storyBeats: [
        { title: 'First Champion Title', desc: 'Ash defeated Drake to become the Orange League Champion — his first major title.' },
        { title: 'Lugia Encounter',      desc: 'Ash encountered the legendary Lugia and helped calm the legendary birds.' },
        { title: 'Togepi Hatches',       desc: 'Misty\'s Togepi hatched from a mysterious egg found on Valencia Island.' },
      ],
      friends: ['Misty', 'Tracey'],
    }
  },
  {
    id: 'johto',
    name: 'Johto',
    subtitle: 'Silver Conference — Top 8',
    type: 'region',
    icon: '🌾',
    colorKey: 'johto',
    x: 1000, y: 1900,
    radius: 48,
    data: {
      league: { name: 'Silver Conference', result: 'Top 8', icon: '🥈' },
      badges: ['Zephyr Badge', 'Hive Badge', 'Plain Badge', 'Fog Badge', 'Storm Badge', 'Mineral Badge', 'Glacier Badge', 'Rising Badge'],
      pokemon: [
        { name: 'Pikachu',   types: ['Electric'] },
        { name: 'Totodile',  types: ['Water'] },
        { name: 'Cyndaquil', types: ['Fire'] },
        { name: 'Chikorita', types: ['Grass'] },
        { name: 'Noctowl',   types: ['Normal', 'Flying'], special: 'Shiny' },
        { name: 'Heracross', types: ['Bug', 'Fighting'] },
        { name: 'Donphan',   types: ['Ground'] },
        { name: 'Snorlax',   types: ['Normal'] },
      ],
      released: [
        { name: 'Beedrill', context: 'Won in a Bug-Catching Contest; given to Casey.' },
        { name: 'Larvitar', context: 'Reunited with its mother Mt. Silver.' },
      ],
      storyBeats: [
        { title: 'Three Starter Pokémon',  desc: 'Ash caught all three Johto starters — Totodile, Cyndaquil, and Chikorita.' },
        { title: 'Lugia Returns',          desc: 'Ash encountered Silver, a baby Lugia, and helped reunite it with its parent.' },
        { title: 'Ho-Oh Sighting',         desc: 'A golden Pokémon flying overhead was confirmed to be the legendary Ho-Oh.' },
      ],
      friends: ['Misty', 'Brock'],
    }
  },
  {
    id: 'hoenn',
    name: 'Hoenn',
    subtitle: 'Ever Grande Conference — Top 8',
    type: 'region',
    icon: '🌊',
    colorKey: 'hoenn',
    x: 400, y: 2800,
    radius: 48,
    data: {
      league: { name: 'Ever Grande Conference', result: 'Top 8', icon: '🌺' },
      badges: ['Stone Badge', 'Knuckle Badge', 'Dynamo Badge', 'Heat Badge', 'Balance Badge', 'Feather Badge', 'Mind Badge', 'Rain Badge'],
      pokemon: [
        { name: 'Pikachu',   types: ['Electric'] },
        { name: 'Swellow',   types: ['Normal', 'Flying'] },
        { name: 'Sceptile',  types: ['Grass'] },
        { name: 'Corphish',  types: ['Water'] },
        { name: 'Torkoal',   types: ['Fire'] },
        { name: 'Glalie',    types: ['Ice'] },
      ],
      storyBeats: [
        { title: 'Treecko\'s Evolution',   desc: 'Treecko evolved into Sceptile after an emotional battle for a tree it called home.' },
        { title: 'Battle Frontier Intro',  desc: 'Ash discovered the Hoenn Battle Frontier and began challenging its facilities.' },
        { title: 'May\'s Contest Debut',   desc: 'May discovered her love of Pokémon Contests, adding a new dimension to the journey.' },
      ],
      friends: ['May', 'Max', 'Brock'],
    }
  },
  {
    id: 'sinnoh',
    name: 'Sinnoh',
    subtitle: 'Lily of the Valley — Top 4',
    type: 'region',
    icon: '❄️',
    colorKey: 'sinnoh',
    x: 1000, y: 3700,
    radius: 48,
    data: {
      league: { name: 'Lily of the Valley Conference', result: 'Top 4', icon: '🌸' },
      badges: ['Coal Badge', 'Forest Badge', 'Cobble Badge', 'Fen Badge', 'Relic Badge', 'Mine Badge', 'Icicle Badge', 'Beacon Badge'],
      pokemon: [
        { name: 'Pikachu',    types: ['Electric'] },
        { name: 'Infernape',  types: ['Fire', 'Fighting'] },
        { name: 'Staraptor',  types: ['Normal', 'Flying'] },
        { name: 'Buizel',     types: ['Water'] },
        { name: 'Gliscor',    types: ['Ground', 'Flying'] },
        { name: 'Gible',      types: ['Dragon', 'Ground'] },
        { name: 'Torterra',   types: ['Grass', 'Ground'] },
      ],
      storyBeats: [
        { title: 'Paul Rivalry',          desc: 'An intense ongoing rivalry with Paul pushed Ash to his absolute limits.' },
        { title: 'Chimchar\'s Freedom',   desc: 'Ash rescued Chimchar from Paul, and it evolved all the way into Infernape.' },
        { title: 'Galactic Crisis',       desc: 'Ash helped stop Team Galactic\'s attempt to summon Dialga and Palkia.' },
      ],
      friends: ['Dawn', 'Brock'],
    }
  },
  {
    id: 'unova',
    name: 'Unova',
    subtitle: 'Vertress Conference — Top 8',
    type: 'region',
    icon: '🏙️',
    colorKey: 'unova',
    x: 1600, y: 4500,
    radius: 48,
    data: {
      league: { name: 'Vertress Conference', result: 'Top 8', icon: '⚡' },
      badges: ['Trio Badge', 'Basic Badge', 'Insect Badge', 'Bolt Badge', 'Quake Badge', 'Jet Badge', 'Freeze Badge', 'Legend Badge'],
      pokemon: [
        { name: 'Pikachu',    types: ['Electric'] },
        { name: 'Unfezant',   types: ['Normal', 'Flying'] },
        { name: 'Oshawott',   types: ['Water'] },
        { name: 'Pignite',    types: ['Fire', 'Fighting'] },
        { name: 'Snivy',      types: ['Grass'] },
        { name: 'Scraggy',    types: ['Dark', 'Fighting'] },
        { name: 'Leavanny',   types: ['Bug', 'Grass'] },
        { name: 'Palpitoad',  types: ['Water', 'Ground'] },
        { name: 'Boldore',    types: ['Rock'] },
        { name: 'Krookodile', types: ['Ground', 'Dark'] },
      ],
      storyBeats: [
        { title: 'New Friends',           desc: 'Ash met Iris and Cilan, beginning a new chapter with very different personalities.' },
        { title: 'Club Battle Victory',   desc: 'Ash won the Club Battle tournament, showing his growing maturity as a trainer.' },
        { title: 'Team Plasma Showdown',  desc: 'Ash fought to stop Team Plasma\'s plans for world domination using Pokémon.' },
      ],
      friends: ['Iris', 'Cilan'],
    }
  },
  {
    id: 'kalos',
    name: 'Kalos',
    subtitle: 'Lumiose Conference — Runner-Up',
    type: 'region',
    icon: '🗼',
    colorKey: 'kalos',
    x: 1000, y: 5400,
    radius: 48,
    data: {
      league: { name: 'Lumiose Conference', result: 'Runner-Up 🥈', icon: '🗼' },
      badges: ['Bug Badge', 'Cliff Badge', 'Rumble Badge', 'Plant Badge', 'Voltage Badge', 'Fairy Badge', 'Psychic Badge', 'Iceberg Badge'],
      pokemon: [
        { name: 'Pikachu',   types: ['Electric'] },
        { name: 'Greninja',  types: ['Water', 'Dark'], special: 'Ash-Greninja' },
        { name: 'Talonflame',types: ['Fire', 'Flying'] },
        { name: 'Hawlucha',  types: ['Fighting', 'Flying'] },
        { name: 'Goodra',    types: ['Dragon'] },
        { name: 'Noivern',   types: ['Dragon', 'Flying'] },
      ],
      released: [
        { name: 'Goodra', context: 'Returned to its marsh to protect the wetland Pokémon.' },
        { name: 'Greninja', context: 'Stayed at the Kalos forest to help Zygarde cleanse the world.' },
      ],
      storyBeats: [
        { title: 'Ash-Greninja Bond',    desc: 'Ash and Greninja developed a unique synchronicity, forming the Bond Phenomenon.' },
        { title: 'Alain\'s Dominance',  desc: 'Ash lost the Lumiose Conference finals to Alain and his Mega Charizard X.' },
        { title: 'Team Flare Crisis',   desc: 'Ash helped stop Lysandre and Team Flare\'s plan to destroy Kalos with Zygarde.' },
      ],
      friends: ['Serena', 'Clemont', 'Bonnie'],
    }
  },
  {
    id: 'alola',
    name: 'Alola',
    subtitle: 'Manalo Conference — Champion!',
    type: 'region',
    icon: '🌺',
    colorKey: 'alola',
    x: 1000, y: 6200,
    radius: 48,
    data: {
      league: { name: 'Manalo Conference', result: 'Champion! 🏆', icon: '🌺' },
      badgeLabel: 'Grand Trials',
      badges: ['Melemele Island Grand Trial', 'Akala Island Grand Trial', 'Ula\'ula Island Grand Trial', 'Poni Island Grand Trial'],
      pokemon: [
        { name: 'Pikachu',   types: ['Electric'] },
        { name: 'Rowlet',    types: ['Grass', 'Flying'] },
        { name: 'Lycanroc',  types: ['Rock'], special: 'Dusk Form' },
        { name: 'Incineroar',types: ['Fire', 'Dark'] },
        { name: 'Naganadel', types: ['Poison', 'Dragon'] },
        { name: 'Melmetal',  types: ['Steel'] },
      ],
      released: [
        { name: 'Naganadel', context: 'Returned to its Ultra Space home after the Manalo Conference.' },
      ],
      storyBeats: [
        { title: 'First Pokémon School',  desc: 'Ash enrolled at the Pokémon School on Melemele Island, finding a new community.' },
        { title: 'Z-Move Mastery',        desc: 'Ash learned and mastered multiple Z-Moves, including the exclusive 10,000,000 Volt Thunderbolt.' },
        { title: 'First League Win',      desc: 'Ash won the Alola Pokémon League, finally becoming a Champion-class Trainer.' },
      ],
      friends: ['Lillie', 'Kiawe', 'Mallow', 'Lana', 'Sophocles'],
    }
  },
  {
    id: 'journeys',
    name: 'World Journey',
    subtitle: 'World Coronation — Monarch!',
    type: 'region',
    icon: '👑',
    colorKey: 'journeys',
    x: 1000, y: 7100,
    radius: 55,
    data: {
      specialNote: '👑 WORLD MONARCH — Ash Ketchum defeated Leon, the undefeated World Champion, to claim the title of World\'s Greatest Pokémon Trainer!',
      league: { name: 'World Coronation Series', result: 'World Monarch 👑', icon: '🌍' },
      badges: [],
      pokemon: [
        { name: 'Pikachu',   types: ['Electric'] },
        { name: 'Lucario',   types: ['Fighting', 'Steel'] },
        { name: 'Dragonite', types: ['Dragon', 'Flying'] },
        { name: 'Gengar',    types: ['Ghost', 'Poison'] },
        { name: 'Sirfetch\'d', types: ['Fighting'] },
        { name: 'Dracovish', types: ['Water', 'Dragon'] },
      ],
      storyBeats: [
        { title: 'Project Mew',           desc: 'Goh pursued his dream of finding Mew through the research project, meeting legendary Pokémon.' },
        { title: 'Climax against Cynthia',desc: 'Ash\'s Pikachu defeated the legendary Champion Cynthia\'s Mega Garchomp.' },
        { title: 'FINAL: vs. Leon',       desc: 'An epic final battle between Pikachu and Charizard decided the World\'s #1 Trainer.' },
        { title: 'The Journey Ends',      desc: 'Having achieved everything, Ash returns to Pallet Town before a new adventure begins.' },
      ],
      friends: ['Goh', 'Chloe'],
    }
  },
];

// ── PATHS (Connection between nodes in journey order) ──
export const PATHS = [
  {
    id: 'pallet-to-kanto',
    from: 'pallet', to: 'kanto',
    travelMethod: '🚶 On foot from Pallet Town',
    summary: 'Ash and Pikachu begin their journey north, collecting Gym Badges across Kanto.',
    events: [
      'Survived a flock of Spearow with Pikachu\'s Thunder',
      'Met Misty after crashing her bike',
      'Brock joined after losing at Pewter Gym',
      'Collected all 8 Kanto Gym Badges',
    ]
  },
  {
    id: 'kanto-to-orange',
    from: 'kanto', to: 'orange',
    travelMethod: '⛵ By boat to the Orange Archipelago',
    summary: 'Professor Oak sent Ash and Misty to the Orange Islands to retrieve the GS Ball.',
    events: [
      'Met Tracey Sketchit, a Pokémon Watcher',
      'Encountered legendary Lugia during the prophecy event',
      'Won the Orange League against Drake using Pikachu',
      'Butterfree was released to join a flock',
    ]
  },
  {
    id: 'orange-to-johto',
    from: 'orange', to: 'johto',
    travelMethod: '🚢 Sailed back through Kanto to Johto',
    summary: 'After returning the GS Ball to Kurt in Johto, Ash began a new adventure in the Gold & Silver region.',
    events: [
      'Misty\'s bike was finally repaired (she left)',
      'Met baby Pokémon Togepi, Elekid, and Larvitar',
      'Encountered the legendary Ho-Oh again',
      'Silver Conference: defeated Gary, lost to Harrison',
    ]
  },
  {
    id: 'johto-to-hoenn',
    from: 'johto', to: 'hoenn',
    travelMethod: '✈️ Flew to Hoenn with only Pikachu',
    summary: 'A fresh start — Ash traveled to Hoenn alone (only with Pikachu) to challenge a new region.',
    events: [
      'Met May and Max — a new team assembled with Brock',
      'May chose Torchic as her starter',
      'Ash caught Treecko, Taillow, Corphish, and more',
      'Completed the Hoenn Battle Frontier after the league',
    ]
  },
  {
    id: 'hoenn-to-sinnoh',
    from: 'hoenn', to: 'sinnoh',
    travelMethod: '✈️ Flew to Sinnoh alone again',
    summary: 'Once again taking only Pikachu, Ash launched into the Sinnoh region\'s snowy mountains.',
    events: [
      'Met Dawn and her Piplup near Sandgem Town',
      'First encounter with rival Paul, a cold and ruthless trainer',
      'Brock returned to join the team',
      'Team Galactic attempted to rewrite the universe',
    ]
  },
  {
    id: 'sinnoh-to-unova',
    from: 'sinnoh', to: 'unova',
    travelMethod: '✈️ Flew to Unova — a distant land',
    summary: 'Ash flew to the urban Unova region, home to entirely new Pokémon he had never seen.',
    events: [
      'Met Iris and Cilan in Nuvema Town',
      'Encountered Team Plasma and N',
      'Made it to Top 8 at Vertress Conference',
      'Returned briefly to Kanto before heading to Kalos',
    ]
  },
  {
    id: 'unova-to-kalos',
    from: 'unova', to: 'kalos',
    travelMethod: '✈️ Flew to the elegant Kalos region',
    summary: 'Ash arrived in France-inspired Kalos, where he developed a unique bond with Froakie.',
    events: [
      'Met Serena, Clemont, and Bonnie in Lumiose City',
      'Froakie evolved into Ash-Greninja through the Bond Phenomenon',
      'Lost the Lumiose Conference finals to Alain',
      'Fought Team Flare to save Kalos with Zygarde\'s help',
    ]
  },
  {
    id: 'kalos-to-alola',
    from: 'kalos', to: 'alola',
    travelMethod: '✈️ Flew to the tropical Alola region',
    summary: 'Ash enrolled at the Pokémon School on Melemele Island, embracing a laid-back island lifestyle.',
    events: [
      'Enrolled at Pokémon School and made new island friends',
      'Mastered Z-Moves and Ultra Beasts',
      'Defeated Kukui in an exhibition final for the ages',
      'Won the inaugural Manalo Conference — Alola Champion!',
    ]
  },
  {
    id: 'alola-to-journeys',
    from: 'alola', to: 'journeys',
    travelMethod: '🌍 Joined the World Coronation Series — Global travels',
    summary: 'Ash and new friend Goh traveled the entire Pokémon world, competing in the World Coronation Series.',
    events: [
      'Entered the World Coronation Series from the lowest rank',
      'Climbed to Masters Eight by defeating Dracian Alain, Cynthia, and Diantha',
      'Defeated Cynthia\'s Mega Garchomp with Pikachu',
      'Defeated World Champion Leon in an emotional final — becoming World Monarch!',
    ]
  },
];

// ── FRIENDS ──
export const FRIENDS = [
  {
    id: 'misty',
    name: 'Misty',
    emoji: '💧',
    color: '#29B6F6',
    regionId: 'kanto',
    offset: { x: 70, y: -60 },
    meeting: 'Met on Route 1 after Ash crashed her bike.',
    role: 'Water-type specialist & Gym Leader. Ash\'s first and longest-running companion.'
  },
  {
    id: 'brock',
    name: 'Brock',
    emoji: '🪨',
    color: '#8D6E63',
    regionId: 'kanto',
    offset: { x: -70, y: -60 },
    meeting: 'Met after losing to Ash at Pewter Gym.',
    role: 'Rock-type specialist, aspiring Pokémon Breeder, and group cook.'
  },
  {
    id: 'tracey',
    name: 'Tracey',
    emoji: '✏️',
    color: '#66BB6A',
    regionId: 'orange',
    offset: { x: 65, y: -55 },
    meeting: 'Met in the Orange Islands when he wanted to travel with a Pokémon trainer.',
    role: 'Pokémon Watcher and Sketch Artist. Now works at Professor Oak\'s Lab.'
  },
  {
    id: 'may',
    name: 'May',
    emoji: '🌸',
    color: '#EC407A',
    regionId: 'hoenn',
    offset: { x: 70, y: -65 },
    meeting: 'Daughter of Petalburg Gym Leader Norman. Chose Torchic as her starter.',
    role: 'Pokémon Coordinator pursuing Pokémon Contests.'
  },
  {
    id: 'max',
    name: 'Max',
    emoji: '🔭',
    color: '#42A5F5',
    regionId: 'hoenn',
    offset: { x: -70, y: -65 },
    meeting: 'May\'s younger brother, a Pokémon Encyclopedia who hasn\'t started his journey yet.',
    role: 'Strategy expert & Pokédex master-in-training.'
  },
  {
    id: 'dawn',
    name: 'Dawn',
    emoji: '🌟',
    color: '#AB47BC',
    regionId: 'sinnoh',
    offset: { x: 70, y: -65 },
    meeting: 'Met near Sandgem Town with her Piplup.',
    role: 'Pokémon Coordinator following in her mother Johanna\'s footsteps.'
  },
  {
    id: 'iris',
    name: 'Iris',
    emoji: '🐉',
    color: '#7B1FA2',
    regionId: 'unova',
    offset: { x: 70, y: -65 },
    meeting: 'Swung down from a tree to protect her Axew. She became Champion of Unova.',
    role: 'Dragon-type trainer from the Village of Dragons.'
  },
  {
    id: 'cilan',
    name: 'Cilan',
    emoji: '🍃',
    color: '#388E3C',
    regionId: 'unova',
    offset: { x: -70, y: -65 },
    meeting: 'One of three Striaton Gym Leaders. Joined after giving Ash the Trio Badge.',
    role: 'Grass-type specialist and self-proclaimed Pokémon Connoisseur.'
  },
  {
    id: 'serena',
    name: 'Serena',
    emoji: '🎀',
    color: '#F48FB1',
    regionId: 'kalos',
    offset: { x: 70, y: -65 },
    meeting: 'Childhood friend of Ash from Professor Oak\'s Summer Camp.',
    role: 'Pokémon Performer pursuing her own style on stage. Gave Ash a goodbye kiss.'
  },
  {
    id: 'clemont',
    name: 'Clemont',
    emoji: '⚡',
    color: '#FDD835',
    regionId: 'kalos',
    offset: { x: -70, y: -65 },
    meeting: 'Lumiose Gym Leader and inventor. Met Ash when his malfunctioning robot broke loose.',
    role: 'Electric-type specialist and brilliant inventor.'
  },
  {
    id: 'lillie',
    name: 'Lillie',
    emoji: '🌼',
    color: '#FFFDE7',
    regionId: 'alola',
    offset: { x: 70, y: -65 },
    meeting: 'Met at Pokémon School on Melemele Island.',
    role: 'Pokémon researcher with a complicated family history tied to the Ultra Beasts.'
  },
  {
    id: 'goh',
    name: 'Goh',
    emoji: '🎯',
    color: '#42A5F5',
    regionId: 'journeys',
    offset: { x: 70, y: -70 },
    meeting: 'Met at the World Coronation Series opening ceremony. Both chose Mew as their dream.',
    role: 'Pokémon researcher with a goal of catching every Pokémon, especially Mew.'
  },
];

// ── SUB-MAPS (Region detail locations shown on zoom) ──
export const SUB_MAPS = {
  kanto: {
    locations: [
      { name: 'Pallet Town',    x: -80,  y: 60,   type: 'town' },
      { name: 'Pewter City',    x: -60,  y: 30,   type: 'gym' },
      { name: 'Cerulean City',  x: 60,   y: 20,   type: 'gym' },
      { name: 'Vermilion City', x: 70,   y: 50,   type: 'gym' },
      { name: 'Celadon City',   x: 20,   y: -40,  type: 'gym' },
      { name: 'Indigo Plateau', x: -100, y: -70,  type: 'league' },
    ]
  },
  johto: {
    locations: [
      { name: 'New Bark Town',    x: 80,   y: 60,  type: 'town' },
      { name: 'Violet City',     x: 50,   y: 20,  type: 'gym' },
      { name: 'Goldenrod City',  x: -40,  y: 10,  type: 'gym' },
      { name: 'Ecruteak City',   x: -80,  y: -30, type: 'gym' },
      { name: 'Silver Conference',x: -100, y: -60, type: 'league' },
    ]
  },
  hoenn: {
    locations: [
      { name: 'Littleroot Town',  x: -70, y: 70,  type: 'town' },
      { name: 'Rustboro City',    x: -80, y: 30,  type: 'gym' },
      { name: 'Fortree City',     x: 20,  y: -20, type: 'gym' },
      { name: 'Ever Grande City', x: 80,  y: -60, type: 'league' },
    ]
  },
  sinnoh: {
    locations: [
      { name: 'Twinleaf Town',  x: -70, y: 60,  type: 'town' },
      { name: 'Sunyshore City', x: 80,  y: 20,  type: 'gym' },
      { name: 'Mt. Coronet',    x: 10,  y: -50, type: 'landmark' },
      { name: 'Lily of Valley', x: -90, y: -60, type: 'league' },
    ]
  },
  kalos: {
    locations: [
      { name: 'Vaniville Town',   x: 70,  y: 60,  type: 'town' },
      { name: 'Lumiose City',     x: 0,   y: -10, type: 'gym' },
      { name: 'Anistar City',     x: -60, y: -30, type: 'gym' },
      { name: 'Lumiose Stadium',  x: 30,  y: -60, type: 'league' },
    ]
  },
  alola: {
    locations: [
      { name: 'Melemele Island',  x: -70, y: 30,  type: 'town' },
      { name: 'Akala Island',     x: 50,  y: 40,  type: 'gym' },
      { name: 'Ula\'ula Island',  x: -20, y: -30, type: 'gym' },
      { name: 'Manalo Stadium',   x: 80,  y: -50, type: 'league' },
    ]
  },
  journeys: {
    locations: [
      { name: 'Cerise Laboratory', x: -60, y: 40,  type: 'town' },
      { name: 'Wyndon Stadium',    x: 60,  y: -40, type: 'league' },
    ]
  },
};
