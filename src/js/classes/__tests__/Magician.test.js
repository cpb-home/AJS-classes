import Magician from '../Magician';

test('creating Magician', () => {
  const result = new Magician('test', 'Magician');
  
  expect(result).toEqual({health: 100, level: 1, attack: 10, defence: 40, type: 'Magician', name: 'test'});
});