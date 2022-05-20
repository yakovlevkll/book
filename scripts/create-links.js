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

DIR = process.cwd()

// Cleanup
console.info('Cleanup...')

const outputFolders = [path.resolve(DIR, 'src/ru'), path.resolve(DIR, 'src/en')]

for (let el of outputFolders) {
  rmTree(el)
}

// Creating links
console.info('Creating links...')

for (let el of glob.sync('src/**/ru.md')) {
  const parent = path.dirname(el).substring(3)
  const stem = path.basename(el).split('.')[0]
  const folder = `src/${stem}/${parent}`
  fs.mkdirSync(folder, { recursive: true })
  const link = path.resolve(folder, 'index.md')
  fs.linkSync(el, link)
}

for (let el of glob.sync('src/**/*.(svg|png|jpg|jpeg|webp)')) {
  const parent = path.dirname(el).substring(3)
  const file = path.basename(el)

  const ru = `src/ru/${parent}`
  fs.mkdirSync(ru, { recursive: true })
  fs.symlinkSync(el, path.resolve(ru, file))

  const en = `src/en/${parent}`
  fs.mkdirSync(en, { recursive: true })
  fs.symlinkSync(el, path.resolve(en, file))
}