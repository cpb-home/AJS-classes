import Daemon from '../Daemon';

test('creating Daemon', () => {
  const result = new Daemon('test', 'Daemon');
  
  expect(result).toEqual({health: 100, level: 1, attack: 10, defence: 40, type: 'Daemon', name: 'test'});
});