import { SidebarConfigObject } from 'vuepress'

const sidebar: SidebarConfigObject = {
  '/ru/computer-science/python': [
    {
      text: 'Python',
      link: '',
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
    {
      text: 'Информатика',
      link: '',
    },
    'python',
  ],
  '/ru/math/cheatset': [
    '<-',
    {
      text: 'Шпаргалка',
      link: '',
      children: [
        'links',
        'metric-prefixes',
        'greek-alphabet',
        '@/ru/math/trigonometry/cheatset',
      ],
    },
  ],
  '/ru/math': [
    '@',
    'cheatset',
    {
      text: 'Основы',
      link: 'basics',
      children: ['geometry', 'patterns', 'logic', 'algorithms', 'numbers'],
    },
    {
      text: 'Геометрия',
      children: [
        'geometry/triangles',
        'geometry/quadrilaterals',
        'geometry/circle',
      ],
    },
    {
      text: 'От пальцев к числам',
      link: 'integers',
      children: [
        'geometry',
        'positive',
        'negative',
        'bodmas',
        'equalities',
        'rounding',
        'sets',
        '_integers',
      ],
    },
    {
      text: 'Части целого',
      link: 'rational',
      children: [
        'multiplication',
        'division',
        // "/ru/rational/bodmas",
        'divisibility',
        'factorization',
        // "/ru/rational/fractions",
        'decimals',
        'percentages',
        'equalities',
        'rounding',
        'time',
        'combinatorics',
        'probability',
        'averages',
        '_rational',
        {
          text: 'Уравнения',
          link: 'equations',
          children: ['simultaneous/movement'],
        },
      ],
    },
    {
      text: 'Неправильные числа',
      link: 'irrational',
      children: ['exponents', 'logarithms', 'measurement', '_irrational'],
    },
    {
      text: 'Буквы вместо чисел',
      link: 'variables',
      children: ['polynomials'],
    },
    {
      text: 'Взаимосвязи',
      link: 'relations',
      children: [
        'functions/basics',
        'functions/linear',
        'functions/simultaneous-equations',
        'functions/quadratic',
        'functions/principles',
        'trigonometry/basics',
        'functions/_functions',
      ],
    },
    {
      text: 'Анализ',
      link: 'calculus',
      children: [
        'limits',
        'differentiation',
        'differentiation/extremes',
        'integration',
        'integration/parts',
      ],
    },
    {
      text: 'Невозможные числа',
      link: 'imaginary',

      children: [],
    },
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
