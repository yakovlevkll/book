/* SITE STRUCTURE */

import { UserConfig } from 'vuepress'

import { default as localeRU } from './ru/config'
import { default as localeEN } from './en/config'

/*
const ruBiology = require("./structure/ru/biology");
const ruMath = require("./structure/ru/math");
const enPythonBasics = require("./structure/en/python-basics");
*/

const locales: UserConfig['locales'] = {
  // The key is the path for the locale to be nested under.
  // As a special case, the default locale can use '/' as its path.
  ...localeRU,
  ...localeEN,
}

export default locales
