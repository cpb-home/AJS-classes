import Zombie from '../Zombie';

test('creating Zombie', () => {
  const result = new Zombie('test', 'Zombie');
  
  expect(result).toEqual({health: 100, level: 1, attack: 40, defence: 10, type: 'Zombie', name: 'test'});
});