export default {
  '/': {
    selectText: 'Языки',
    label: 'Русский',

    lastUpdated: true,
    editLinks: true,
    editLinkText: 'Редактировать страницу на GitHub',

    // algolia docsearch options for current locale
    algolia: {},
    sidebar: {
      '/math/': [
        {
          title: 'Основы',
          children: ['/math/basics/irrational'],
        },
        {
          title: 'Анализ',
          children: ['/math/calculus/'],
        },
      ],
      '/': [
        {
          title: 'Математика',
          children: ['/math/basics/', '/math/calculus/'],
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
}
