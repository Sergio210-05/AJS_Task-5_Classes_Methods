import Daemon from '../daemon';

test('Testing levelUp method', () => {
  const Mephisto = new Daemon('Mephisto');
  Mephisto.health = 50;
  Mephisto.levelUp();
  expect(Mephisto.level).toBe(2);
  expect(Mephisto.health).toBe(100);
  expect(Mephisto.attack).toEqual(12);
  expect(Mephisto.defence).toEqual(48);

  Mephisto.health = 0;
  expect(() => { Mephisto.levelUp(); }).toThrow(Error);
});
