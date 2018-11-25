# inline-source-html-webpack-plugin
Inline assets into the generated HTML by [inline-source](https://github.com/popeindustries/inline-source)

> Inline and compress tags that contain the inline attribute. Supports `<script>`, `<link>`, and `<img>` (including *.svg sources) tags by default, and is easily extensible to handle others.

## Install
```sh
$ npm install --dev-save inline-source-html-webpack-plugin
```

## Usage
```javascript
import InlineSourceHtmlWebpackPlugin from 'inline-source-html-webpack-plugin'

// webpack config
module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin()
    new InlineSourceHtmlWebpackPlugin([<option>])
  ]
}
```

## Option
Refer to the [inline-source](https://github.com/popeindustries/inline-source)

## License
MIT
