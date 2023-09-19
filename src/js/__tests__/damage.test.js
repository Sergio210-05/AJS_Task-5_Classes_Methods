import Magician from '../magician';

test('Testing damage method', () => {
  const Kadgar = new Magician('Kadgar');
  Kadgar.damage(100);
  expect(Kadgar.health).toEqual(40);
  Kadgar.damage(100);
  expect(Kadgar.health).toBe(0);
});
