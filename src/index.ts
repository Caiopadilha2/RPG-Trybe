import Battle, { PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

// TODO: CRIAR CLASSE PVE

const runBattle = (battles: Battle[]) => {
  battles.map((battle) => battle.fight());
};

export { player1, player2, player3 };
export { monster1, monster2 };
export { pvp };
export { runBattle };