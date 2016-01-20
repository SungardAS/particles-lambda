var config = require('config');

module.exports = function(){
  var src = config.lambdaSrc + ".zip";
  return src;
}
