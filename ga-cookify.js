require('./extensions');
var cookieName = '__utmz';
var section = 'utmcsr';

exports.getSourceCookie = function(cookies) {
  var result;
  var cookie = cookies[cookieName];
  if(cookie === undefined)
    return "";

  var sourceBlock = cookie.split('=');
  sourceBlock.forEach(function(s, i) {
    if(s.indexOf(section) > -1) {
      var block = sourceBlock[i + 1].split('|')[0];
      result = block;
    }
  });
  return result;
};
