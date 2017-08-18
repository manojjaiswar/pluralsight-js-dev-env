import express from 'express'; // ES6 variable Syntax
import path from 'path';
import open from 'open';
import webpack from 'webpack'; // webpack import
import config from '../webpack.config.dev'; // webpack config import

/*eslint-disable no-console*/
const port = 3000; // const fixed your variable value can't change
const app = express();
const compiler = webpack(config); // webpack compiler

// express do webpack-dev-middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.get('/', function(reg, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
