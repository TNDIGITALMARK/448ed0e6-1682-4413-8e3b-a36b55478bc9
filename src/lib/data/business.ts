// Business operations data for The Swamp Family

export interface Territory {
  id: string;
  name: string;
  status: 'controlled' | 'contested' | 'target';
  income: number;
  description: string;
}

export interface Heist {
  id: string;
  name: string;
  target: string;
  status: 'planning' | 'active' | 'completed';
  difficulty: 'low' | 'medium' | 'high' | 'extreme';
  potential_take: number;
  crew_assigned: string[];
  description: string;
}

export interface RivalGang {
  id: string;
  name: string;
  boss: string;
  threat_level: number;
  territory_count: number;
  description: string;
}

export const territories: Territory[] = [
  {
    id: 'far-far-away',
    name: 'Far Far Away Downtown',
    status: 'controlled',
    income: 125000,
    description: 'Prime real estate in the kingdom\'s capital. Protection rackets, gambling dens, and legitimate businesses all under family control.',
  },
  {
    id: 'swamp-district',
    name: 'The Swamp District',
    status: 'controlled',
    income: 85000,
    description: 'The family\'s home territory. Nobody operates here without permission. Smuggling hub and main headquarters.',
  },
  {
    id: 'poison-apple',
    name: 'Poison Apple District',
    status: 'controlled',
    income: 95000,
    description: 'Entertainment district with taverns, clubs, and underground gambling. The Poison Apple serves as the social hub.',
  },
  {
    id: 'duloc-ruins',
    name: 'Duloc Ruins',
    status: 'controlled',
    income: 65000,
    description: 'Former kingdom now under family control. Used for warehousing and as a training ground for new recruits.',
  },
  {
    id: 'kingdom-crossroads',
    name: 'Kingdom Crossroads',
    status: 'contested',
    income: 45000,
    description: 'Strategic trade route currently contested with Prince Charming\'s crew. Control means dominance of all trade.',
  },
  {
    id: 'fairy-godmother-estate',
    name: 'Fairy Godmother Estate',
    status: 'target',
    income: 0,
    description: 'Former headquarters of the Fairy Godmother Syndicate. Heavily defended, but the prize would be worth it.',
  },
];

export const activeHeists: Heist[] = [
  {
    id: 'rumpelstiltskin-gold',
    name: 'The Rumpelstiltskin Gold Job',
    target: 'Rumpelstiltskin\'s Gold Reserve',
    status: 'active',
    difficulty: 'extreme',
    potential_take: 500000,
    crew_assigned: ['puss', 'donkey', 'pinocchio'],
    description: 'Rumpelstiltskin has been hoarding gold from his contract schemes. Time to redistribute that wealth to its rightful owners... us.',
  },
  {
    id: 'charming-casino',
    name: 'Charming\'s Casino Takeover',
    target: 'Prince Charming\'s Royal Flush Casino',
    status: 'planning',
    difficulty: 'high',
    potential_take: 350000,
    crew_assigned: ['fiona', 'puss', 'gingerbread'],
    description: 'Prince Charming thinks his casino is untouchable. Time to prove him wrong and take over his most profitable operation.',
  },
  {
    id: 'magic-mirror-intel',
    name: 'Magic Mirror Intelligence Heist',
    target: 'Charming\'s Magic Mirror Database',
    status: 'planning',
    difficulty: 'medium',
    potential_take: 150000,
    crew_assigned: ['donkey', 'pinocchio'],
    description: 'The Magic Mirror knows everyone\'s secrets. Stealing it would give us leverage over every major player in the kingdoms.',
  },
];

export const rivalGangs: RivalGang[] = [
  {
    id: 'charming-family',
    name: 'The Charming Crime Family',
    boss: 'Prince Charming',
    threat_level: 75,
    territory_count: 4,
    description: 'Former fairy tale prince turned crime lord. Runs casinos, entertainment venues, and protection rackets. His pretty boy image hides a ruthless operator. Currently our biggest rival.',
  },
  {
    id: 'fairy-godmother-syndicate',
    name: 'Fairy Godmother Syndicate (Remnants)',
    boss: 'Unknown (Fairy Godmother deceased)',
    threat_level: 45,
    territory_count: 2,
    description: 'After the Godmother\'s fall, her organization fractured. Splinter cells still operate potion trafficking and magic item smuggling. Weakened but unpredictable.',
  },
  {
    id: 'rumpelstiltskin-contracts',
    name: 'Rumpelstiltskin Contract Corp',
    boss: 'Rumpelstiltskin',
    threat_level: 60,
    territory_count: 3,
    description: 'Specializes in magical contracts, loan sharking, and soul collection. More of a white collar criminal than a street operator, but his contracts are ironclad and dangerous.',
  },
  {
    id: 'pied-piper-crew',
    name: 'The Pied Piper\'s Crew',
    boss: 'The Pied Piper',
    threat_level: 50,
    territory_count: 2,
    description: 'Controls the trafficking of magical creatures and contraband. His ability to control minds with music makes him dangerous. Operates mostly in the shadows.',
  },
];

export interface BusinessStats {
  weekly_income: number;
  active_operations: number;
  territory_controlled: number;
  crew_size: number;
  heat_level: number; // 0-100, how much law enforcement attention
}

export const currentBusinessStats: BusinessStats = {
  weekly_income: 415000,
  active_operations: 12,
  territory_controlled: 4,
  crew_size: 47,
  heat_level: 35,
};

export function getTotalIncome(): number {
  return territories
    .filter(t => t.status === 'controlled')
    .reduce((sum, t) => sum + t.income, 0);
}

export function getControlledTerritories(): Territory[] {
  return territories.filter(t => t.status === 'controlled');
}

export function getActiveHeists(): Heist[] {
  return activeHeists.filter(h => h.status === 'active');
}

export function getTopRivals(): RivalGang[] {
  return rivalGangs.sort((a, b) => b.threat_level - a.threat_level).slice(0, 3);
}
