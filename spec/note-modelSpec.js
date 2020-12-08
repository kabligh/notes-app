'use strict';

function testNote(text) {
  var note = new Note(text);
  assert.isTrue(note.view === text);
}

testNote("Shopping list");
