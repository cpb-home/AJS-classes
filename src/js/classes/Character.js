export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;

    switch (type) {
      case 'Bowman':
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        this.type = type;
        break;
      case 'Swordsman':
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        this.type = type;
        break;
      case 'Magician':
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        this.type = type;
        break;
      default:
        throw new Error('Ошибка type: Указан неверный тип персонажа');
    }
    
    if (typeof name !== 'string') {
      throw new Error('Ошибка name: Указан неверный тип переменной (должна быть строка)');
    } else {
      if (name.length < 2 || name.length > 10) {
        throw new Error('Ошибка name: длина имени должна быть от 2 до 10 символов');
      } else {
        this.name = name;
      }
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Ошибка: персонаж умер.');
    } else {
      this.level += 1;
      this.health = 100;
      this.attack += this.attack * .2;
      this.defence += this.defence * .2;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж пал смертью храбрых...');
    }
  }
}