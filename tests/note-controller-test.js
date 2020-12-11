"use strict";

let noteListDouble = {
  addNote: function(){
    return true;
  },
  notes: ["Rajah 1.0 🐅"]
}

let noteListViewDouble = {
  display: function(){
    return '<ul><li><div>Rajah 1.0 🐅</div></li></ul>'
  }
}

let noteController = new NoteController(noteListDouble, noteListViewDouble);

it("takes a note list model as parameter", function(){
  expect(noteController.noteList).toEqual(noteListDouble);
})

it("adds a note that says 'Rajah 1.0 🐅'", function(){
  noteListDouble.addNote('Rajah 1.0 🐅');
  expect(noteController.noteList.notes[0]).toEqual('Rajah 1.0 🐅');
})

it("creates a note list view, passing in the note list model", function(){
  expect(noteController.getHTML()).toEqual(noteListViewDouble.display());
})
