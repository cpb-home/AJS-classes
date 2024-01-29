import Zombie from '../Zombie';
import Undead from '../Undead';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Bowerman from '../Bowerman';

test('creating bowerman', () => {
  const result = new Bowerman('test', 'Bowman');
  
  expect(result).toEqual({health: 100, level: 1, attack: 25, defence: 25, type: 'Bowman', name: 'test'});
});

test('creating short name', () => {
  expect(() => new Bowerman('t', 'Bowman')).toThrow('Ошибка name: длина имени должна быть от 2 до 10 символов');
});

test('creating long name', () => {
  expect(() => new Bowerman('testBowmanTest', 'Bowman')).toThrow('Ошибка name: длина имени должна быть от 2 до 10 символов');
});

test('creating wrong name type', () => {
  expect(() => new Bowerman(123, 'Bowman')).toThrow('Ошибка name: Указан неверный тип переменной (должна быть строка)');
});

test.each([
  ['Bowman', {health: 100, level: 1, attack: 25, defence: 25, type: 'Bowman', name: 'test'}],
  ['Undead', {health: 100, level: 1, attack: 25, defence: 25, type: 'Undead', name: 'test'}],
  ['Swordsman', {health: 100, level: 1, attack: 40, defence: 10, type: 'Swordsman', name: 'test'}],
  ['Zombie', {health: 100, level: 1, attack: 40, defence: 10, type: 'Zombie', name: 'test'}],
  ['Magician', {health: 100, level: 1, attack: 10, defence: 40, type: 'Magician', name: 'test'}],
  ['Daemon', {health: 100, level: 1, attack: 10, defence: 40, type: 'Daemon', name: 'test'}]
])(
  ('Tests for %s type'),
  (type, res) => {
    let result;
    if (type == 'Bowman') {
      result = new Bowerman('test', type);
    } else if (type == 'Undead') {
      result = new Undead('test', type);
    } else if (type == 'Swordsman') {
      result = new Swordsman('test', type);
    } else if (type == 'Zombie') {
      result = new Zombie('test', type);
    } else if (type == 'Magician') {
      result = new Magician('test', type);
    } else if (type == 'Daemon') {
      result = new Daemon('test', type);
    }
    
    expect(result).toEqual(res);
  }
)

test('Tests for other type', () => {
  expect(() => new Bowerman('test', 'Other')).toThrow('Ошибка type: Указан неверный тип персонажа');
});