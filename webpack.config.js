module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /ndoe_mudules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }, ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};