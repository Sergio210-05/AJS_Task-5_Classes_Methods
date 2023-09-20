import Character from './char';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
