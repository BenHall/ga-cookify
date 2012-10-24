require('./extensions');
var cookieName = '__utmz';
var source = 'utmcsr';
var campaign = 'utmccn';
var medium = 'utmcmd';
var keyword = 'utmctr';

var get = function(cookies, name) {
  var result;
  var cookie = cookies[cookieName];
  if(cookie === undefined)
    return "";

  var sourceBlock = cookie.split('=');
  sourceBlock.forEach(function(s, i) {
    if(s.indexOf(name) > -1) {
      var block = sourceBlock[i + 1].split('|')[0];
      result = block;
    }
  });

  return result;
};

var getAll = exports.getAll = function(cookies) {
  return {
    source: getSource(cookies),
    campaign: getCampaign(cookies),
    medium: getMedium(cookies),
    keyword: getKeyword(cookies)
  };
};

var getSource = exports.getSource = function(cookies) {
  return get(cookies, source);
};

var getCampaign = exports.getCampaign = function(cookies) {
  return get(cookies, campaign);
};

var getMedium = exports.getMedium = function(cookies) {
  return get(cookies, medium);
};

var getKeyword = exports.getKeyword = function(cookies) {
  return get(cookies, keyword);
};
