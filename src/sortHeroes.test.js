import { sortHeroes } from './sortHeroes.js';

describe('sortHeroes', () => {
  test('sorts heroes by health descending', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroes(heroes);

    // toBe не сработает для сравнения объектов
    expect(result).not.toBe(expected);
    // toEqual делает глубокое сравнение (deep equality)
    expect(result).toEqual(expected);
  });
});
