/* ============================================================
 * data.js — Ash Ketchum's Complete Pokémon Journey Data
 * ============================================================
 * All content is JSON-driven. Edit the objects below to update
 * regions, Pokémon, friends, paths, and story beats.
 * ============================================================ */

// ---- Pokémon Type Color Palette ----
export const TYPE_COLORS = {
  Normal: '#A8A77A', Fire: '#EE8130', Water: '#6390F0', Electric: '#F7D02C',
  Grass: '#7AC74C', Ice: '#96D9D6', Fighting: '#C22E28', Poison: '#A33EA1',
  Ground: '#E2BF65', Flying: '#A98FF3', Psychic: '#F95587', Bug: '#A6B91A',
  Rock: '#B6A136', Ghost: '#735797', Dragon: '#6F35FC', Dark: '#705746',
  Steel: '#B7B7CE', Fairy: '#D685AD'
};

// ---- Region Color Themes ----
export const REGION_THEMES = {
  pallet:   { main: '#FFB300', glow: 'rgba(255,179,0,0.5)',  neon: '#FFD54F' },
  kanto:    { main: '#FF3B3B', glow: 'rgba(255,59,59,0.5)',  neon: '#FF6B6B' },
  orange:   { main: '#FF8C00', glow: 'rgba(255,140,0,0.5)',  neon: '#FFA940' },
  johto:    { main: '#FFE135', glow: 'rgba(255,225,53,0.5)', neon: '#FFEB5C' },
  hoenn:    { main: '#39E75F', glow: 'rgba(57,231,95,0.5)',  neon: '#6BF592' },
  frontier: { main: '#DC143C', glow: 'rgba(220,20,60,0.5)',  neon: '#FF3355' },
  sinnoh:   { main: '#4169E1', glow: 'rgba(65,105,225,0.5)', neon: '#6B8FFF' },
  unova:    { main: '#9B59B6', glow: 'rgba(155,89,182,0.5)', neon: '#BB77DD' },
  kalos:    { main: '#FF69B4', glow: 'rgba(255,105,180,0.5)',neon: '#FF8DC7' },
  alola:    { main: '#FFD700', glow: 'rgba(255,215,0,0.6)',  neon: '#FFE44D', special: 'champion' },
  journeys: { main: '#E0E0E0', glow: 'rgba(224,224,224,0.6)',neon: '#F5F5F5', special: 'monarch' }
};

