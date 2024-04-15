const path = require('path')

module.exports = {
  entry: './project/src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'production',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'astrochart.js',
    library: {
      name: 'astrochart',
      type: 'umd'
    }
  },
}