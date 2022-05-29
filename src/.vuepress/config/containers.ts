import { UserConfig } from 'vuepress'

import { containerPlugin } from '@vuepress/plugin-container'

const containers: UserConfig['plugins'] = [
  containerPlugin({
    type: 'example',

    before: (str) => `<div class="block example">
          <div class="title">Пример</div>`,
    after: (str) => '</div>',
  }),
  containerPlugin({
    type: 'hw',
    before: (str) => `<div class="block hw">
          <div class="title">Homework</div>`,
    after: (str) => '</div>',
  }),
  containerPlugin({
    type: 'nb',
    before: (info) => `<div class="block nb">
          <div class="title">Важно</div>`,
    after: (str) => '</div>',
  }),
  containerPlugin({
    type: 'footnote',
    before: (str) => `<div class="block footnote">
          <div class="title">Примечание</div>`,
    after: (str) => '</div>',
  }),
  containerPlugin({
    type: 'quote',
    before: (str) => `<div class="quote block">`,
    after: (info) =>
      `<div class="author">${info}</div>
            </div>`,
  }),
  containerPlugin({
    type: 'quiz',
    before: (str) => `<div class="block quiz">
          <div class="title">Викторина</div>`,
    after: (str) => '</div>',
  }),
  containerPlugin({
    type: 'principle',
    before: (info) => `<div class="principle block">
          <div class="title">${info}</div>`,
    after: (str) => `</div>`,
  }),
  containerPlugin({
    type: 'task',
    before: (str) => `<div class="block tasks">
          <div class="title">Задания</div>`,
    after: (str) => '</div>',
  }),
  containerPlugin({
    type: 'todo',
    before: (info) => {
      let res = ''

      if (info.length > 2) {
        switch (info) {
          case 'table':
            res = 'таблицу'
            break
          case 'img':
            res = 'картинку'
            break
          case 'task':
            res = 'задание'
            break
          default:
            res = ''
            break
        }
        res = `<div class="title">Добавить ${res}</div>`
      }

      return `<div class="block todo">${res}`
    },
    after: (str) => '</div>',
  }),

  containerPlugin({
    type: 'wow',
    before: (title) => `<div class="block wow">
          <div class="title">${title}</div>`,
    after: (str) => '</div>',
  }),
  containerPlugin({
    type: 'youtube',
    before: (src) =>
      `<iframe class="youtube-frame" src="https://www.youtube.com/embed/${src}" frameborder="0" allowfullscreen>`,
    after: (str) => '</iframe>',
  }),
  containerPlugin({
    type: 'desmos',
    before: (src) => `<iframe class="desmos-frame"
      src="https://www.desmos.com/calculator/${src}"
      frameborder="0">`,
    after: (str) => '</iframe>',
  }),
]

export default containers
