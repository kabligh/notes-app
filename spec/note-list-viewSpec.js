'use strict';

function testNoteListView() {
  var noteListView = new NoteListView()
  noteListView.noteList.addNote('To do: update only fans')

  assert.isTrue(noteListView.display() === '<ul><li><div>To do: update only fans</div></li></ul>')
}

testNoteListView()

function testTwoNotesListView() {
  var noteListView = new NoteListView()
  noteListView.noteList.addNote('To do: update only fans')
  noteListView.noteList.addNote('Christmas shopping: make mum Hyko calendar')

  assert.isTrue(noteListView.display() === '<ul><li><div>To do: update only fans</div></li><li><div>Christmas shopping: make mum Hyko calendar</div></li></ul>')
}

testTwoNotesListView()
