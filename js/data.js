/* ============================================================
 * data.js — Hierarchical Atlas Data for Pokémon Journey
 * 4 Zoom Levels: World -> Region -> City -> POI -> Micro
 * ============================================================ */

// ── COLOR THEMES ──
export const REGION_THEMES = {
  kanto: { border: '#E53935', tint: 'rgba(229, 57, 53, 0.1)', biome: '#2d4c2b' }, // Temperate green
  orange: { border: '#FB8C00', tint: 'rgba(251, 140, 0, 0.1)', biome: '#1e88e5' }, // Tropical ocean
  johto: { border: '#FDD835', tint: 'rgba(253, 216, 53, 0.1)', biome: '#4caf50' }, // Gold/Forest
  hoenn: { border: '#43A047', tint: 'rgba(67, 160, 71, 0.1)', biome: '#009688' }, // Tropical land/sea
  sinnoh: { border: '#1E88E5', tint: 'rgba(30, 136, 229, 0.1)', biome: '#78909C' }, // Mountain/Cool
  unova: { border: '#8E24AA', tint: 'rgba(142, 36, 170, 0.1)', biome: '#455A64' }, // Urban purple
  kalos: { border: '#EC407A', tint: 'rgba(236, 64, 122, 0.1)', biome: '#8d6e63' }, // Elegant pink/brown
  alola: { border: '#FFCA28', tint: 'rgba(255, 202, 40, 0.1)', biome: '#03a9f4' }, // Sunshine beach
  journeys: { border: '#78909C', tint: 'rgba(120, 144, 156, 0.1)', biome: '#37474f' } // Silver/Global
};

// ── ASH'S GLOBAL ROUTE (Order of regions visited) ──
export const GLOBAL_ROUTE = [
  'kanto', 'orange', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'journeys'
];

