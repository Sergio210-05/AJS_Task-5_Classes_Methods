import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

const Legolas = new Bowman('Legolas');
const Aragorn = new Swordsman('Aragorn');
const Gendalf = new Magician('Gendalf');
const Illidan = new Daemon('Illidan');
const LilTimmy = new Undead('LilTimmy');
const Rob = new Zombie('Rob');

const chars = [
  [Legolas, Bowman],
  [Aragorn, Swordsman],
  [Gendalf, Magician],
  [Illidan, Daemon],
  [LilTimmy, Undead],
  [Rob, Zombie],
];

const handler = test.each(chars);

handler('testing Character %s', (person, expectedStats) => {
  // const createdChar = healthBar(person);
  expect(person).toBeInstanceOf(expectedStats);
});
