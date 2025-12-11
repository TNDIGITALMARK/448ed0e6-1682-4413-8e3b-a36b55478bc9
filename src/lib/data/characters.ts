// Character data for The Swamp Family gangsters

export interface Character {
  id: string;
  name: string;
  alias: string;
  title: string;
  role: string;
  backstory: string;
  skills: string[];
  quote: string;
  mugshot?: string;
  stats: {
    intimidation: number;
    cunning: number;
    loyalty: number;
    strength: number;
  };
}

export const characters: Character[] = [
  {
    id: 'shrek',
    name: 'Shrek',
    alias: 'Don Shrek Ogre',
    title: 'The Green Godfather',
    role: 'Boss of Bosses',
    backstory: 'Once a simple ogre who wanted to be left alone in his swamp, Shrek discovered that the only way to truly protect his territory was to control it all. Now, he runs the most feared crime family in all the kingdoms, operating from his fortified swamp estate. His word is law, and those who cross him find themselves sleeping with the fish... in the swamp.',
    skills: ['Territory Control', 'Intimidation', 'Strategic Planning', 'Hand-to-Hand Combat', 'Swamp Warfare'],
    quote: 'This is MY swamp... and everything else too.',
    stats: {
      intimidation: 95,
      cunning: 85,
      loyalty: 90,
      strength: 98,
    }
  },
  {
    id: 'fiona',
    name: 'Fiona Ogre',
    alias: 'Fiona "The Beautiful Bruiser"',
    title: 'The Enforcer',
    role: 'Chief Enforcer & Operations Manager',
    backstory: 'Former princess turned ogre mob queen, Fiona handles the family\'s most delicate operations. By day, she manages legitimate businesses. By night, she ensures that the family\'s enemies understand the consequences of disloyalty. Her royal training combined with ogre strength makes her the most feared enforcer in the underworld.',
    skills: ['Combat Mastery', 'Negotiation', 'Money Laundering', 'Royal Connections', 'Tactical Operations'],
    quote: 'I\'m not just a pretty face. I\'m the nightmare you can\'t wake up from.',
    stats: {
      intimidation: 90,
      cunning: 92,
      loyalty: 95,
      strength: 93,
    }
  },
  {
    id: 'donkey',
    name: 'Donkey',
    alias: 'Fast Eddie Donkey',
    title: 'The Chatterbox',
    role: 'Chief Intelligence Officer',
    backstory: 'What people mistake for annoying chatter is actually Donkey\'s greatest weapon. He hears everything, remembers everything, and reports everything to the Don. His extensive network of contacts spans from the darkest taverns to the highest castle towers. Nobody suspects the talking donkey is the family\'s eyes and ears everywhere.',
    skills: ['Intelligence Gathering', 'Street Networks', 'Fast Talking', 'Infiltration', 'Comic Relief Operations'],
    quote: 'I got friends in low places, high places, and everywhere in between!',
    stats: {
      intimidation: 60,
      cunning: 95,
      loyalty: 100,
      strength: 70,
    }
  },
  {
    id: 'puss',
    name: 'Puss in Boots',
    alias: 'Puss "The Velvet Paw"',
    title: 'Silent Elimination Specialist',
    role: 'Master Assassin',
    backstory: 'A legendary swordsman and thief who traded his wandering ways for a permanent position in the family. Puss handles the family\'s most sensitive wet work with style and precision. His cute appearance is the last thing his targets see before lights out. He operates in the shadows, leaving behind only his calling card: a single cat hair.',
    skills: ['Master Swordsman', 'Stealth', 'Seduction', 'Lock Picking', 'Nine Lives Protocol'],
    quote: 'They never see me coming. But they always know it was me.',
    stats: {
      intimidation: 85,
      cunning: 93,
      loyalty: 88,
      strength: 82,
    }
  },
  {
    id: 'dragon',
    name: 'Dragon',
    alias: 'Lady Inferno',
    title: 'The Flame',
    role: 'Heavy Muscle & Transportation',
    backstory: 'Former tower guardian turned family enforcer and Donkey\'s wife. Dragon provides aerial surveillance, intimidation, and when necessary, the kind of firepower that ends arguments permanently. She also handles the family\'s long-distance transportation needs and operates a legitimate air freight business as cover.',
    skills: ['Aerial Combat', 'Fire Breathing', 'Intimidation', 'Transportation Logistics', 'Castle Demolition'],
    quote: 'I used to guard princesses. Now I guard something much more valuable.',
    stats: {
      intimidation: 100,
      cunning: 75,
      loyalty: 92,
      strength: 100,
    }
  },
  {
    id: 'pinocchio',
    name: 'Pinocchio',
    alias: 'Pin "The Honest Liar"',
    title: 'The Truth Detector',
    role: 'Interrogation Specialist',
    backstory: 'The ultimate lie detector for the family. Pinocchio can tell when anyone is lying, making him invaluable during negotiations and interrogations. His wooden body is surprisingly durable, and his strings have found new uses in the family business. He runs a legitimate toy shop that serves as a front for the family\'s money counting operations.',
    skills: ['Lie Detection', 'Interrogation', 'Money Counting', 'Front Business Management', 'Unexpected Combat'],
    quote: 'You can lie to yourself, but you can\'t lie to me.',
    stats: {
      intimidation: 70,
      cunning: 90,
      loyalty: 85,
      strength: 65,
    }
  },
  {
    id: 'gingerbread',
    name: 'Gingy',
    alias: 'Gingerbread "The Survivor"',
    title: 'The Unkillable',
    role: 'Interrogation Assistant & Enforcer',
    backstory: 'After his traumatic encounter with Lord Farquaad, Gingy joined the family with a vendetta and a surprising skill for intimidation. Despite his small size, he\'s survived countless hits and attempts on his life. He specializes in psychological warfare and has a disturbing knowledge of pressure points. His bakery is a front for smuggling operations.',
    skills: ['Psychological Warfare', 'Survival', 'Smuggling', 'Intimidation', 'Pastry Cover Operations'],
    quote: 'Do you know the muffin man? Because he knows you, and he\'s not happy.',
    stats: {
      intimidation: 75,
      cunning: 88,
      loyalty: 93,
      strength: 50,
    }
  }
];

export function getCharacter(id: string): Character | undefined {
  return characters.find(char => char.id === id);
}

export function getMainCrew(): Character[] {
  return characters.filter(char => ['shrek', 'fiona', 'donkey', 'puss'].includes(char.id));
}

export function getAllCharacters(): Character[] {
  return characters;
}
