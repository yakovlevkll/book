const fs = require('fs')
const glob = require('fast-glob')
const path = require('path')

function rmTree(pth) {
  try {
    const childs = fs.readdirSync(pth)

    for (let el of childs) {
      const child = path.resolve(pth, el)
      if (fs.lstatSync(child).isDirectory()) {
        rmTree(child)
      } else {
        fs.unlinkSync(child)
      }
    }

    fs.rmdirSync(pth)
  } catch {}
}

function main() {
  const DIR = process.cwd()
  const TARGET = 'output'
  const langs = ['en', 'ru']

  // Cleanup
  console.info('Cleanup...')

  rmTree(path.resolve(DIR, TARGET))

  // Creating links
  console.info('Creating links...')

  langs.forEach((lang) => {
    for (let el of glob.sync(`src/**/${lang}.md`)) {
      if (el.includes('!')) {
        continue
      }
      const parent = path.dirname(el).substring(3)
      const stem = path.basename(el).split('.')[0]
      const folder = `${TARGET}/${stem}/${parent}`
      fs.mkdirSync(folder, { recursive: true })
      const link = path.resolve(folder, 'index.md')
      fs.linkSync(el, link)
    }
  })

  // Images
  for (let el of glob.sync('src/**/*.(svg|png|jpg|jpeg|webp)')) {
    if (el.includes('!')) {
      continue
    }
    const parent = path.dirname(el).substring(3)
    const file = path.basename(el)

    langs.forEach((lang) => {
      const folder = `${TARGET}/${lang}/${parent}`
      fs.mkdirSync(folder, { recursive: true })
      fs.linkSync(el, path.resolve(folder, file))
    })
  }

  // Home pages
  if (!fs.existsSync(`${TARGET}/index.md`)) {
    fs.linkSync('src/home/ru.md', `${TARGET}/index.md`)
  }

  if (!fs.existsSync(`${TARGET}/en/index.md`)) {
    fs.linkSync('src/home/en.md', `${TARGET}/en/index.md`)
  }

  // Configuration files
  for (let el of glob.sync('src/.vuepress/**/*')) {
    const parent = path.dirname(el).substring(3)
    const file = path.basename(el)
    const folder = `${TARGET}/${parent}`
    fs.mkdirSync(folder, { recursive: true })
    fs.linkSync(el, path.resolve(folder, file))
  }
}

module.exports = main
