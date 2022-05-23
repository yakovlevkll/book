import { UserConfig } from 'vuepress'
import { path } from '@vuepress/utils'

import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { palettePlugin } from '@vuepress/plugin-palette'

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
    componentsDir: path.resolve(__dirname, '../components'),
  }),

  // Progressive Web App
  ...pwaPlugins,

  // Search
  searchPlugin({
    maxSuggestions: 10,
  }),

  // Theming
  // palettePlugin({ preset: 'stylus' }),

  /* COMMUNITY PLUGINS */

  // Mermaid diagrams
  // 'mermaidjs',

  // Reading progress
  // 'reading-progress',

  // Smooth page scrolling
  // 'smooth-scroll',
]

export default plugins
