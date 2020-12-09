'use strict';

it('displays an empty list if no notes', function() {
  let noteListView = new NoteListView()
  expect(noteListView.display()).toEqual('<ul></ul>')
})

it('lists a note on the page', function() {
  let noteListView = new NoteListView()
  noteListView.noteList.addNote('To do: update only fans')
  expect(noteListView.display()).toEqual('<ul><li><div>To do: update only fans</div></li></ul>')
});

it('lists two notes on the page', function() {
  var noteListView = new NoteListView()
    noteListView.noteList.addNote('To do: update only fans')
    noteListView.noteList.addNote('Christmas shopping: make mum Hyko calendar')
    expect(noteListView.display()).toEqual('<ul><li><div>To do: update only fans</div></li><li><div>Christmas shopping: make mum Hyko calendar</div></li></ul>')
});
