// const repls = require("../plugins/math-replacements");
import texmath from 'markdown-it-texmath'
import katex from 'katex'

import { macros } from './katex'
import { UserConfig } from 'vuepress'

const markdown: UserConfig = {
  // lineNumbers: true,
  //   .use(require("markdown-it-task-lists"))
  //   .use(require("markdown-it-texmath"), {
  //     katexOptions: {
  //       macros: repls
  //     }
  //   });
}

const extendsMarkdown: UserConfig['extendsMarkdown'] = (md) => {
  md.use(texmath, {
    engine: katex,
    delimiters: 'dollars',
    katexOptions: { macros, globalGroup: true, throwOnError: true },
  })
}

export { extendsMarkdown }
