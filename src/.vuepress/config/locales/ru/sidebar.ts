import { SidebarConfigObject } from 'vuepress'

const sidebar: SidebarConfigObject = {
  '/ru/computer-science/python': [
    '<-',
    {
      text: 'Python',
      link: '',
    },
    {
      text: 'Начало работы',
      link: 'intro',
      children: ['setup', 'first-steps'],
    },
    {
      text: 'Типы данных',
      link: 'data-types',
      children: ['numbers', 'strings', 'bytes'],
    },
    {
      text: 'Структуры',
      link: 'structures',
      children: ['lists', 'dicts'],
    },
    {
      text: 'Конструкции',
      link: 'constructions',
      children: ['if-else'],
    },
  ],
  '/ru/computer-science': [
    '@',
    {
      text: 'Информатика',
      link: '',
    },
    'python',
  ],
  '/ru/math/basics': [
    '<-',
    {
      text: 'Основы математики',
      link: '',
      children: [
        // 'geometry', 'patterns', 'logic', 'algorithms', 'numbers'
      ],
    },
  ],
  '/ru/math/cheatset': [
    '<-',
    '',
    'links',
    'metric-prefixes',
    'greek-alphabet',
    'exponents',
    'logarithms',
    'trigonometry',
    'derivatives',
  ],
  '/ru/math/irrational': [
    '<-',
    '',
    {
      text: 'Степени и корни',
      link: 'exponents',
      children: [],
    },
    {
      text: 'Логарифмы',
      link: 'logarithms',
      children: [],
    },
  ],
  '/ru/math/rational': [
    '<-',
    '',

    {
      text: 'Обыкновенные дроби',
      link: 'fractions',
      children: [
        'common-denominators',
        'multiply-divide',
        'different-denominators',
        'comparison',
        'equations',
        'general-rule',
        'mixed',
        'reciprocals',
      ],
    },
    {
      text: 'Десятичные дроби',
      link: 'decimals',
      children: [],
    },
    {
      text: 'Проценты',
      link: 'percentages',
      children: [],
    },
    'equations',
    'equations/simultaneous/movement',
    // 'bodmas',
    // 'divisibility',
    // 'factorization',

    // 'equalities',
    // 'rounding',
    // 'time',
    // 'combinatorics',
    // 'probability',
    // 'averages',
    // '_rational',
  ],
  '/ru/math': [
    '@',
    'cheatset',
    'basics',
    'rational',
    'irrational',
    // {
    //   text: 'Геометрия',
    //   children: [
    //     'geometry/triangles',
    //     'geometry/quadrilaterals',
    //     'geometry/circle',
    //   ],
    // },
    // {
    //   text: 'От пальцев к числам',
    //   link: 'integers',
    //   children: [
    //     'geometry',
    //     'positive',
    //     'negative',
    //     'bodmas',
    //     'equalities',
    //     'rounding',
    //     'sets',
    //     '_integers',
    //   ],
    // },

    // {
    //   text: 'Уравнения',
    //   link: 'equations',
    //   children: ['simultaneous/movement'],
    // },

    // {
    //   text: 'Буквы вместо чисел',
    //   link: 'variables',
    //   children: ['polynomials'],
    // },
    // {
    //   text: 'Взаимосвязи',
    //   link: 'relations',
    //   children: [
    //     'functions/basics',
    //     'functions/linear',
    //     'functions/simultaneous-equations',
    //     'functions/quadratic',
    //     'functions/principles',
    //     'trigonometry/basics',
    //     'functions/_functions',
    //   ],
    // },
    // {
    //   text: 'Анализ',
    //   link: 'calculus',
    //   children: [
    //     'limits',
    //     'differentiation',
    //     'differentiation/extremes',
    //     'integration',
    //     'integration/parts',
    //   ],
    // },
    // {
    //   text: 'Невозможные числа',
    //   link: 'imaginary',

    //   children: [],
    // },
  ],
  '/ru': [
    {
      text: 'О проекте',
      link: 'start',
      children: ['about', 'todo', 'logbook'],
    },
    'math',
    'computer-science',
  ],
}

export default sidebar
