'use strict';

function testNoteListArray() {
  var noteList = new NoteList();

  assert.isTrue(noteList.notes.length === 0);
}

testNoteListArray()

function testNoteList() {
  var noteList = new NoteList();

  noteList.addNote("Movies");
  assert.isTrue(noteList.notes[0].view === "Movies" );
  assert.isTrue(noteList.notes.length === 1);
}

testNoteList()
