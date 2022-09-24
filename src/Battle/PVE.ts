import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _figther: Fighter,
    private _monsters: (SimpleFighter | Fighter)[],
  ) {
    super(_figther);
  }

  fight(): number {
    // const { monsters } = this;
    // const haveOneMonsterAlive = monsters
    //   .filter((monster) => monster.lifePoints > 0);
    // while (this.figther.lifePoints > 0 && haveOneMonsterAlive.length) {
    //   this.figther.attack();
    // }
    // this.monsters.forEach((monster) => {
    //   while (this.figther.lifePoints > 0 && monster.lifePoints > 0) {
    //     this.figther.attack(monster);
    //     monster.attack(this.figther);
    //   }
    // });
    // return super.fight(); 
    this._monsters.forEach((monster) => {
      this.player.attack(monster);
      if (monster.lifePoints === -1) {
        return 1;
      }
      monster.attack(this.player);
      if (this.player.lifePoints === -1) {
        return -1;
      }
    });
    return super.fight();
  }
}