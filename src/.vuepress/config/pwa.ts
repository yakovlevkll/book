import { UserConfig } from 'vuepress'

import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'

import colors from './colors'

export const pwaHead: UserConfig['head'] = [
  ['link', { rel: 'icon', href: '/icons/logo.png' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ['meta', { name: 'theme-color', content: colors.bgr }],
  [
    'meta',
    { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
  ],
  [
    'link',
    {
      rel: 'icon',
      href: '/icons/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      href: '/icons/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
  ],

  // Apple
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  [
    'meta',
    { name: 'apple-mobile-web-app-status-bar-style', content: colors.bgr },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: colors.accent,
    },
  ],
  // Microsoft
  [
    'meta',
    {
      name: 'msapplication-TileImage',
      content: '/icons/mstile-150x150.png',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: colors.accent }],
]

export const plugins = [
  pwaPlugin({}),
  pwaPopupPlugin({
    locales: {
      '/': {
        message: 'На сайте появилось много нового.',
        buttonText: 'Хорошо',
      },
      '/en/': {
        message: 'New content is available.',
        buttonText: 'Got it',
      },
    },
  }),
]
