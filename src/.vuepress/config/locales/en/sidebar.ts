import { SidebarConfigObject } from 'vuepress'

const sidebar: SidebarConfigObject = {
  '/en/handbooks': [
    {
      text: 'Common',
      children: ['common/prefixes'],
    },
    {
      text: 'Python',
      link: 'python',
      children: [
        'python/intro',
        'python/numbers',
        'python/strings',
        'python/lists-etc',
        'python/dicts',
        'python/conditionals',
        'python/bytes',
      ],
    },
  ],
  '/en': [
    {
      text: 'Home',
      link: 'start',
      children: ['about'],
    },
  ],
}

export default sidebar
