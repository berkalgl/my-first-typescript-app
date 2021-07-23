module.exports = {
  entry: './app/app.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  //ts-loader takes care of running the TS compiler, its the js output from this process that will be added to the final bundle and sent to the browser
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  //you do not have declare each ts files to compile. Bundle.js has them all. bundle file that webpack will produce
  output: {
    filename: 'bundle.js'
  },
  //if this is false, you have refresh the browser. if it is true, webpack automatically refreshs it for you
  devServer: {
    inline: false
  }
};
