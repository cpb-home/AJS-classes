import Swordsman from '../Swordsman';

test('creating Zombie', () => {
  const result = new Swordsman('test', 'Swordsman');
  
  expect(result).toEqual({health: 100, level: 1, attack: 40, defence: 10, type: 'Swordsman', name: 'test'});
});