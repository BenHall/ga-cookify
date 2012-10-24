var should = require("should");
var gaCookify = require('./../ga-cookify');

describe('GA Cookie Parser', function () {
  var example = { 
      __utma: '69927821.813633998.1348646399.1350058484.1350646356.38',
      __utmb: '69927821.9.10.1350646356',
      __utmc: '69927821',
      __utmz: '69927821.1350029525.34.15.utmcsr=0.0.0.0:3000|utmccn=(referral)|utmcmd=referral|utmcct=/login|utmctr=keywordtest' };

  it('returns an empty string if cookie does not exist', function(done) {
    var s = gaCookify.getSource({});
    s.should.eql('');
    done();
  });

  it('returns source', function (done) {
    var s = gaCookify.getSource(example);
    s.should.eql('0.0.0.0:3000');
    done();
  });

  it('returns campaign', function (done) {
    var s = gaCookify.getCampaign(example);
    s.should.eql('(referral)');
    done();
  });

  it('returns medium', function (done) {
    var s = gaCookify.getMedium(example);
    s.should.eql('referral');
    done();
  });

  it('returns keyword', function (done) {
    var s = gaCookify.getKeyword(example);
    s.should.eql('keywordtest');
    done();
  });

  it('returns all', function (done) {
    var s = gaCookify.getAll(example);
    s.should.eql({
      source: '0.0.0.0:3000',
      campaign: '(referral)',
      medium: 'referral',
      keyword: 'keywordtest'
    });
    done();
  });

});
