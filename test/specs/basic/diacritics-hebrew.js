'use strict';
describe('basic mark with Hebrew diacritics', function() {
  var $ctx;
  beforeEach(function(done) {
    loadFixtures('basic/diacritics-hebrew.html');

    $ctx = $('.basic-diacritics-hebrew');
    // Search for Hebrew words without diacritics
    // Should match the same words with diacritics in the text
    new Mark($ctx[0]).mark(['שלום', 'היום', 'תודה', 'כבוד'], {
      'separateWordSearch': false,
      'diacritics': true,
      'done': function() {
        done();
      }
    });
  });

  it('should match Hebrew words with diacritics when searching ' +
    'without diacritics', function() {
    expect($ctx.find('mark')).toHaveLength(4);
  });
});