// ---- Journey Nodes (20 total, in chronological order) ----
// Positions are in SVG coordinate space (viewBox: 0 0 2000 10800)
export const NODES = [
  // ── 1. PALLET TOWN — START ──
  {
    id: 'pallet-start', name: 'Pallet Town', subtitle: 'Where It All Began',
    type: 'home', colorKey: 'pallet', x: 1000, y: 500, radius: 55, icon: '🏠',
    data: {
      summary: "10-year-old Ash Ketchum oversleeps and receives a stubborn Pikachu from Professor Oak. Together, they set out to become Pokémon Master.",
      pokemonAtLab: []
    }
  },
  // ── 2. KANTO ──
  {
    id: 'kanto', name: 'Kanto', subtitle: 'The First Adventure',
    type: 'region', colorKey: 'kanto', x: 1600, y: 1100, radius: 70, icon: '⚡',
    data: {
      badges: ['Boulder', 'Cascade', 'Thunder', 'Rainbow', 'Soul', 'Marsh', 'Volcano', 'Earth'],
      pokemon: [
        { name: 'Pikachu', types: ['Electric'] },
        { name: 'Butterfree', types: ['Bug', 'Flying'] },
        { name: 'Pidgeot', types: ['Normal', 'Flying'] },
        { name: 'Bulbasaur', types: ['Grass', 'Poison'] },
        { name: 'Charizard', types: ['Fire', 'Flying'] },
        { name: 'Squirtle', types: ['Water'] },
        { name: 'Kingler', types: ['Water'] },
        { name: 'Primeape', types: ['Fighting'] },
        { name: 'Muk', types: ['Poison'] },
        { name: 'Tauros', types: ['Normal'] },
        { name: 'Lapras', types: ['Water', 'Ice'] },
        { name: 'Snorlax', types: ['Normal'] }
      ],
      released: [
        { name: 'Butterfree', context: 'Released by the sea to be with its pink Butterfree mate' },
        { name: 'Pidgeot', context: 'Left to protect a flock of Pidgey in Viridian Forest' },
        { name: 'Lapras', context: 'Returned to its family pod in the Orange Islands' }
      ],
      league: { name: 'Indigo Plateau Conference', result: 'Top 16', icon: '🏟️' },
      friends: ['Misty', 'Brock'],
      storyBeats: [
        { title: 'Bond of Thunder', desc: 'Pikachu saves Ash from Spearow flock — their lifelong bond is forged' },
        { title: 'Butterfree\'s Goodbye', desc: 'Ash releases Butterfree to be with its mate — first heartbreak' },
        { title: 'Charizard Disobeys', desc: 'Charizard refuses to listen after evolving, costing Ash battles' },
        { title: 'Ho-Oh Sighting', desc: 'Ash sees the legendary Ho-Oh on his very first day' }
      ]
    }
  },
  // ── 3. ORANGE ISLANDS ──
  {
    id: 'orange-islands', name: 'Orange Islands', subtitle: 'Island Championship',
    type: 'region', colorKey: 'orange', x: 1750, y: 1750, radius: 60, icon: '🏝️',
    data: {
      badges: ['Coral-Eye', 'Sea Ruby', 'Spike Shell', 'Jade Star'],
      pokemon: [
        { name: 'Lapras', types: ['Water', 'Ice'] },
        { name: 'Snorlax', types: ['Normal'] }
      ],
      released: [
        { name: 'Lapras', context: 'Returned to its family pod' }
      ],
      league: { name: 'Orange League', result: 'Champion 🏆', icon: '🏆' },
      friends: ['Misty', 'Tracey'],
      specialNote: 'Won the Orange League Championship — Ash\'s first major tournament victory!',
      storyBeats: [
        { title: 'Orange League Victory', desc: 'Ash defeats Drake to become Orange League Champion' },
        { title: 'Tracey Joins', desc: 'Pokémon Watcher Tracey Sketchit replaces Brock as traveling companion' },
        { title: 'Crystal Onix', desc: 'Encounter with the mysterious Crystal Onix on Sunburst Island' },
        { title: 'Lapras Farewell', desc: 'Lapras reunites with its family and departs' }
      ]
    }
  },
  // ── 4. PALLET TOWN — Homecoming 1 ──
  {
    id: 'pallet-h1', name: 'Pallet Town', subtitle: 'Homecoming I',
    type: 'home', colorKey: 'pallet', x: 1000, y: 2200, radius: 40, icon: '🏠',
    data: {
      summary: "Ash returns as Orange League Champion. Tracey stays with Professor Oak as his assistant. Brock rejoins the group, and they prepare for the Johto journey.",
      pokemonAtLab: ['Kingler', 'Muk', 'Tauros', 'Snorlax']
    }
  },
  // ── 5. JOHTO ──
  {
    id: 'johto', name: 'Johto', subtitle: 'The Silver Journey',
    type: 'region', colorKey: 'johto', x: 400, y: 2800, radius: 65, icon: '🌟',
    data: {
      badges: ['Zephyr', 'Hive', 'Plain', 'Fog', 'Storm', 'Mineral', 'Glacier', 'Rising'],
      pokemon: [
        { name: 'Heracross', types: ['Bug', 'Fighting'] },
        { name: 'Bayleef', types: ['Grass'] },
        { name: 'Quilava', types: ['Fire'] },
        { name: 'Totodile', types: ['Water'] },
        { name: 'Noctowl', types: ['Normal', 'Flying'] },
        { name: 'Donphan', types: ['Ground'] }
      ],
      released: [],
      league: { name: 'Silver Conference', result: 'Top 8', icon: '🥈' },
      friends: ['Misty', 'Brock'],
      storyBeats: [
        { title: 'Shiny Noctowl', desc: 'Ash captures a rare shiny Noctowl — his first shiny Pokémon' },
        { title: 'Charicific Valley', desc: 'Charizard stays to train at the Charicific Valley' },
        { title: 'GS Ball Mystery', desc: 'The mysterious GS Ball subplot (never resolved!)' },
        { title: 'Farewell, Misty', desc: 'Misty returns to Cerulean Gym — end of the original trio era' }
      ]
    }
  },
  // ── 6. PALLET TOWN — Homecoming 2 ──
  {
    id: 'pallet-h2', name: 'Pallet Town', subtitle: 'Homecoming II',
    type: 'home', colorKey: 'pallet', x: 1000, y: 3300, radius: 40, icon: '🏠',
    data: {
      summary: "Returns after Silver Conference. Parts ways with Misty and Brock. Ash decides to start fresh in Hoenn with only Pikachu.",
      pokemonAtLab: ['Bulbasaur', 'Kingler', 'Muk', 'Tauros', 'Snorlax', 'Heracross', 'Bayleef', 'Quilava', 'Totodile', 'Noctowl', 'Donphan']
    }
  },
  // ── 7. HOENN ──
  {
    id: 'hoenn', name: 'Hoenn', subtitle: 'Advanced Generation',
    type: 'region', colorKey: 'hoenn', x: 1650, y: 3900, radius: 65, icon: '🌿',
    data: {
      badges: ['Stone', 'Knuckle', 'Dynamo', 'Heat', 'Balance', 'Feather', 'Mind', 'Rain'],
      pokemon: [
        { name: 'Swellow', types: ['Normal', 'Flying'] },
        { name: 'Sceptile', types: ['Grass'] },
        { name: 'Corphish', types: ['Water'] },
        { name: 'Torkoal', types: ['Fire'] },
        { name: 'Glalie', types: ['Ice'] }
      ],
      released: [],
      league: { name: 'Ever Grande Conference', result: 'Top 8', icon: '🏟️' },
      friends: ['May', 'Max', 'Brock'],
      storyBeats: [
        { title: 'May\'s Contest Journey', desc: 'May begins her Pokémon Coordinator career alongside Ash' },
        { title: 'Sceptile\'s Heartbreak', desc: 'Sceptile loses its ability to use moves after a broken heart' },
        { title: 'Legendary Encounters', desc: 'Multiple legendary Pokémon encounters across Hoenn' },
        { title: 'Team Aqua vs Magma', desc: 'Ash gets caught in the conflict between Teams Aqua and Magma' }
      ]
    }
  },
  // ── 8. PALLET TOWN — Homecoming 3 ──
  {
    id: 'pallet-h3', name: 'Pallet Town', subtitle: 'Homecoming III',
    type: 'home', colorKey: 'pallet', x: 1000, y: 4400, radius: 40, icon: '🏠',
    data: {
      summary: "Returns from Hoenn, reunited with old friends. Scott invites Ash to challenge the Battle Frontier across Kanto.",
      pokemonAtLab: ['Bulbasaur', 'Kingler', 'Muk', 'Tauros', 'Snorlax', 'Heracross', 'Bayleef', 'Quilava', 'Totodile', 'Noctowl', 'Donphan', 'Swellow', 'Sceptile', 'Corphish', 'Torkoal', 'Glalie']
    }
  },
  // ── 9. KANTO BATTLE FRONTIER ──
  {
    id: 'battle-frontier', name: 'Battle Frontier', subtitle: 'Kanto\'s Ultimate Challenge',
    type: 'region', colorKey: 'frontier', x: 1550, y: 4950, radius: 60, icon: '🗡️',
    data: {
      badges: ['Knowledge', 'Arena', 'Tactics', 'Luck', 'Guts', 'Spirits', 'Ability'],
      badgeLabel: 'Frontier Symbols',
      pokemon: [
        { name: 'Aipom', types: ['Normal'] },
        { name: 'Bulbasaur', types: ['Grass', 'Poison'] },
        { name: 'Charizard', types: ['Fire', 'Flying'] },
        { name: 'Squirtle', types: ['Water'] }
      ],
      released: [],
      league: { name: 'Battle Frontier', result: 'All 7 Symbols ✅', icon: '🏅' },
      friends: ['May', 'Max', 'Brock'],
      specialNote: 'Conquered all 7 Battle Frontier facilities. Offered position as Frontier Brain but declined to continue traveling.',
      storyBeats: [
        { title: 'Frontier Brain Offer', desc: 'Scott offers Ash a position as Frontier Brain — Ash declines' },
        { title: 'Charizard Returns', desc: 'Charizard returns from Charicific Valley to help in key battles' },
        { title: 'Squirtle Squad Reunion', desc: 'Squirtle rejoins temporarily from the Squirtle Squad' },
        { title: 'May & Max Farewell', desc: 'May heads to Johto, Max returns home to Petalburg' }
      ]
    }
  },
  // ── 10. PALLET TOWN — Homecoming 4 ──
  {
    id: 'pallet-h4', name: 'Pallet Town', subtitle: 'Homecoming IV',
    type: 'home', colorKey: 'pallet', x: 1000, y: 5400, radius: 40, icon: '🏠',
    data: {
      summary: "Ash returns with all 7 Frontier Symbols. Aipom stows away as Ash prepares for the Sinnoh region. Dawn is about to begin her journey.",
      pokemonAtLab: ['Bulbasaur', 'Squirtle', 'Charizard', 'Kingler', 'Muk', 'Tauros', 'Snorlax', 'Heracross', 'Bayleef', 'Quilava', 'Totodile', 'Noctowl', 'Donphan', 'Swellow', 'Sceptile', 'Corphish', 'Torkoal', 'Glalie']
    }
  },
  // ── 11. SINNOH ──
  {
    id: 'sinnoh', name: 'Sinnoh', subtitle: 'Diamond & Pearl Era',
    type: 'region', colorKey: 'sinnoh', x: 350, y: 6000, radius: 65, icon: '💎',
    data: {
      badges: ['Coal', 'Forest', 'Cobble', 'Fen', 'Relic', 'Mine', 'Icicle', 'Beacon'],
      pokemon: [
        { name: 'Staraptor', types: ['Normal', 'Flying'] },
        { name: 'Torterra', types: ['Grass', 'Ground'] },
        { name: 'Infernape', types: ['Fire', 'Fighting'] },
        { name: 'Buizel', types: ['Water'] },
        { name: 'Gliscor', types: ['Ground', 'Flying'] },
        { name: 'Gible', types: ['Dragon', 'Ground'] }
      ],
      released: [],
      league: { name: 'Lily of the Valley Conference', result: 'Top 4', icon: '🥉' },
      friends: ['Dawn', 'Brock'],
      storyBeats: [
        { title: 'Infernape\'s Fire', desc: 'Abandoned by Paul, Chimchar finds a true trainer in Ash and unlocks Blaze' },
        { title: 'Paul Rivalry', desc: 'The most intense rival battle in the series culminates at the League' },
        { title: 'Dawn\'s Contests', desc: 'Dawn grows from a nervous beginner to a skilled Coordinator' },
        { title: 'Darkrai Defeat', desc: 'Ash loses to Tobias and his legendary Darkrai in the semi-finals' }
      ]
    }
  },
  // ── 12. PALLET TOWN — Homecoming 5 ──
  {
    id: 'pallet-h5', name: 'Pallet Town', subtitle: 'Homecoming V',
    type: 'home', colorKey: 'pallet', x: 1000, y: 6500, radius: 40, icon: '🏠',
    data: {
      summary: "Says farewell to Dawn and Brock. Brock decides to become a Pokémon Doctor. Ash sets his sights on Unova.",
      pokemonAtLab: ['Bulbasaur', 'Charizard', 'Squirtle', 'Kingler', 'Muk', 'Tauros', 'Snorlax', 'Heracross', 'Bayleef', 'Quilava', 'Totodile', 'Noctowl', 'Donphan', 'Swellow', 'Sceptile', 'Corphish', 'Torkoal', 'Glalie', 'Staraptor', 'Torterra', 'Infernape', 'Buizel', 'Gliscor', 'Gible']
    }
  },
  // ── 13. UNOVA ──
  {
    id: 'unova', name: 'Unova', subtitle: 'Black & White Era',
    type: 'region', colorKey: 'unova', x: 1750, y: 7100, radius: 65, icon: '🔮',
    data: {
      badges: ['Trio', 'Basic', 'Insect', 'Bolt', 'Quake', 'Jet', 'Freeze', 'Legend'],
      pokemon: [
        { name: 'Unfezant', types: ['Normal', 'Flying'] },
        { name: 'Oshawott', types: ['Water'] },
        { name: 'Pignite', types: ['Fire', 'Fighting'] },
        { name: 'Snivy', types: ['Grass'] },
        { name: 'Scraggy', types: ['Dark', 'Fighting'] },
        { name: 'Leavanny', types: ['Bug', 'Grass'] },
        { name: 'Palpitoad', types: ['Water', 'Ground'] },
        { name: 'Boldore', types: ['Rock'] },
        { name: 'Krookodile', types: ['Ground', 'Dark'] }
      ],
      released: [],
      league: { name: 'Vertress Conference', result: 'Top 8', icon: '🏟️' },
      friends: ['Iris', 'Cilan'],
      storyBeats: [
        { title: 'Fresh Start', desc: 'Ash travels to Unova with only Pikachu, meeting all new Pokémon' },
        { title: 'Iris & Cilan', desc: 'Iris the Dragon master-in-training and Cilan the Pokémon Connoisseur join Ash' },
        { title: 'Team Plasma Clash', desc: 'Encounters with the mysterious Team Plasma organization' },
        { title: 'Krookodile Power', desc: 'Krookodile becomes one of Ash\'s strongest Unova Pokémon' }
      ]
    }
  },
  // ── 14. PALLET TOWN — Homecoming 6 ──
  {
    id: 'pallet-h6', name: 'Pallet Town', subtitle: 'Homecoming VI',
    type: 'home', colorKey: 'pallet', x: 1000, y: 7600, radius: 40, icon: '🏠',
    data: {
      summary: "Ash parts ways with Iris and Cilan. Prepares for a journey to the Kalos region, inspired by news of Mega Evolution.",
      pokemonAtLab: ['Unfezant', 'Oshawott', 'Pignite', 'Snivy', 'Scraggy', 'Leavanny', 'Palpitoad', 'Boldore', 'Krookodile']
    }
  },
  // ── 15. KALOS ──
  {
    id: 'kalos', name: 'Kalos', subtitle: 'The XY Era',
    type: 'region', colorKey: 'kalos', x: 300, y: 8200, radius: 65, icon: '🌸',
    data: {
      badges: ['Bug', 'Cliff', 'Rumble', 'Plant', 'Voltage', 'Fairy', 'Psychic', 'Iceberg'],
      pokemon: [
        { name: 'Greninja', types: ['Water', 'Dark'], special: 'Ash-Greninja Form' },
        { name: 'Talonflame', types: ['Fire', 'Flying'] },
        { name: 'Hawlucha', types: ['Fighting', 'Flying'] },
        { name: 'Goodra', types: ['Dragon'] },
        { name: 'Noivern', types: ['Flying', 'Dragon'] }
      ],
      released: [
        { name: 'Goodra', context: 'Returned to its wetlands home to protect its friends' },
        { name: 'Greninja', context: 'Stayed behind to protect Kalos with Zygarde' }
      ],
      league: { name: 'Lumiose Conference', result: 'Runner-Up', icon: '🥈' },
      friends: ['Serena', 'Clemont', 'Bonnie'],
      storyBeats: [
        { title: 'Ash-Greninja', desc: 'Ash and Greninja achieve a unique Bond Phenomenon transformation' },
        { title: 'Kalos League Finals', desc: 'Ash reaches his first League final — narrowly loses to Alain' },
        { title: 'Serena\'s Dream', desc: 'Serena discovers Pokémon Performing and finds her own path' },
        { title: 'Team Flare Crisis', desc: 'Ash helps save Kalos from Team Flare\'s plan to destroy everything' }
      ]
    }
  },
  // ── 16. PALLET TOWN — Homecoming 7 ──
  {
    id: 'pallet-h7', name: 'Pallet Town', subtitle: 'Homecoming VII',
    type: 'home', colorKey: 'pallet', x: 1000, y: 8700, radius: 40, icon: '🏠',
    data: {
      summary: "Returns after the most emotional Kalos journey. Greninja stays to protect Kalos. Ash heads to Alola for a vacation that becomes a new adventure.",
      pokemonAtLab: ['Talonflame', 'Hawlucha', 'Noivern']
    }
  },
  // ── 17. ALOLA ──
  {
    id: 'alola', name: 'Alola', subtitle: 'Sun & Moon — Champion!',
    type: 'region', colorKey: 'alola', x: 1650, y: 9300, radius: 70, icon: '☀️',
    data: {
      badges: [],
      badgeLabel: 'Z-Crystals & Grand Trials',
      challenges: ['Island Trials', 'Grand Trials', 'Z-Crystals earned'],
      pokemon: [
        { name: 'Rowlet', types: ['Grass', 'Flying'] },
        { name: 'Lycanroc', types: ['Rock'], special: 'Dusk Form' },
        { name: 'Melmetal', types: ['Steel'] },
        { name: 'Naganadel', types: ['Poison', 'Dragon'] }
      ],
      released: [
        { name: 'Naganadel', context: 'Returned to Ultra Space through an Ultra Wormhole' }
      ],
      league: { name: 'Manalo Conference', result: 'CHAMPION 👑', icon: '👑' },
      friends: ['Lillie', 'Kiawe', 'Lana', 'Sophocles', 'Mallow', 'Professor Kukui'],
      specialNote: 'ASH BECOMES POKÉMON LEAGUE CHAMPION FOR THE FIRST TIME! Defeats Gladion in the finals of the Manalo Conference.',
      storyBeats: [
        { title: 'FIRST LEAGUE WIN!', desc: 'Ash wins the Manalo Conference — his first official League Championship!' },
        { title: 'Pokémon School', desc: 'Ash enrolls in the Pokémon School, a first for the wandering trainer' },
        { title: 'Ultra Beasts', desc: 'Ash and friends form the Ultra Guardians to protect Alola from Ultra Beasts' },
        { title: 'Exhibition Match', desc: 'Ash battles Professor Kukui\'s alter ego, the Masked Royal' }
      ]
    }
  },
  // ── 18. PALLET TOWN — Homecoming 8 ──
  {
    id: 'pallet-h8', name: 'Pallet Town', subtitle: 'Homecoming VIII',
    type: 'home', colorKey: 'pallet', x: 1000, y: 9800, radius: 40, icon: '🏠',
    data: {
      summary: "Returns as the Alola League Champion! Ash is invited to Professor Cerise's research lab in Vermilion City to begin a new world-spanning adventure.",
      pokemonAtLab: ['Rowlet', 'Lycanroc', 'Melmetal']
    }
  },
  // ── 19. JOURNEYS / WORLD CORONATION ──
  {
    id: 'journeys', name: 'Pokémon Journeys', subtitle: 'World Coronation Series',
    type: 'region', colorKey: 'journeys', x: 450, y: 10300, radius: 70, icon: '🌍',
    data: {
      badges: [],
      badgeLabel: 'World Coronation Ranks',
      challenges: ['Normal Class → Great Class → Ultra Class → Master Class → MONARCH'],
      pokemon: [
        { name: 'Dragonite', types: ['Dragon', 'Flying'] },
        { name: 'Gengar', types: ['Ghost', 'Poison'] },
        { name: 'Lucario', types: ['Fighting', 'Steel'], special: 'Mega Evolution' },
        { name: 'Sirfetch\'d', types: ['Fighting'] },
        { name: 'Dracovish', types: ['Water', 'Dragon'] }
      ],
      released: [],
      league: { name: 'World Coronation Series', result: 'WORLD MONARCH 🌍👑', icon: '🌍' },
      friends: ['Goh', 'Chloe'],
      specialNote: 'ASH DEFEATS LEON AND BECOMES WORLD CHAMPION — THE STRONGEST TRAINER IN THE WORLD!',
      storyBeats: [
        { title: 'WORLD CHAMPION!', desc: 'Ash defeats Leon in the Master Class finals to become the World Monarch' },
        { title: 'Goh\'s Quest', desc: 'Goh\'s dream to catch every Pokémon, including the mythical Mew' },
        { title: 'Mega Lucario', desc: 'Ash\'s Lucario achieves Mega Evolution through their deep bond' },
        { title: 'Masters Eight', desc: 'Ash battles through the world\'s 8 strongest trainers in the tournament' }
      ]
    }
  },
  // ── 20. PALLET TOWN — FINAL HOMECOMING ──
  {
    id: 'pallet-final', name: 'Pallet Town', subtitle: 'The Eternal Champion Returns',
    type: 'home', colorKey: 'pallet', x: 1000, y: 10800, radius: 60, icon: '🏠',
    data: {
      summary: "The World Monarch returns home to Pallet Town. Ash has achieved everything — from a boy who overslept to the strongest trainer in the world. But his journey continues, because the road to becoming a Pokémon Master never truly ends.",
      pokemonAtLab: ['Dragonite', 'Gengar', 'Lucario', 'Sirfetch\'d', 'Dracovish'],
      isFinal: true
    }
  }
];

