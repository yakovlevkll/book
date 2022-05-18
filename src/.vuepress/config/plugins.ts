import { UserConfig } from 'vuepress'

import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'

import { plugins as pwaPlugins } from './pwa'
import colors from './colors'
import containers from './containers'

const plugins: UserConfig['plugins'] = [
  ...containers,

  // Header links in URL
  activeHeaderLinksPlugin(),

  // Back to top button
  backToTopPlugin(),

  mediumZoomPlugin({
    selector: 'img',
    zoomOptions: {
      margin: 32,
      background: colors.bgr + 'EE',
      scrollOffset: 10,
    },
  }),

  // Download progress bar
  nprogressPlugin(),

  // Components
  registerComponentsPlugin({
    componentsDir: 'components',
  }),

  // Progressive Web App
  ...pwaPlugins,

  // Search
  searchPlugin({
    maxSuggestions: 10,
  }),

  /* COMMUNITY PLUGINS */

  // Mermaid diagrams
  // 'mermaidjs',

  // Reading progress
  // 'reading-progress',

  // Smooth page scrolling
  // 'smooth-scroll',
]

export default plugins
