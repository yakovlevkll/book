import { UserConfig } from 'vuepress'
import { katexStylesheetURL } from './katex'
import { pwaHead } from './pwa'

const head: UserConfig['head'] = [
  /* STYLESHEETS */
  // ...pwa,
  [
    'link',
    {
      rel: 'stylesheet',
      href: katexStylesheetURL,
    },
  ],
  ...pwaHead
]

export default head