// ---- Path Segments (19 connections between consecutive nodes) ----
export const PATHS = [
  {
    id: 'path-0', from: 'pallet-start', to: 'kanto',
    travelMethod: '🚶 Walking',
    summary: 'Setting out on Route 1 with a reluctant Pikachu who won\'t enter its Poké Ball.',
    events: [
      'Pikachu saves Ash from a Spearow flock — their bond is born',
      'Ash sees the legendary Ho-Oh on his very first day',
      'Arrives in Viridian City, meets Officer Jenny and Nurse Joy'
    ]
  },
  {
    id: 'path-1', from: 'kanto', to: 'orange-islands',
    travelMethod: '⛵ Sailing',
    summary: 'Sailing adventure to the Orange Archipelago. Team Rocket encounters, mysterious GS Ball.',
    events: [
      'Professor Oak sends Ash to retrieve the GS Ball from Professor Ivy',
      'Brock stays with Professor Ivy on Valencia Island',
      'Ash catches Lapras to travel between islands'
    ]
  },
  {
    id: 'path-2', from: 'orange-islands', to: 'pallet-h1',
    travelMethod: '⛵ Sailing on Lapras',
    summary: 'Returned to Pallet, said goodbye to Lapras, Tracey stays with Professor Oak.',
    events: [
      'Lapras reunites with its family pod',
      'Tracey becomes Professor Oak\'s research assistant',
      'Brock returns after things didn\'t work out with Professor Ivy'
    ]
  },
  {
    id: 'path-3', from: 'pallet-h1', to: 'johto',
    travelMethod: '🚶 Walking',
    summary: 'Walking west toward New Bark Town with Brock and Misty.',
    events: [
      'Professor Elm introduces the Johto region Pokémon',
      'Ash catches Heracross almost immediately',
      'The original trio reunites for one last great adventure'
    ]
  },
  {
    id: 'path-4', from: 'johto', to: 'pallet-h2',
    travelMethod: '🚶 Walking',
    summary: 'Return after Silver Conference. The original trio splits up.',
    events: [
      'Misty is called back to Cerulean Gym',
      'Brock briefly returns home to Pewter City',
      'Ash decides to travel to Hoenn with only Pikachu'
    ]
  },
  {
    id: 'path-5', from: 'pallet-h2', to: 'hoenn',
    travelMethod: '⛵ Solo boat journey',
    summary: 'Solo boat journey to Hoenn. Pikachu temporarily lost power in a storm.',
    events: [
      'A storm causes Pikachu to overload with electricity',
      'Team Rocket follows on their own boat',
      'Ash meets Professor Birch who is being chased by Poochyena',
      'May joins as a new traveling companion'
    ]
  },
  {
    id: 'path-6', from: 'hoenn', to: 'pallet-h3',
    travelMethod: '⛵ Ship',
    summary: 'Returned home after Ever Grande Conference. Reunited with old friends.',
    events: [
      'Scott introduces himself and the Battle Frontier',
      'Ash decides to challenge all 7 Frontier Brains',
      'May decides to continue traveling with Ash'
    ]
  },
  {
    id: 'path-7', from: 'pallet-h3', to: 'battle-frontier',
    travelMethod: '🚶 Traveling across Kanto',
    summary: 'Returned to Pallet, met Scott, decided to challenge Battle Frontier across Kanto.',
    events: [
      'Battle Frontier facilities are scattered across Kanto',
      'Ash reunites with Charizard and Squirtle for key battles',
      'May participates in Kanto Pokémon Contests'
    ]
  },
  {
    id: 'path-8', from: 'battle-frontier', to: 'pallet-h4',
    travelMethod: '🚶 Walking',
    summary: 'Completed all Frontier Symbols. Declined the Frontier Brain position.',
    events: [
      'May heads to Johto for Contests, Max returns to Petalburg',
      'Aipom decides to follow Ash',
      'Ash is offered to be a Frontier Brain but chooses to keep traveling'
    ]
  },
  {
    id: 'path-9', from: 'pallet-h4', to: 'sinnoh',
    travelMethod: '✈️ Night flight',
    summary: 'Night flight to Sinnoh. Aipom stowed away in Ash\'s luggage.',
    events: [
      'Aipom snuck aboard, becoming part of the Sinnoh team',
      'Pikachu was briefly captured by Team Rocket upon arrival',
      'Ash meets Dawn and her Piplup in Twinleaf Town'
    ]
  },
  {
    id: 'path-10', from: 'sinnoh', to: 'pallet-h5',
    travelMethod: '⛵ Ship',
    summary: 'Returns after the emotional Sinnoh journey. Farewell to Dawn and Brock.',
    events: [
      'Brock decides to pursue becoming a Pokémon Doctor',
      'Dawn continues her Contest journey in other regions',
      'Ash reflects on the intense rivalry with Paul'
    ]
  },
  {
    id: 'path-11', from: 'pallet-h5', to: 'unova',
    travelMethod: '✈️ Plane flight',
    summary: 'Boat cruise tragedy (shipwreck illusion by Team Rocket), arrival in Nuvema Town.',
    events: [
      'Team Rocket stages a fake shipwreck',
      'Pikachu loses its Electric-type moves temporarily due to Zekrom',
      'Ash decides to start completely fresh with only Pikachu'
    ]
  },
  {
    id: 'path-12', from: 'unova', to: 'pallet-h6',
    travelMethod: '✈️ Plane',
    summary: 'Departs Unova after the Vertress Conference, parting with Iris and Cilan.',
    events: [
      'Iris heads to train at the Dragon Village',
      'Cilan goes on a fishing journey',
      'Ash hears about Mega Evolution in the Kalos region'
    ]
  },
  {
    id: 'path-13', from: 'pallet-h6', to: 'kalos',
    travelMethod: '✈️ Plane flight',
    summary: 'Plane flight to Kalos. Pikachu nearly lost again. Arrival in Lumiose City.',
    events: [
      'Ash is flung from Prism Tower by a malfunctioning Clembot',
      'Saved by Mega Blaziken\'s trainer',
      'Serena recognizes Ash from a childhood summer camp'
    ]
  },
  {
    id: 'path-14', from: 'kalos', to: 'pallet-h7',
    travelMethod: '✈️ Plane',
    summary: 'Emotional farewell. Greninja stays behind, Serena heads to Hoenn.',
    events: [
      'Greninja stays to protect Kalos alongside Zygarde',
      'Serena kisses Ash goodbye at the airport escalator',
      'Clemont and Bonnie return to Lumiose Gym'
    ]
  },
  {
    id: 'path-15', from: 'pallet-h7', to: 'alola',
    travelMethod: '✈️ Vacation flight',
    summary: 'Vacation trip to Alola that becomes a new adventure. Professor Oak\'s cousin Samson Oak.',
    events: [
      'Mom wins a trip to Alola for the family',
      'Ash encounters Tapu Koko and receives a Z-Ring',
      'Ash decides to enroll in the Pokémon School'
    ]
  },
  {
    id: 'path-16', from: 'alola', to: 'pallet-h8',
    travelMethod: '✈️ Flight',
    summary: 'Returns as Alola League Champion! Invited to Professor Cerise\'s lab.',
    events: [
      'Ash is now an official Pokémon League Champion',
      'Professor Cerise in Vermilion City offers Ash a research fellowship',
      'Ash meets Goh, who dreams of catching Mew'
    ]
  },
  {
    id: 'path-17', from: 'pallet-h8', to: 'journeys',
    travelMethod: '🚆 Train to Vermilion',
    summary: 'Returned as Champion, invited to Professor Cerise\'s lab in Vermilion City.',
    events: [
      'Ash and Goh become research fellows at Cerise Laboratory',
      'The World Coronation Series is announced',
      'Ash enters to battle the strongest trainers in the world'
    ]
  },
  {
    id: 'path-18', from: 'journeys', to: 'pallet-final',
    travelMethod: '🚶 Walking home',
    summary: 'Victory tour — the World Monarch returns to Pallet Town. The journey has come full circle.',
    events: [
      'Ash has defeated Leon and become the World Monarch',
      'Reunions with companions from every region',
      'Ash sees Ho-Oh one final time — the circle is complete',
      'But the journey continues... a Pokémon Master\'s road never ends'
    ]
  }
];

