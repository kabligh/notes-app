"use strict";

let noteListDouble = {
  addNote: function(){
    return true;
  },
  notes: ['To do: update only fans']
}

let noteListViewDouble = {
  display: function(){
    return '<ul><li><div>To do: update only fans</div></li></ul>'
  }
}

let noteController = new NoteController(noteListDouble, noteListViewDouble);

it("takes a note list model as parameter", function(){
  expect(noteController.noteList).toEqual(noteListDouble);
})

it("adds a note that says 'To do: update only fans'", function(){
  noteListDouble.addNote('To do: update only fans');
  expect(noteController.noteList.notes[0]).toEqual('To do: update only fans');
})

it("creates a note list view, passing in the note list model", function(){
  expect(noteController.getHTML()).toEqual(noteListViewDouble.display());
})
