import Bowerman from '../Bowerman';

test('creating bowerman', () => {
  const result = new Bowerman('test', 'Bowman');
  
  expect(result).toEqual({health: 100, level: 1, attack: 25, defence: 25, type: 'Bowman', name: 'test'});
});