// ---- Traveling Companions ----
export const FRIENDS = [
  {
    id: 'misty', name: 'Misty', emoji: '💧', color: '#6390F0',
    regionId: 'kanto', offset: { x: -80, y: -50 },
    meeting: 'Ash destroyed her bike on Route 1. She followed him demanding a new one — and became his first human friend.',
    role: 'Water-type specialist. Gym Leader of Cerulean City. Traveled through Kanto, Orange Islands, and Johto.',
    regions: ['kanto', 'orange-islands', 'johto']
  },
  {
    id: 'brock', name: 'Brock', emoji: '🪨', color: '#B6A136',
    regionId: 'kanto', offset: { x: 80, y: -50 },
    meeting: 'Former Pewter City Gym Leader who joined Ash after their battle, pursuing his dream of becoming a Pokémon Breeder.',
    role: 'Rock-type expert, team cook, hopeless romantic. Traveled through Kanto, Johto, Hoenn, Battle Frontier, and Sinnoh.',
    regions: ['kanto', 'johto', 'hoenn', 'battle-frontier', 'sinnoh']
  },
  {
    id: 'tracey', name: 'Tracey', emoji: '🎨', color: '#7AC74C',
    regionId: 'orange-islands', offset: { x: -70, y: 60 },
    meeting: 'A Pokémon Watcher who joined Ash in the Orange Islands, sketching every Pokémon they encountered.',
    role: 'Pokémon Watcher and sketch artist. Later became Professor Oak\'s assistant.',
    regions: ['orange-islands']
  },
  {
    id: 'may', name: 'May', emoji: '🎀', color: '#FF69B4',
    regionId: 'hoenn', offset: { x: -80, y: -40 },
    meeting: 'Daughter of Petalburg Gym Leader Norman. Started her journey not even liking Pokémon but found her passion in Contests.',
    role: 'Pokémon Coordinator. Traveled through Hoenn and Battle Frontier with Ash.',
    regions: ['hoenn', 'battle-frontier']
  },
  {
    id: 'max', name: 'Max', emoji: '🤓', color: '#39E75F',
    regionId: 'hoenn', offset: { x: -40, y: 65 },
    meeting: 'May\'s younger brother. Too young for his own Pokémon but full of knowledge and enthusiasm.',
    role: 'May\'s younger brother and walking Pokédex. Dreamed of starting his own journey.',
    regions: ['hoenn', 'battle-frontier']
  },
  {
    id: 'dawn', name: 'Dawn', emoji: '💎', color: '#4169E1',
    regionId: 'sinnoh', offset: { x: -70, y: 55 },
    meeting: 'A new Coordinator from Twinleaf Town. Her catchphrase: "No need to worry!"',
    role: 'Pokémon Coordinator following in her mother Johanna\'s footsteps. Traveled through Sinnoh.',
    regions: ['sinnoh']
  },
  {
    id: 'iris', name: 'Iris', emoji: '🐉', color: '#6F35FC',
    regionId: 'unova', offset: { x: -70, y: -50 },
    meeting: 'A wild girl from the Village of Dragons who dreams of becoming a Dragon Master.',
    role: 'Dragon-type trainer. Called Ash "such a kid." Later became Unova Champion.',
    regions: ['unova']
  },
  {
    id: 'cilan', name: 'Cilan', emoji: '🍽️', color: '#7AC74C',
    regionId: 'unova', offset: { x: 70, y: -50 },
    meeting: 'One of the Striaton City Gym Leaders and a self-proclaimed Pokémon Connoisseur.',
    role: 'Pokémon Connoisseur, gourmet chef, and Grass-type Gym Leader.',
    regions: ['unova']
  },
  {
    id: 'serena', name: 'Serena', emoji: '🎀', color: '#FF69B4',
    regionId: 'kalos', offset: { x: -80, y: -45 },
    meeting: 'Recognized Ash from a childhood Pokémon Summer Camp where he helped her when she was lost in a forest.',
    role: 'Pokémon Performer. Ash\'s closest emotional connection. Kissed him goodbye at the airport.',
    regions: ['kalos']
  },
  {
    id: 'clemont', name: 'Clemont', emoji: '⚡', color: '#F7D02C',
    regionId: 'kalos', offset: { x: 55, y: -55 },
    meeting: 'The Lumiose City Gym Leader and inventor. His Clembot went haywire and kicked him out of his own Gym.',
    role: 'Electric-type Gym Leader and prolific inventor (whose inventions usually explode).',
    regions: ['kalos']
  },
  {
    id: 'bonnie', name: 'Bonnie', emoji: '🌺', color: '#D685AD',
    regionId: 'kalos', offset: { x: 75, y: 45 },
    meeting: 'Clemont\'s energetic younger sister who constantly tried to find a wife for her brother.',
    role: 'Clemont\'s little sister. Cared for Squishy (Zygarde Core) during the Team Flare crisis.',
    regions: ['kalos']
  },
  {
    id: 'lillie', name: 'Lillie', emoji: '❄️', color: '#96D9D6',
    regionId: 'alola', offset: { x: -90, y: -35 },
    meeting: 'A classmate at the Pokémon School who was initially afraid to touch Pokémon.',
    role: 'Overcame her fear of touching Pokémon. Daughter of the Aether Foundation president.',
    regions: ['alola']
  },
  {
    id: 'kiawe', name: 'Kiawe', emoji: '🔥', color: '#EE8130',
    regionId: 'alola', offset: { x: -45, y: -75 },
    meeting: 'A Fire-type trainer and family ranch helper on Akala Island.',
    role: 'Passionate Fire-type user. Rides Charizard to deliver milk from his family farm.',
    regions: ['alola']
  },
  {
    id: 'lana', name: 'Lana', emoji: '🌊', color: '#6390F0',
    regionId: 'alola', offset: { x: 45, y: -65 },
    meeting: 'A Water-type specialist and skilled fisher from Konikoni City.',
    role: 'Water-type expert with a mischievous sense of humor. Dreams of fishing a Kyogre.',
    regions: ['alola']
  },
  {
    id: 'sophocles', name: 'Sophocles', emoji: '🔌', color: '#F7D02C',
    regionId: 'alola', offset: { x: 85, y: -25 },
    meeting: 'An Electric-type lover and tech genius at the Pokémon School.',
    role: 'Tech whiz and inventor. His Togedemaru is a natural lightning rod.',
    regions: ['alola']
  },
  {
    id: 'mallow', name: 'Mallow', emoji: '🌿', color: '#7AC74C',
    regionId: 'alola', offset: { x: 65, y: 55 },
    meeting: 'A Grass-type trainer who runs her family\'s restaurant in Hau\'oli City.',
    role: 'Aspiring chef and Grass-type specialist. Her cooking brings everyone together.',
    regions: ['alola']
  },
  {
    id: 'goh', name: 'Goh', emoji: '📱', color: '#E0E0E0',
    regionId: 'journeys', offset: { x: -75, y: 55 },
    meeting: 'Met Ash at Professor Cerise\'s lab in Vermilion City. Dreams of catching every Pokémon, especially Mew.',
    role: 'Ash\'s main companion during Journeys. Catches Pokémon from every region. Eventually joins Project Mew.',
    regions: ['journeys']
  },
  {
    id: 'chloe', name: 'Chloe', emoji: '🦋', color: '#F95587',
    regionId: 'journeys', offset: { x: 75, y: 55 },
    meeting: 'Professor Cerise\'s daughter. Initially unsure about her path, she slowly discovers her love for Pokémon.',
    role: 'Gradually finds her calling through her bond with Eevee, exploring all its possible evolutions.',
    regions: ['journeys']
  }
];

