// TODO: write your code here
import Zombie from './classes/Zombie';
import Undead from './classes/Undead';
import Daemon from './classes/Daemon';
import Magician from './classes/Magician';
import Swordsman from './classes/Swordsman';
import Bowerman from './classes/Bowerman';

const zombie = new Zombie('zo', 'Zombie');
const bower = new Bowerman('bo', 'Bowman');
const sword = new Swordsman('swo', 'Swordsman');
const magic = new Magician('ma', 'Magician');
const daemon = new Daemon('da', 'Daemon');
const undead = new Undead('un', 'Undead');

console.log(zombie);
console.log(bower);
console.log(sword);
console.log(magic);
console.log(daemon);
console.log(undead);

zombie.levelUp();
bower.levelUp();
sword.levelUp();
magic.damage(5);
daemon.damage(10);
undead.damage(15);

console.log(' ');
console.log(zombie);
console.log(bower);
console.log(sword);
console.log(magic);
console.log(daemon);
console.log(undead);

magic.damage(105);
console.log(magic.health);
magic.damage(105);
console.log(magic.health);
magic.damage(105);
console.log(magic.health);
magic.levelUp();