// ── HIERARCHICAL DATA ──
export const ATLAS_DATA = {
  regions: [
    {
      id: "kanto",
      name: "Kanto Region",
      themeColor: "kanto",
      bounds: { x: 0, y: 0, w: 2000, h: 2000 },
      polygon: "M 100,100 L 1900,100 L 1900,1900 L 100,1900 Z", // Rough outline for region hover area
      details: {
        league: "Indigo Plateau Conference",
        placement: "Top 16",
        friends: ["Misty", "Brock"]
      },
      cities: [
        {
          id: "pallet-town",
          name: "Pallet Town",
          coordinates: { x: 400, y: 1600 },
          bounds: { w: 300, h: 300 }, // Level 3/4 Zoom Bounds
          pois: [
            {
              id: "oak-lab",
              type: "lab",
              name: "Professor Oak's Lab",
              coordinates: { x: 380, y: 1580 },
              icon: "🔬",
              color: "#4FC3F7",
              story: "Where it all began. Ash woke up late and received Pikachu, a stubborn but powerful companion."
            },
            {
              id: "ash-house",
              type: "home",
              name: "Ash's House",
              coordinates: { x: 420, y: 1620 },
              icon: "🏠",
              color: "#FFCA28",
              story: "Ash's childhood home where his mom, Delia, and Mr. Mime live."
            }
          ]
        },
        {
          id: "viridian-city",
          name: "Viridian City",
          coordinates: { x: 400, y: 1200 },
          bounds: { w: 400, h: 400 },
          pois: [
            {
              id: "viridian-gym",
              type: "gym",
              name: "Viridian Gym",
              leader: "Giovanni",
              badge: "Earth Badge",
              coordinates: { x: 380, y: 1180 },
              icon: "🌋",
              color: "#FF7043",
              story: "The final gym challenge. Ash faced Team Rocket here to win the Earth Badge."
            },
            {
              id: "viridian-center",
              type: "pokemon-center",
              name: "Pokémon Center",
              coordinates: { x: 420, y: 1220 },
              icon: "➕",
              color: "#EC407A",
              story: "Ash rushed here to save Pikachu after a brutal Spearow attack. Met Misty here."
            }
          ]
        },
        {
          id: "pewter-city",
          name: "Pewter City",
          coordinates: { x: 400, y: 800 },
          bounds: { w: 400, h: 400 },
          pois: [
            {
              id: "pewter-gym",
              type: "gym",
              name: "Pewter Gym",
              leader: "Brock",
              badge: "Boulder Badge",
              coordinates: { x: 390, y: 790 },
              icon: "🪨",
              color: "#8D6E63",
              story: "Ash's first official gym battle. Won the Boulder Badge and Brock joined the journey."
            }
          ]
        },
        {
          id: "cerulean-city",
          name: "Cerulean City",
          coordinates: { x: 800, y: 800 },
          bounds: { w: 500, h: 500 },
          pois: [
            {
              id: "cerulean-gym",
              type: "gym",
              name: "Cerulean Gym",
              leader: "Sensational Sisters (Misty)",
              badge: "Cascade Badge",
              coordinates: { x: 800, y: 780 },
              icon: "💧",
              color: "#29B6F6",
              story: "Ash 'battled' Misty's sisters and then Misty herself to earn the Cascade Badge."
            },
            {
              id: "cerulean-police",
              type: "police-station",
              name: "Police Station",
              coordinates: { x: 780, y: 820 },
              icon: "👮",
              color: "#5C6BC0",
              story: "Officer Jenny investigated a break-in here (Squirtle Squad nearby)."
            }
          ]
        },
        {
          id: "vermilion-city",
          name: "Vermilion City",
          coordinates: { x: 800, y: 1200 },
          bounds: { w: 500, h: 500 },
          pois: [
            {
              id: "vermilion-gym",
              type: "gym",
              name: "Vermilion Gym",
              leader: "Lt. Surge",
              badge: "Thunder Badge",
              coordinates: { x: 790, y: 1180 },
              icon: "⚡",
              color: "#FFEE58",
              story: "Pikachu refused to evolve and defeated Raichu using speed to win the Thunder Badge."
            },
            {
              id: "st-anne-port",
              type: "port",
              name: "Vermilion Harbor",
              coordinates: { x: 830, y: 1250 },
              icon: "⚓",
              color: "#00ACC1",
              story: "Ash boarded the S.S. Anne here, leading to a major Team Rocket trap and a shipwreck."
            }
          ]
        }
      ]
    },
    {
      id: "orange",
      name: "Orange Archipelago",
      themeColor: "orange",
      bounds: { x: -500, y: 2200, w: 1500, h: 1000 },
      polygon: "M -400,2300 L 900,2300 L 700,3100 L -400,3000 Z",
      details: { league: "Orange League", placement: "Champion", friends: ["Misty", "Tracey"] },
      cities: [
        {
          id: "valencia-island",
          name: "Valencia Island",
          coordinates: { x: 0, y: 2500 },
          bounds: { w: 300, h: 300 },
          pois: []
        },
        {
          id: "pummelo-island",
          name: "Pummelo Island",
          coordinates: { x: 500, y: 2800 },
          bounds: { w: 400, h: 400 },
          pois: [
            {
              id: "pummelo-stadium",
              type: "gym", // using gym icon for stadium
              name: "Pummelo Stadium",
              leader: "Drake",
              badge: "Winner's Trophy",
              coordinates: { x: 500, y: 2800 },
              icon: "🏆",
              color: "#FFD700",
              story: "Ash defeated Drake in a 6v6 full battle to become the Orange League Champion."
            }
          ]
        }
      ]
    },
    {
      id: "johto",
      name: "Johto Region",
      themeColor: "johto",
      bounds: { x: -2200, y: 0, w: 2000, h: 2000 },
      polygon: "M -2100,100 L -200,100 L -200,1900 L -2100,1900 Z",
      details: { league: "Silver Conference", placement: "Top 8", friends: ["Misty", "Brock"] },
      cities: [
        { id: "new-bark-town", name: "New Bark Town", coordinates: { x: -300, y: 1600 }, bounds: { w: 300, h: 300 }, pois: [] },
        { id: "violet-city", name: "Violet City", coordinates: { x: -600, y: 1200 }, bounds: { w: 300, h: 300 }, pois: [] },
        { id: "goldenrod-city", name: "Goldenrod City", coordinates: { x: -1200, y: 1400 }, bounds: { w: 400, h: 400 }, pois: [] },
        { id: "mt-silver", name: "Mt. Silver", coordinates: { x: -1800, y: 1000 }, bounds: { w: 500, h: 500 }, pois: [] }
      ]
    },
    {
      id: "hoenn",
      name: "Hoenn Region",
      themeColor: "hoenn",
      bounds: { x: -3000, y: 2500, w: 2500, h: 2000 },
      polygon: "M -2900,2600 L -700,2600 L -700,4300 L -2900,4300 Z",
      details: { league: "Ever Grande Conference", placement: "Top 8", friends: ["May", "Max", "Brock"] },
      cities: [
        { id: "littleroot-town", name: "Littleroot Town", coordinates: { x: -2500, y: 4000 }, bounds: { w: 300, h: 300 }, pois: [] },
        { id: "rustboro-city", name: "Rustboro City", coordinates: { x: -2700, y: 3500 }, bounds: { w: 400, h: 400 }, pois: [] },
        { id: "sootopolis-city", name: "Sootopolis City", coordinates: { x: -1000, y: 3800 }, bounds: { w: 400, h: 400 }, pois: [] }
      ]
    },
    {
      id: "sinnoh",
      name: "Sinnoh Region",
      themeColor: "sinnoh",
      bounds: { x: -1500, y: -2500, w: 2500, h: 2200 },
      polygon: "M -1400,-2400 L 800,-2400 L 800,-500 L -1400,-500 Z",
      details: { league: "Lily of the Valley Conference", placement: "Top 4", friends: ["Dawn", "Brock"] },
      cities: [
        { id: "twinleaf-town", name: "Twinleaf Town", coordinates: { x: -1000, y: -700 }, bounds: { w: 300, h: 300 }, pois: [] },
        { id: "sunyshore-city", name: "Sunyshore City", coordinates: { x: 500, y: -1000 }, bounds: { w: 300, h: 300 }, pois: [] }
      ]
    },
    {
      id: "unova",
      name: "Unova Region",
      themeColor: "unova",
      bounds: { x: 3000, y: 0, w: 2500, h: 2500 },
      polygon: "M 3100,100 L 5300,100 L 5300,2300 L 3100,2300 Z",
      details: { league: "Vertress Conference", placement: "Top 8", friends: ["Iris", "Cilan"] },
      cities: [
        { id: "nuvema-town", name: "Nuvema Town", coordinates: { x: 4800, y: 2000 }, bounds: { w: 300, h: 300 }, pois: [] },
        { id: "castelia-city", name: "Castelia City", coordinates: { x: 4200, y: 1500 }, bounds: { w: 500, h: 500 }, pois: [] },
        { id: "nimbasa-city", name: "Nimbasa City", coordinates: { x: 4000, y: 1000 }, bounds: { w: 500, h: 500 }, pois: [] }
      ]
    },
    {
      id: "kalos",
      name: "Kalos Region",
      themeColor: "kalos",
      bounds: { x: 3000, y: -3000, w: 2500, h: 2500 },
      polygon: "M 3100,-2900 L 5300,-2900 L 5300,-700 L 3100,-700 Z",
      details: { league: "Lumiose Conference", placement: "Runner-Up", friends: ["Serena", "Clemont", "Bonnie"] },
      cities: [
        { id: "vaniville-town", name: "Vaniville Town", coordinates: { x: 4500, y: -1000 }, bounds: { w: 300, h: 300 }, pois: [] },
        { id: "lumiose-city", name: "Lumiose City", coordinates: { x: 4200, y: -1800 }, bounds: { w: 600, h: 600 }, pois: [] }
      ]
    },
    {
      id: "alola",
      name: "Alola Region",
      themeColor: "alola",
      bounds: { x: 1000, y: 3500, w: 2500, h: 1500 },
      polygon: "M 1200,3600 L 3300,3600 L 3300,4800 L 1200,4800 Z",
      details: { league: "Manalo Conference", placement: "Champion", friends: ["Lillie", "Kiawe", "Mallow", "Lana", "Sophocles"] },
      cities: [
        { id: "melemele-island", name: "Melemele Island", coordinates: { x: 1500, y: 4000 }, bounds: { w: 600, h: 600 }, pois: [] },
        { id: "akala-island", name: "Akala Island", coordinates: { x: 2500, y: 4200 }, bounds: { w: 500, h: 500 }, pois: [] }
      ]
    },
    {
      id: "journeys",
      name: "Journeys (Global)",
      themeColor: "journeys",
      bounds: { x: 1000, y: 2200, w: 1500, h: 1000 },
      polygon: "M 1100,2300 L 2300,2300 L 2300,3100 L 1100,3100 Z",
      details: { league: "World Coronation Series", placement: "Monarch (World Champion)", friends: ["Goh", "Chloe"] },
      cities: [
        { id: "vermilion-hub", name: "Cerise Laboratory", coordinates: { x: 1500, y: 2700 }, bounds: { w: 300, h: 300 }, pois: [] },
        { id: "wyndon", name: "Wyndon Stadium", coordinates: { x: 2000, y: 2500 }, bounds: { w: 400, h: 400 }, pois: [] }
      ]
    }
  ]
};
