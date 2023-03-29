import MagicCharacter from './app';

export default class Daemon extends MagicCharacter {
  constructor() {
    super();
    this.attack = 100;
    this.defence = 40;
  }
}
