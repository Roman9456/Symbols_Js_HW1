// TODO: write your code here
import sum from './basic';
import Team from './team';

console.log('worked');

console.log(sum([1, 2]));


const archer = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};

const mage = {
  name: 'Маг',
  type: 'Mage',
  health: 60,
  level: 2,
  attack: 50,
  defence: 20
};

const warrior = {
  name: 'Воин',
  type: 'Warrior',
  health: 70,
  level: 3,
  attack: 60,
  defence: 30
};

const team = new Team();
team.add(archer);
team.add(mage);
team.add(warrior);

for (const character of team) {
  console.log(character);
}