import Undead from '../Undead';

test('creating Undead', () => {
  const result = new Undead('test', 'Undead');
  
  expect(result).toEqual({health: 100, level: 1, attack: 25, defence: 25, type: 'Undead', name: 'test'});
});