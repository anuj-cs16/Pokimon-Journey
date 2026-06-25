/* ============================================================
 * pokedex-data.js — Ash's Personal Pokédex Data
 * Power Tiers: S+ (95-100), S (85-94), A (70-84), B (50-69), C (1-49)
 * ============================================================ */

export const POKEDEX_DATA = [
  {
    id: "pikachu",
    name: "Pikachu",
    types: ["Electric"],
    region: "Kanto",
    powerTier: "S+",
    powerLevel: 98,
    status: "Active",
    caughtLocation: "Pallet Town outskirts",
    currentLocation: "With Ash",
    episodes: [
      { code: "EP001", title: "Pokémon, I Choose You!" },
      { code: "EP002", title: "Pokémon Emergency!" },
      { code: "EP014", title: "Electric Shock Showdown" },
      { code: "JN132", title: "Partners in Time!" }
    ],
    moves: [
      { name: "Thunderbolt", category: "Special", firstUsed: "EP005" },
      { name: "Quick Attack", category: "Physical", firstUsed: "EP003" },
      { name: "Iron Tail", category: "Physical", firstUsed: "EP013" },
      { name: "Electroweb", category: "Special", firstUsed: "JN006" },
      { name: "Volt Tackle", category: "Physical", firstUsed: "AG150" },
      { name: "10,000,000 Volt Thunderbolt", category: "Special", firstUsed: "SM054" }
    ],
    evolutionLine: ["Pichu", "Pikachu", "Raichu"],
    currentStage: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  {
    id: "greninja",
    name: "Greninja",
    types: ["Water", "Dark"],
    region: "Kalos",
    powerTier: "S+",
    powerLevel: 96,
    status: "Released",
    caughtLocation: "Lumiose City",
    currentLocation: "Kalos Region (Protecting Zygarde)",
    episodes: [
      { code: "XY001", title: "Kalos, Where Dreams and Adventures Begin!" },
      { code: "XY100", title: "A Festival of Decisions!" },
      { code: "XY130", title: "Finals Not for the Faint-Hearted!" }
    ],
    moves: [
      { name: "Water Shuriken", category: "Special", firstUsed: "XY100" },
      { name: "Double Team", category: "Status", firstUsed: "XY003" },
      { name: "Cut", category: "Physical", firstUsed: "XY009" },
      { name: "Aerial Ace", category: "Physical", firstUsed: "XY052" }
    ],
    evolutionLine: ["Froakie", "Frogadier", "Greninja"],
    currentStage: "Greninja (Ash-Greninja)",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png"
  },
  {
    id: "charizard",
    name: "Charizard",
    types: ["Fire", "Flying"],
    region: "Kanto",
    powerTier: "S+",
    powerLevel: 95,
    status: "At Oak's Lab",
    caughtLocation: "Route 24",
    currentLocation: "Professor Oak's Lab",
    episodes: [
      { code: "EP011", title: "Charmander – The Stray Pokémon" },
      { code: "EP043", title: "The March of the Exeggutor Squad" },
      { code: "EP046", title: "Attack of the Prehistoric Pokémon" }
    ],
    moves: [
      { name: "Flamethrower", category: "Special", firstUsed: "EP011" },
      { name: "Seismic Toss", category: "Physical", firstUsed: "EP059" },
      { name: "Fire Spin", category: "Special", firstUsed: "EP046" },
      { name: "Dragon Tail", category: "Physical", firstUsed: "BW116" }
    ],
    evolutionLine: ["Charmander", "Charmeleon", "Charizard"],
    currentStage: "Charizard",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  },
  {
    id: "lucario",
    name: "Lucario",
    types: ["Fighting", "Steel"],
    region: "Journeys",
    powerTier: "S+",
    powerLevel: 95,
    status: "At Oak's Lab",
    caughtLocation: "Vermilion City (Hatched)",
    currentLocation: "Professor Oak's Lab",
    episodes: [
      { code: "JN021", title: "Caring for a Mystery!" },
      { code: "JN045", title: "Sword and Shield: The Legends Awaken!" },
      { code: "JN131", title: "Paring Pokémon!" }
    ],
    moves: [
      { name: "Aura Sphere", category: "Special", firstUsed: "JN045" },
      { name: "Force Palm", category: "Physical", firstUsed: "JN034" },
      { name: "Double Team", category: "Status", firstUsed: "JN034" },
      { name: "Bullet Punch", category: "Physical", firstUsed: "JN114" }
    ],
    evolutionLine: ["Riolu", "Lucario"],
    currentStage: "Lucario (Mega Lucario)",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
  },
  {
    id: "infernape",
    name: "Infernape",
    types: ["Fire", "Fighting"],
    region: "Sinnoh",
    powerTier: "S",
    powerLevel: 92,
    status: "At Oak's Lab",
    caughtLocation: "Hearthome City",
    currentLocation: "Professor Oak's Lab",
    episodes: [
      { code: "DP051", title: "Glory Blaze!" },
      { code: "DP052", title: "Smells Like Team Spirit!" },
      { code: "DP163", title: "Fighting Ire with Fire!" }
    ],
    moves: [
      { name: "Flamethrower", category: "Special", firstUsed: "DP051" },
      { name: "Mach Punch", category: "Physical", firstUsed: "DP131" },
      { name: "Flare Blitz", category: "Physical", firstUsed: "DP163" },
      { name: "Dig", category: "Physical", firstUsed: "DP051" }
    ],
    evolutionLine: ["Chimchar", "Monferno", "Infernape"],
    currentStage: "Infernape",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
  },
  {
    id: "sceptile",
    name: "Sceptile",
    types: ["Grass"],
    region: "Hoenn",
    powerTier: "S",
    powerLevel: 90,
    status: "At Oak's Lab",
    caughtLocation: "Petalburg Woods",
    currentLocation: "Professor Oak's Lab",
    episodes: [
      { code: "AG007", title: "Tree's a Crowd" },
      { code: "AG066", title: "Exploud and Clear!" },
      { code: "AG161", title: "Odd Pokémon Out!" }
    ],
    moves: [
      { name: "Leaf Blade", category: "Physical", firstUsed: "AG066" },
      { name: "Quick Attack", category: "Physical", firstUsed: "AG007" },
      { name: "Solar Beam", category: "Special", firstUsed: "AG161" },
      { name: "Leaf Storm", category: "Special", firstUsed: "DP189" }
    ],
    evolutionLine: ["Treecko", "Grovyle", "Sceptile"],
    currentStage: "Sceptile",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png"
  },
  {
    id: "snorlax",
    name: "Snorlax",
    types: ["Normal"],
    region: "Orange Islands",
    powerTier: "S",
    powerLevel: 88,
    status: "At Oak's Lab",
    caughtLocation: "Grapefruit Islands",
    currentLocation: "Professor Oak's Lab",
    episodes: [
      { code: "EP094", title: "Snack Attack" },
      { code: "EP112", title: "Enter The Dragonite" },
      { code: "AG149", title: "Wheel of Frontier" }
    ],
    moves: [
      { name: "Body Slam", category: "Physical", firstUsed: "EP094" },
      { name: "Hyper Beam", category: "Special", firstUsed: "EP094" },
      { name: "Ice Punch", category: "Physical", firstUsed: "EP253" },
      { name: "Rest", category: "Status", firstUsed: "AG149" }
    ],
    evolutionLine: ["Munchlax", "Snorlax"],
    currentStage: "Snorlax",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
  },
  {
    id: "heracross",
    name: "Heracross",
    types: ["Bug", "Fighting"],
    region: "Johto",
    powerTier: "A",
    powerLevel: 82,
    status: "At Oak's Lab",
    caughtLocation: "Route 29",
    currentLocation: "Professor Oak's Lab",
    episodes: [
      { code: "EP119", title: "A Sappy Ending" },
      { code: "EP140", title: "Wired for Battle!" },
      { code: "DP183", title: "League Unleashed!" }
    ],
    moves: [
      { name: "Megahorn", category: "Physical", firstUsed: "EP140" },
      { name: "Horn Attack", category: "Physical", firstUsed: "EP119" },
      { name: "Focus Punch", category: "Physical", firstUsed: "EP270" },
      { name: "Sleep Talk", category: "Status", firstUsed: "DP183" }
    ],
    evolutionLine: ["Heracross"],
    currentStage: "Heracross",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
  },
  {
    id: "rowlet",
    name: "Rowlet",
    types: ["Grass", "Flying"],
    region: "Alola",
    powerTier: "B",
    powerLevel: 65,
    status: "At Oak's Lab",
    caughtLocation: "Melemele Island",
    currentLocation: "Professor Oak's Lab",
    episodes: [
      { code: "SM004", title: "First Catch in Alola, Ketchum-Style!" },
      { code: "SM097", title: "No Stone Unturned!" },
      { code: "SM133", title: "Battle Royal 151!" }
    ],
    moves: [
      { name: "Leafage", category: "Physical", firstUsed: "SM004" },
      { name: "Peck", category: "Physical", firstUsed: "SM004" },
      { name: "Brave Bird", category: "Physical", firstUsed: "SM133" },
      { name: "Seed Bomb", category: "Physical", firstUsed: "SM097" }
    ],
    evolutionLine: ["Rowlet", "Dartrix", "Decidueye"],
    currentStage: "Rowlet",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png"
  },
  {
    id: "butterfree",
    name: "Butterfree",
    types: ["Bug", "Flying"],
    region: "Kanto",
    powerTier: "C",
    powerLevel: 45,
    status: "Released",
    caughtLocation: "Viridian Forest",
    currentLocation: "Wild (Unknown)",
    episodes: [
      { code: "EP003", title: "Ash Catches a Pokémon" },
      { code: "EP004", title: "Challenge of the Samurai" },
      { code: "EP021", title: "Bye Bye Butterfree" }
    ],
    moves: [
      { name: "Tackle", category: "Physical", firstUsed: "EP003" },
      { name: "String Shot", category: "Status", firstUsed: "EP003" },
      { name: "Sleep Powder", category: "Status", firstUsed: "EP021" },
      { name: "Whirlwind", category: "Special", firstUsed: "EP015" }
    ],
    evolutionLine: ["Caterpie", "Metapod", "Butterfree"],
    currentStage: "Butterfree",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
  }
];
