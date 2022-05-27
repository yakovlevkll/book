import { SidebarConfigArray, SidebarConfigObject } from 'vuepress'

import { path } from '@vuepress/utils'

const homeLink = '/ru/start'

function pathJoiner(parent: string, link: string) {
  return link.startsWith('@') ? link.substring(1) : path.join(parent, link)
}

function sidebarChainer(sidebarArr: SidebarConfigArray, parent: string) {
  return sidebarArr.map((el) => {
    if (typeof el === 'string') {
      switch (el) {
        case '<-':
          return {
            text: '← Назад',
            link: path.dirname(parent),
          }
        case '@':
          return {
            text: '← Все курсы',
            link: homeLink,
          }
        default:
          return pathJoiner(parent, el)
      }
    } else {
      const link = pathJoiner(parent, el.link || '')
      const children = Object.hasOwn(el, 'children')
        ? sidebarChainer(el.children, link)
        : []
      return {
        text: el.text,
        link,
        children,
      }
    }
  })
}

function sidebarCollector(sidebarObj: SidebarConfigObject) {
  const res = {}
  Object.entries(sidebarObj).forEach(([link, arr]) => {
    res[link] = sidebarChainer(arr, link)
  })
  return res
}

export { sidebarCollector, sidebarChainer }
