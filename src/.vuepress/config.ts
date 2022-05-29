import { defineUserConfig } from 'vuepress'
import fs from 'fs'
import path from 'path'

import head from './config/head'
import { extendsMarkdown } from './config/markdown'
import { locales } from './config/locales'
import plugins from './config/plugins'
import theme from './config/theme'

export default defineUserConfig({
  base: process.env.NODE_ENV === 'production' ? '/book/' : '/',
  dest: 'build',
  extendsMarkdown,
  head,
  locales,
  pagePatterns: ['**/(index|ru|en).md'],
  plugins,
  theme,
  onWatched: (app, watchers) => {
    watchers.push(fs.watch(path.resolve(__dirname, 'styles/index.scss')))
    watchers.push(fs.watch(path.resolve(__dirname, 'styles/palette.scss')))
  },
})
