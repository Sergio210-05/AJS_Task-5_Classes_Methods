import Character from './char';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
  }
}