// ---- Sub-Map Data (key locations per region, shown on zoom-in) ----
export const SUB_MAPS = {
  kanto: {
    locations: [
      { name: 'Pewter City', type: 'gym', badge: 'Boulder', x: -120, y: -80 },
      { name: 'Cerulean City', type: 'gym', badge: 'Cascade', x: 60, y: -100 },
      { name: 'Vermilion City', type: 'gym', badge: 'Thunder', x: 100, y: -20 },
      { name: 'Celadon City', type: 'gym', badge: 'Rainbow', x: -80, y: 20 },
      { name: 'Saffron City', type: 'gym', badge: 'Marsh', x: 20, y: 60 },
      { name: 'Viridian Forest', type: 'story', x: -140, y: -40, note: 'Butterfree caught, Pidgeot left' },
      { name: 'Indigo Plateau', type: 'league', x: 0, y: 120, note: 'Top 16 finish' }
    ]
  },
  'orange-islands': {
    locations: [
      { name: 'Valencia Island', type: 'story', x: -100, y: -60, note: 'GS Ball retrieved' },
      { name: 'Navel Island', type: 'gym', badge: 'Sea Ruby', x: 60, y: -80 },
      { name: 'Trovita Island', type: 'gym', badge: 'Spike Shell', x: 100, y: 20 },
      { name: 'Pummelo Island', type: 'league', x: 0, y: 90, note: 'Orange League Championship' }
    ]
  },
  johto: {
    locations: [
      { name: 'New Bark Town', type: 'start', x: -120, y: -70 },
      { name: 'Violet City', type: 'gym', badge: 'Zephyr', x: -60, y: -90 },
      { name: 'Goldenrod City', type: 'gym', badge: 'Plain', x: 40, y: -40 },
      { name: 'Ecruteak City', type: 'gym', badge: 'Fog', x: -80, y: 30 },
      { name: 'Charicific Valley', type: 'story', x: 100, y: 10, note: 'Charizard trains here' },
      { name: 'Silver Town', type: 'league', x: 0, y: 110, note: 'Top 8 finish' }
    ]
  },
  hoenn: {
    locations: [
      { name: 'Littleroot Town', type: 'start', x: -120, y: -70 },
      { name: 'Rustboro City', type: 'gym', badge: 'Stone', x: -60, y: -90 },
      { name: 'Petalburg City', type: 'gym', badge: 'Balance', x: 60, y: -50 },
      { name: 'Lavaridge Town', type: 'gym', badge: 'Heat', x: 100, y: 20 },
      { name: 'Ever Grande City', type: 'league', x: 0, y: 110, note: 'Top 8 finish' }
    ]
  },
  'battle-frontier': {
    locations: [
      { name: 'Battle Factory', type: 'frontier', x: -100, y: -70 },
      { name: 'Battle Arena', type: 'frontier', x: 0, y: -90 },
      { name: 'Battle Dome', type: 'frontier', x: 100, y: -50 },
      { name: 'Battle Pike', type: 'frontier', x: -80, y: 30 },
      { name: 'Battle Palace', type: 'frontier', x: 60, y: 50 },
      { name: 'Battle Tower', type: 'frontier', x: 0, y: 100 }
    ]
  },
  sinnoh: {
    locations: [
      { name: 'Twinleaf Town', type: 'start', x: -120, y: -70 },
      { name: 'Oreburgh City', type: 'gym', badge: 'Coal', x: -50, y: -90 },
      { name: 'Hearthome City', type: 'gym', badge: 'Relic', x: 60, y: -40 },
      { name: 'Snowpoint City', type: 'gym', badge: 'Icicle', x: 100, y: 30 },
      { name: 'Sunyshore City', type: 'gym', badge: 'Beacon', x: -80, y: 60 },
      { name: 'Lily of the Valley', type: 'league', x: 0, y: 110, note: 'Top 4 — defeated by Tobias' }
    ]
  },
  unova: {
    locations: [
      { name: 'Nuvema Town', type: 'start', x: -120, y: -70 },
      { name: 'Striaton City', type: 'gym', badge: 'Trio', x: -50, y: -90 },
      { name: 'Castelia City', type: 'gym', badge: 'Insect', x: 60, y: -40 },
      { name: 'Nimbasa City', type: 'gym', badge: 'Bolt', x: 100, y: 20 },
      { name: 'Vertress City', type: 'league', x: 0, y: 110, note: 'Top 8 finish' }
    ]
  },
  kalos: {
    locations: [
      { name: 'Lumiose City', type: 'gym', badge: 'Voltage', x: 0, y: -90, note: 'Clemont\'s Gym & Prism Tower' },
      { name: 'Santalune City', type: 'gym', badge: 'Bug', x: -100, y: -60 },
      { name: 'Shalour City', type: 'gym', badge: 'Rumble', x: 80, y: -30, note: 'Mega Evolution guru Korrina' },
      { name: 'Anistar City', type: 'gym', badge: 'Psychic', x: -80, y: 40 },
      { name: 'Lumiose Conference', type: 'league', x: 0, y: 110, note: 'Runner-up to Alain' }
    ]
  },
  alola: {
    locations: [
      { name: 'Melemele Island', type: 'trial', x: -100, y: -70, note: 'Tapu Koko grants Z-Ring' },
      { name: 'Akala Island', type: 'trial', x: 80, y: -60 },
      { name: 'Ula\'ula Island', type: 'trial', x: -60, y: 30 },
      { name: 'Poni Island', type: 'trial', x: 80, y: 50 },
      { name: 'Manalo Stadium', type: 'league', x: 0, y: 110, note: 'CHAMPION! 👑' }
    ]
  },
  journeys: {
    locations: [
      { name: 'Cerise Laboratory', type: 'home-base', x: -80, y: -70, note: 'Vermilion City HQ' },
      { name: 'Wyndon Stadium', type: 'battle', x: 80, y: -60, note: 'Finals vs Leon' },
      { name: 'Galar Region', type: 'story', x: 0, y: 0, note: 'Where Leon reigns' },
      { name: 'World Stage', type: 'league', x: 0, y: 100, note: 'WORLD MONARCH! 🌍👑' }
    ]
  }
};
