'use strict';

it('creates and stores an array of notes', function() {
  let myArray = new NoteList();
  myArray.addNote('test note');
  expect(myArray).toBeAnArray();
  expect(myArray.notes[0].view).toEqual('test note');
});

it('Displays all the notes stored in the array', function() {
  let myArray = new NoteList();
  myArray.addNote('Test note');
  myArray.addNote('Another test note');
  expect(myArray.notes.length).toEqual(2)
});
