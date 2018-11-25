const { inlineSource } = require('inline-source')
const path = require('path')
const fs = require('fs')

function YuInlineSourceWebpackPlugin(options) {
  this.options = options
  this.dirname = path.dirname(this.options.rootpath)
}

YuInlineSourceWebpackPlugin.prototype.apply = function (compiler) {
  compiler.plugin('after-emit', (compilation, callback) => {
    const assets = Object.keys(compilation.assets)
    const htmlAssets = assets.filter(a => /^html\/\w+\.html$/.test(a))
    const linePromises = htmlAssets.map(h => {
      let htmlPath = path.resolve(this.dirname, h)
      return inlineSource(htmlPath, this.options)
    })
    try {
      Promise.all(linePromises).then((...rest) => {
        htmlAssets.forEach((h,index)=>{
          let htmlPath = path.resolve(this.dirname, h)
          fs.writeFileSync(htmlPath,rest[0][index])
        })
        callback()
      }).catch(() => {
        callback()
      })
    } catch (e) {
      callback()
    }
  })
}

module.exports = YuInlineSourceWebpackPlugin
