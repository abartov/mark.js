'use strict';
describe('basic mark with Arabic diacritics', function() {
  var $ctx;
  beforeEach(function(done) {
    loadFixtures('basic/diacritics-arabic.html');

    $ctx = $('.basic-diacritics-arabic');
    // Test searching for words without harakat matching words with harakat
    new Mark($ctx[0]).mark(['السلام', 'عليكم', 'اليوم', 'بسم', 'الكتاب'], {
      'separateWordSearch': false,
      'done': function() {
        done();
      }
    });
  });

  it('should match Arabic text with and without harakat', function() {
    // Each word appears twice in the fixture (once with harakat, once without)
    // 'السلام' appears 2 times (السَّلامُ and السلام)
    // 'عليكم' appears 2 times (عَلَيْكُم and عليكم)
    // 'اليوم' appears 2 times (الْيَوْمَ and اليوم)
    // 'بسم' appears 2 times (بِسْمِ and بسم)
    // 'الكتاب' appears 2 times (الْكِتَابُ and الكتاب)
    expect($ctx.find('mark')).toHaveLength(10);
  });
});
