import { extractAttacks } from '../extractAttacks.js';

test('тестирование с заданным description', () => {
  const character = {
    special: [
      {
        id: 1,
        name: 'Атака 1',
        icon: 'http://...',
        description: 'Описание 1'
      }
    ]
  };

  const expected = [
    {
      id: 1,
      name: 'Атака 1',
      icon: 'http://...',
      description: 'Описание 1'
    }
  ];

  expect(extractAttacks(character)).toEqual(expected);
});

test('description отсутсвует, установка значения по умолчанию', () => {
  const character = {
    special: [
      {
        id: 2,
        name: 'Атака 2',
        icon: 'http://...'
      }
    ]
  };

  const expected = [
    {
      id: 2,
      name: 'Атака 2',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ];

  expect(extractAttacks(character)).toEqual(expected);
});

test('тест с description и без в одном массиве', () => {
  const character = {
    special: [
      {
        id: 3,
        name: 'Атака 3',
        icon: 'http://...',
        description: 'Описание 3'
      },
      {
        id: 4,
        name: 'Атака 4',
        icon: 'http://...'
      }
    ]
  };

  const expected = [
    {
      id: 3,
      name: 'Атака 3',
      icon: 'http://...',
      description: 'Описание 3'
    },
    {
      id: 4,
      name: 'Атака 4',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ];

  expect(extractAttacks(character)).toEqual(expected);
});
