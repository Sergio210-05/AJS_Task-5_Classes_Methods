import Swordsman from '../swordsman';
import Undead from '../undead';

test('testing Character error creating', () => {
  expect(() => { Undead('LittleTimmy'); }).toThrow(Error);
  expect(() => { new Undead('LittleTimmy'); }).toThrow('Name is incorrect. The word length should be from 2 to 10 characters');
  expect(() => { Swordsman('Gimli', 'Dwarf'); }).toThrow(Error);
  expect(() => { new Swordsman('Gimli', 'Dwarf'); }).toThrow('Type is incorrect');
});
