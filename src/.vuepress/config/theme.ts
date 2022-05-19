import { defaultTheme } from '@vuepress/theme-default'

export default defaultTheme({
  locales: {
    '/': {
      selectText: 'Языки',
      label: 'Русский',

      lastUpdated: true,
      editLinks: true,
      editLinkText: 'Редактировать страницу на GitHub',

      sidebar: {
        // '/math/': [
        //   {
        //     text: 'Основы',
        //     children: ['/math/basics/irrational'],
        //   },
        //   {
        //     text: 'Анализ',
        //     children: ['/math/calculus/'],
        //   },
        // ],
        '/': [
          {
            text: 'Математика',
            children: [
              '/ru/math/basics/',
              '/ru/math/calculus/',
              '/ru/math/trigonometry/',
            ],
          },
        ],
        // "/math/": ruMath.long,
        // "/ru/biology": ruBiology.long,
        // "/": [ruMath.short, ruBiology.short]
      },
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
