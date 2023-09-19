export default class Character {
  static typesOfPersons = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  static attackDefence = {
    Bowman: [25, 25],
    Swordsman: [40, 10],
    Magician: [10, 40],
    Undead: [25, 25],
    Zombie: [40, 10],
    Daemon: [10, 40],
  };

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name is incorrect. The word length should be from 2 to 10 characters');
    } else if (!Character.typesOfPersons.includes(type)) {
      throw new Error('Type is incorrect');
    } else {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      [this.attack, this.defence] = Character.attackDefence[type];
      // this.attack = Character.attackDefence[type][0];
      // this.defence = Character.attackDefence[type][1];
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      const increasedAttack = this.attack * 1.2;
      const increasedDefence = this.defence * 1.2;
      this.attack = +increasedAttack.toFixed(1);
      this.defence = +increasedDefence.toFixed(1);
      this.health = 100;
    } else {
      throw new Error("Can't increace deadman's level");
    }
  }

  damage(points) {
    const lostHealth = points * (1 - this.defence / 100);
    if (lostHealth <= this.health) {
      this.health -= lostHealth;
    } else {
      this.health = 0;
    }
  }
}
