'use strict';
describe('basic mark with Hebrew diacritics', function() {
  var $ctx;
  beforeEach(function(done) {
    loadFixtures('basic/diacritics-hebrew.html');

    $ctx = $('.basic-diacritics-hebrew');
    // Test searching for words without nikkud matching words with nikkud
    new Mark($ctx[0]).mark(['שלום', 'עולם', 'היום', 'בראשית', 'הספר'], {
      'separateWordSearch': false,
      'done': function() {
        done();
      }
    });
  });

  it('should match Hebrew text with and without nikkud', function() {
    // Each word appears twice in the fixture (once with nikkud, once without)
    // 'שלום' appears 2 times (שָׁלוֹם and שלום)
    // 'עולם' appears 2 times (עוֹלָם and עולם)
    // 'היום' appears 2 times (הַיּוֹם and היום)
    // 'בראשית' appears 2 times (בְּרֵאשִׁית and בראשית)
    // 'הספר' appears 2 times (הַסֵּפֶר and הספר)
    expect($ctx.find('mark')).toHaveLength(10);
  });
});
