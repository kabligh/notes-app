'use strict';

it('Creates a new note and stores text inside the note', function() {
  let newNote = new Note('this is the note text');
  expect(newNote.view).toEqual('this is the note text');
});

it('Can show the text stored inside the note', function() {
  let newNote = new Note('this is the note text');
  expect(newNote.viewNote()).toEqual('this is the note text');
});
