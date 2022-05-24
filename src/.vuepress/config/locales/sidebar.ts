import { SidebarConfigArray, SidebarConfigObject } from 'vuepress'

import { path } from '@vuepress/utils'

function sidebarChainer(sidebarArr: SidebarConfigArray, parent: string) {
  return sidebarArr.map((el) => {
    if (typeof el === 'string') {
      return path.join(parent, el)
    } else {
      const link = el.link ? path.join(parent, el.link) : parent
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
