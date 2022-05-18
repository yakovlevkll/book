import { UserConfig } from 'vuepress'
import { katexStylesheetURL } from './katex'
import pwa from './pwa'

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
]

export default head
