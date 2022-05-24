/* SITE STRUCTURE */

import { UserConfig } from 'vuepress'

/*
const ruBiology = require("./structure/ru/biology");
const ruMath = require("./structure/ru/math");
const enPythonBasics = require("./structure/en/python-basics");
*/

const locale: UserConfig['locales'] = {
  // The key is the path for the locale to be nested under.
  // As a special case, the default locale can use '/' as its path.
  '/': {
    // this will be set as the lang attribute on <html>
    lang: 'ru-RU',
    title: 'Ариадна',
    description: 'Учебник из будущего',
  },
}

export default locale
