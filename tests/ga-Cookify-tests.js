var should = require("should");
var gaCookify = require('./../ga-cookify');

describe('GA Cookie Parser', function () {
  var example = { 
      __utma: '69927821.813633998.1348646399.1350058484.1350646356.38',
      __utmb: '69927821.9.10.1350646356',
      __utmc: '69927821',
      __utmz: '69927821.1350029525.34.15.utmcsr=0.0.0.0:3000|utmccn=(referral)|utmcmd=referral|utmcct=/login' };
  it('return source of request', function (done) {
    var s = gaCookify.getSourceCookie(example);
    s.should.eql('0.0.0.0:3000');
    done();
  });
});
