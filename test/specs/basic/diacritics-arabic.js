'use strict';
describe('basic mark with Arabic diacritics', function() {
  var $ctx;
  beforeEach(function(done) {
    loadFixtures('basic/diacritics-arabic.html');

    $ctx = $('.basic-diacritics-arabic');
    // Search for Arabic words without diacritics
    // Should match the same words with diacritics in the text
    new Mark($ctx[0]).mark(['مرحبا', 'اليوم', 'شكرا', 'السلام'], {
      'separateWordSearch': false,
      'diacritics': true,
      'done': function() {
        done();
      }
    });
  });

  it('should match Arabic words with diacritics when searching ' +
    'without diacritics', function() {
    expect($ctx.find('mark')).toHaveLength(4);
  });
});
