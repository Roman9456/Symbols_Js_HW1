import Team from '../team';

test('iterating over team members', () => {
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
  
    const iterator = team[Symbol.iterator]();
  
    expect(iterator.next().value).toEqual(archer);
    expect(iterator.next().value).toEqual(mage);
    expect(iterator.next().value).toEqual(warrior);
    expect(iterator.next().done).toBe(true);
  });