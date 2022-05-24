import { defaultTheme } from '@vuepress/theme-default'
import { sidebars } from './locales'

export default defaultTheme({
  locales: {
    '/': {
      selectText: 'Языки',
      label: 'Русский',

      lastUpdated: true,
      editLinks: true,
      editLinkText: 'Редактировать страницу на GitHub',

      sidebar: sidebars.ru,
    },
    /*
    "/en/": {
      selectText: "Languages",
      label: "English",

      editLinks: true,
      editLinkText: "Edit this page on GitHub",

      algolia: {},
      sidebar: {
        "/en/computer-science/python-basics": enPythonBasics.long,
        "/en/computer-science/": [enPythonBasics.short],
        "/en/": [enPythonBasics.short]
      }
    }
    */
  },
})
